import { Request, Response } from 'express';
import { ArticleResponse, ZeldaGame } from '../utils/interfaces.js';
import { getData } from '../utils/ajax.js';

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export const getIndex = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: ArticleResponse = await getData('/games');
    const games: ZeldaGame[] = response?.data?.slice(0, 20) || [];

    if (!games.length) {
      res.status(404).send('Games not found');
      return;
    }

    games.forEach(game => {
      game.image = generateSlug(game.name) + '.jpg';
    });

    res.render('index', { games });
  } catch (error) {
    console.error('❌ Error fetching game data:', error);
    res.status(500).send('Server error');
  }
};

export const getAbout = (req: Request, res: Response): void => {
  res.render('about');
};

export const getCharacters = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getData('/characters');
    const characters = response?.data?.slice(0, 20) || [];

    characters.forEach(character => {
      character.image = generateSlug(character.name) + '.jpg';
    });

    res.render('characters', { characters });
  } catch (error) {
    console.error('❌ Error fetching characters data:', error);
    res.status(500).send('Server error');
  }
};
