import MovieSlider from '../components/MovieSlider';
import { BECAUSE_YOU_WATCHED, TOP_INDIA } from '../constants';
import { Tv } from 'lucide-react';

export default function TvShows() {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="px-8 md:px-16">
        <h1 className="text-5xl font-black text-white mb-4">TV Shows</h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Binge the best series from around the globe. Latest seasons, trending shows, and exclusive originals.
        </p>
      </div>

      <MovieSlider 
        title="Binge-Worthy Shows" 
        items={BECAUSE_YOU_WATCHED} 
        variant="rank" 
        icon={<Tv className="w-6 h-6 text-purple-500" />} 
      />

      <MovieSlider 
        title="International Series" 
        items={TOP_INDIA} 
        variant="poster" 
      />
      
      <MovieSlider 
        title="Recently Added Series" 
        items={BECAUSE_YOU_WATCHED} 
        variant="wide" 
      />
    </div>
  );
}
