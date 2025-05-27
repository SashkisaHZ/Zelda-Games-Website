import { Request, Response } from 'express';
import { ArticleResponse, ZeldaGame } from '../utils/interfaces.js';
import { getData } from '../utils/ajax.js';

export const getIndex = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: ArticleResponse = await getData('/games');
    console.log('✅ API Response:', response);

    const games: ZeldaGame[] = response?.data?.slice(0, 20) || [];

    if (!games.length) {
      res.status(404).send('Games not found');
      return;
    }

    // ✅ Function to slugify names
    function generateSlug(name: string): string {
      return name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') // remove special characters
        .trim()
        .replace(/\s+/g, '-'); // replace spaces with dashes
    }

    // ✅ Add `image` property to each game
    games.forEach(game => {
      game.image = generateSlug(game.name) + '.jpg';
    });

    // ✅ Send modified games array to the view
    res.render('index', { games });
  } catch (error) {
    console.error('❌ Error fetching game data:', error);
    res.status(500).send('Server error');
  }
};
