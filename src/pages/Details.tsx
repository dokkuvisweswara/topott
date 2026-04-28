import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Plus, Share2, Star, ThumbsUp, Calendar, Clock, ChevronDown } from 'lucide-react';
import { TRENDING_MOVIES, TOP_INDIA, RECENTLY_ADDED, BECAUSE_YOU_WATCHED } from '../constants';
import MovieSlider from '../components/MovieSlider';
import { Movie } from '../types';

const EPISODES = [
  { id: 1, title: "The Beginning", duration: "45m", description: "In the series premiere, we are introduced to the mysterious world.", thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBrIDUh13nA3boJYv6cqnSQsApW4sryYcqqD1CvgCEzGyT5VDZzJ9vd5ZkehK_L7X0GBgXO-w1MZS2HYBF9iIyAf86zY-xYLzWJ3JxWfTy9Jw-ld_4aS2e9iQqHavooUBkdNGj5K-Z4xk4pi1kyvYUPznfCcIAJqCZlBdp824Ud6t23jwqKQjZqpFGX-_gyigPcOKyBpQBuINRLI2hYqVGbm9VVXkdh3a43O1Db2E5MNo0auenk9lu3x9NKroVaAH9o8lh4nBfniSL" },
  { id: 2, title: "Dark Secrets", duration: "42m", description: "Tensions rise as long-hidden secrets begin to surface.", thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSmT1CT98bsA8IX-go_02EG_M1VS_bxuhGrK9Cb3S-5htsG_eN_LZLMESKkt_WcYMGwnXB2yIpRU-vgOFhjaYiVUu21Wz5iK1lwMgXQcOGmcd_2NutQRv0pnvyPlmAX6FMCVhdV9KDkxLLBpotaKGb21lO6kMaHoCOWLk1-uUoQ296yJQ2P8_o59BjW6kc6XNoztPTyq2rCh6-Q3yZ106BlrCpHv-iHyjmTfkFFZjDoSwBdTSjGyJrx7z3baS1rR0ANodO5EWEPoaQ" },
  { id: 3, title: "The Choice", duration: "48m", description: "A difficult decision must be made that will change everything.", thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9TF6pof6STW2ygOJa34wl88uljkxnZZUqwVIQKUJVlEjs6UUv0DhA6sCE_hj73PtVNsTC1HMa4gMQQH3jKYF8b7F6um7wLinsMGIGCy7qS3-prOCKtCJaXMqs137-Id-jiBhCQVgmKz1_3ZoS2CPh1QpjAI1qbqi9zqHMlYzFSdSMczGMvrbaF5vFL2Np6WcNOVEQ2_9inkGqXYqJZJFYHLAXnA_1lO5wHlNhKhVMLYq8UBtM_V0hnoTAAM0z5SrZIGK1diUvI_MO" },
];

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [activeSeason, setActiveSeason] = useState(1);
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);

  useEffect(() => {
    const allMovies = [...TRENDING_MOVIES, ...TOP_INDIA, ...RECENTLY_ADDED, ...BECAUSE_YOU_WATCHED];
    const found = allMovies.find(m => m.id === Number(id));
    setMovie(found || null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!movie) return <div className="pt-32 text-center text-white">Loading...</div>;

  const isTvShow = movie.type?.includes('S1') || movie.id % 2 === 0; // Mock logic for TV show

  return (
    <div className="flex flex-col min-h-screen">
      {/* Backdrop */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12 flex flex-col items-start gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white"
          >
            {movie.title}
          </motion.h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-300">
            <span className="flex items-center gap-1"><Star size={16} fill="currentColor" className="text-yellow-400" /> 8.9</span>
            <span>2024</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">4K ULTRA HD</span>
            <span className="flex items-center gap-1"><Clock size={16} /> 2h 15m</span>
          </div>

          <p className="max-w-2xl text-gray-300 text-lg">
            This is a gripping story that takes you on an unforgettable journey. Experience the high stakes and emotional depth of this cinematic masterpiece.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-transform">
              <Play className="fill-current" /> Play Now
            </button>
            <button className="flex items-center gap-2 bg-white/10 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/20 transition-colors">
              <Plus /> Watchlist
            </button>
            <button className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors">
              <ThumbsUp />
            </button>
            <button className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors">
              <Share2 />
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-16 py-12 space-y-16">
        {/* Episodes Section if TV Show */}
        {isTvShow && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Episodes</h2>
              <div className="relative">
                <button 
                  onClick={() => setShowSeasonDropdown(!showSeasonDropdown)}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white font-bold hover:bg-white/10 transition-colors"
                >
                  Season {activeSeason} <ChevronDown size={16} />
                </button>
                {showSeasonDropdown && (
                  <div className="absolute top-12 right-0 w-32 bg-[#1c1b1b] border border-white/10 rounded-xl overflow-hidden z-30">
                    {[1, 2, 3].map(s => (
                      <button 
                        key={s}
                        onClick={() => { setActiveSeason(s); setShowSeasonDropdown(false); }}
                        className={`w-full text-left px-4 py-3 hover:bg-white/5 transition-colors ${activeSeason === s ? 'text-blue-500' : 'text-white'}`}
                      >
                        Season {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {EPISODES.map((ep, idx) => (
                <motion.div 
                  key={ep.id}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-4 flex gap-6 cursor-pointer group"
                >
                  <div className="w-48 aspect-video rounded-xl overflow-hidden relative flex-shrink-0">
                    <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play fill="currentColor" className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{idx + 1}. {ep.title}</h3>
                      <span className="text-gray-500 text-sm">{ep.duration}</span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2">{ep.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Details Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/5 rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">About</h2>
            <div className="space-y-6 text-gray-400">
              <p>
                Experience the epic story of "{movie.title}". Shot on 70mm IMAX cameras, it offers a visual spectacle unlike anything else. Written and directed by award-winning visionaries.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm mt-8">
                <div>
                  <span className="block text-white font-bold mb-1">Director</span>
                  <span>Christopher Nolan</span>
                </div>
                <div>
                  <span className="block text-white font-bold mb-1">Cast</span>
                  <span>Cillian Murphy, Emily Blunt, Matt Damon</span>
                </div>
                <div>
                  <span className="block text-white font-bold mb-1">Genres</span>
                  <span>Action, Drama, Thriller</span>
                </div>
                <div>
                  <span className="block text-white font-bold mb-1">Audio</span>
                  <span>English (Original), Hindi, Tamil, Telugu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">Info</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Maturity Rating</span>
                <span className="bg-white/10 px-2 rounded text-white font-bold">13+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Release Date</span>
                <span className="text-white">Mar 24, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Main Language</span>
                <span className="text-white">English</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Subtitles</span>
                <span className="text-white">Available (12)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Section */}
        <MovieSlider title="More Like This" items={TRENDING_MOVIES} variant="poster" />
      </div>
    </div>
  );
}
