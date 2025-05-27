interface Meta {
  count?: number;
  title?: string;
  url?: string;
}

export interface ZeldaGame {
  id: string;
  name: string;
  description: string;
  release_date?: string;
  developer?: string;
  publisher?: string;
  image?: string;
  // add more fields as needed
}

export interface ArticleResponse {
  success?: boolean;
  count?: number;
  data?: ZeldaGame[];
  error?: unknown;
}
