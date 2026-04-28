import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import LiveTv from './pages/LiveTv';
import Subscription from './pages/Subscription';
import Details from './pages/Details';
import Epg from './pages/Epg';
import { Home as HomeIcon, Search, TrendingUp, User } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#131313]">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/live-tv" element={<LiveTv />} />
            <Route path="/epg" element={<Epg />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>

        {/* Mobile Bottom Nav */}
        <nav className="fixed bottom-0 w-full z-50 md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 flex justify-around items-center h-16 px-4">
          <a href="/" className="flex flex-col items-center justify-center text-white gap-1">
            <HomeIcon className="w-6 h-6" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Home</span>
          </a>
          <a href="/movies" className="flex flex-col items-center justify-center text-gray-500 gap-1 hover:text-white transition-colors">
            <Search className="w-6 h-6" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Search</span>
          </a>
          <a href="/live-tv" className="flex flex-col items-center justify-center text-gray-500 gap-1 hover:text-white transition-colors">
            <TrendingUp className="w-6 h-6" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Hot</span>
          </a>
          <a href="/login" className="flex flex-col items-center justify-center text-gray-500 gap-1 hover:text-white transition-colors">
            <User className="w-6 h-6" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Me</span>
          </a>
        </nav>

        <Footer />
      </div>
    </Router>
  );
}
