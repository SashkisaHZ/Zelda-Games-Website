import { ArticleResponse } from './interfaces.js';
import * as Dotenv from 'dotenv';
Dotenv.config({ path: '.env' });

const apiUrl = process.env.API_URL;

export const getData = async (endpoint: string): Promise<ArticleResponse> => {
  try {
    if (!apiUrl) {
      throw new Error('API_URL not defined in environment variables');
    }

    const res: Response = await fetch(apiUrl + endpoint);
    const data: ArticleResponse = await res.json();
    return data;
  } catch (error) {
    console.error('❌ Fetch error:', error);
    return { error };
  }
};
