import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 h-20 transition-all duration-300 ${
        scrolled || location.pathname !== '/' ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-12">
        <Link to="/">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-white cursor-pointer hover:text-blue-500 transition-colors"
          >
            STREAMFLIX
          </motion.span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`font-bold transition-colors ${isActive('/') ? 'text-white border-b-2 border-blue-600 pb-1' : 'text-gray-400 hover:text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/movies" 
            className={`font-bold transition-colors ${isActive('/movies') ? 'text-white border-b-2 border-blue-600 pb-1' : 'text-gray-400 hover:text-white'}`}
          >
            Movies
          </Link>
          <Link 
            to="/tv-shows" 
            className={`font-bold transition-colors ${isActive('/tv-shows') ? 'text-white border-b-2 border-blue-600 pb-1' : 'text-gray-400 hover:text-white'}`}
          >
            TV Shows
          </Link>
          <Link 
            to="/live-tv" 
            className={`font-bold transition-colors ${isActive('/live-tv') ? 'text-white border-b-2 border-blue-600 pb-1' : 'text-gray-400 hover:text-white'}`}
          >
            Live TV
          </Link>
          <Link 
            to="/epg" 
            className={`font-bold transition-colors ${isActive('/epg') ? 'text-white border-b-2 border-blue-600 pb-1' : 'text-gray-400 hover:text-white'}`}
          >
            TV Guide
          </Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/10 focus-within:border-blue-500 transition-all group">
          <Search className="w-4 h-4 text-gray-400 group-focus-within:text-blue-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search titles, genres" 
            className="bg-transparent border-none outline-none focus:ring-0 text-sm w-48 text-white placeholder:text-gray-500"
          />
        </div>
        <Link to="/subscription">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffe16d] text-[#221b00] font-bold px-6 py-2 rounded-full hover:bg-[#ffe16d]/90 transition-all"
          >
            Subscribe
          </motion.button>
        </Link>
        <Link to="/login" className="hidden md:block text-gray-400 hover:text-white font-bold">Login</Link>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 hover:border-blue-500 transition-colors cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBswuRMjCBtHsv7VrUe_57DnWT8NrE0L4JrTdxWsnj0yWu39Wghn4oBHSeQWEGSb8CtSMBzH-H421dvyu4iBKJ_ojf3_4kl4F704ykH5GvEyEYUJGm92jrgy-xzl0lvpZsGbx4Qj8PPhYHuSBmmDcOGzt5HiqDwR0C6XrElgsqrCmzc-QYROXUoiX6njBych6cS-5TIywmqbkJWLc1nrjsRCMRTwwuskNin5ik7JgPTLNrZudt7FWfZfdK7HT0Pd7NuoTpyZ8NyFRv" 
            alt="Profile"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
