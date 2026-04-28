import { TrendingUp, ChevronRight } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import MovieSlider from '../components/MovieSlider';
import { 
  TRENDING_MOVIES, 
  TOP_INDIA, 
  RECENTLY_ADDED, 
  BECAUSE_YOU_WATCHED 
} from '../constants';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <HeroBanner />

      {/* Quick Login Section for Home */}
      <section className="px-8 md:px-16 py-20 bg-black/40 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black text-white mb-6">Experience the future of streaming.</h2>
            <p className="text-gray-400 text-lg mb-8">Sign in now to sync your progress across all your devices. Not a member? Join millions of others today.</p>
            <Link to="/subscription" className="text-blue-500 font-bold hover:underline flex items-center gap-2">
              Explore our plans <ChevronRight size={16} />
            </Link>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Login</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white outline-none focus:border-blue-500 transition-all font-medium"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white outline-none focus:border-blue-500 transition-all font-medium"
              />
              <div className="flex gap-4">
                <div className="flex-1 bg-white/10 rounded-2xl flex items-center justify-center font-mono text-lg text-blue-400 select-none italic border border-white/5">
                  M3p8L
                </div>
                <input 
                  type="text" 
                  placeholder="Captcha"
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none focus:border-blue-500 transition-all text-center"
                />
              </div>
              <button className="w-full bg-[#ffe16d] text-[#221b00] font-bold py-4 rounded-2xl hover:bg-[#ffe16d]/90 transition-all text-lg">
                Sign In
              </button>
              <p className="text-center text-sm text-gray-500">
                New here? <Link to="/signup" className="text-white hover:underline">Create an account</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <div className="space-y-16 mt-16 relative z-20">
        <MovieSlider 
          title="Trending Now" 
          items={TRENDING_MOVIES} 
          variant="rank" 
          icon={<TrendingUp className="w-6 h-6 text-[#ffe16d]" />} 
        />

        <MovieSlider 
          title="Top in India" 
          items={TOP_INDIA} 
          variant="poster" 
        />

        <MovieSlider 
          title="Recently Added" 
          items={RECENTLY_ADDED} 
          variant="wide" 
        />

        <MovieSlider 
          title="Because You Watched" 
          items={BECAUSE_YOU_WATCHED} 
          variant="watched" 
          subtitle="Cosmos"
        />
      </div>
    </div>
  );
}
