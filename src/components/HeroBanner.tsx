import { motion } from 'motion/react';
import { Play, Plus } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_4WaXGYADUJJqyxviJAIaGGMa7o6hXXqRMv8kw-NwUBbmcRvol0pbBYvB0M6SJ92_P0JOYzFCzsrSZxLQ4McZtq5IWlviloJq3s4bS_oVvMv5ngpZh967wsWj1hxN5R-uAhg7Dypv_aRYDqjd57MwoxDJy0l9XRBCVxFrf5xyIwH4VSotXkPR1v0RNpv5w8W2WsB_LR3gHXMXN9jeLcdbEN3urdllVEqkMgXr2R2oMztckK_uwBgJCQm8-JuTDGndT4yLW4OtdGV" 
          alt="Hero Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-8 md:px-16 max-w-4xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded font-bold tracking-widest uppercase shadow-lg shadow-blue-600/20">New Release</span>
          <span className="text-white/60 text-sm">• 2024 • Action • Sci-Fi • 4K Ultra HD</span>
        </div>
        <h1 className="font-sans text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          Unlimited Movies, Shows & Live Sports
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed font-medium">
          Watch the latest regional hits and trending global blockbusters. 10M+ users streaming daily.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#ffe16d] text-[#221b00] font-bold text-lg px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-yellow-500/20 transition-all"
          >
            <Play className="w-5 h-5 fill-current" />
            Watch Now
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-white/30 bg-white/5 backdrop-blur-md text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
          >
            <Plus className="w-5 h-5" />
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
