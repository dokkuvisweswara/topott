import MovieSlider from '../components/MovieSlider';
import { TRENDING_MOVIES, RECENTLY_ADDED } from '../constants';
import { Film } from 'lucide-react';

export default function Movies() {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="px-8 md:px-16">
        <h1 className="text-5xl font-black text-white mb-4">Movies</h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Dive into our vast collection of cinematic masterpieces. From high-octane action to heart-wrenching dramas.
        </p>
      </div>

      <MovieSlider 
        title="Popular Movies" 
        items={TRENDING_MOVIES} 
        variant="rank" 
        icon={<Film className="w-6 h-6 text-blue-500" />} 
      />

      <MovieSlider 
        title="New Releases" 
        items={RECENTLY_ADDED} 
        variant="wide" 
      />
      
      <MovieSlider 
        title="Action & Adventure" 
        items={TRENDING_MOVIES} 
        variant="poster" 
      />
    </div>
  );
}
