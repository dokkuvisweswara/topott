export interface Movie {
  id: number;
  title: string;
  image: string;
  rank?: number;
  tags?: string[];
  year?: string;
  genre?: string;
  quality?: string;
  description?: string;
  progress?: number;
  addedTime?: string;
  type?: string;
}
