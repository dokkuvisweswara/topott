import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Play, 
  Plus, 
  TrendingUp, 
  Home, 
  Film, 
  Tv, 
  Calendar, 
  User,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
  Info
} from 'lucide-react';

// Types
interface Movie {
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

const TRENDING_MOVIES: Movie[] = [
  {
    id: 1,
    title: "The Midnight Case",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKwlVfwBQuY5MmE_VuoJW2Kq8RwHxVE5hC2JxNIvp14Kf5uhWkVBPreZ-wa3fjtkoWUaPjsLnVioKVQ45_pyykmmwquDeStFUdwGrru8efRMKDym1XIJ8DhiZKHIx9hjcX2o0zmURL7VXh_uOzawv590_xGeMpgpJdyWQDL33np3CHtA0U1LjZep50IyN8M7YBmQWjv3Ri7iTPzGCtvWcd3-dXj51iaKVWEggwwstyIyNjgF14R4uXPr-HG7nnJWiOGXOohIrzq3-4",
    rank: 1
  },
  {
    id: 2,
    title: "Vintage Reels",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgYMgrpDpJMvfziQ4UJrhiedV0SaFsl6tKZkrqEGaJwqWm-Jt-E60AQae7jDHB2KE8pK7nhipo0kHbplUX3KP10QUPk5e_HjDtSjhr2GvVN0OCR0FwohmQCzdwYYQDBKgMN-_9N9xakNinWH3ykesREyKrTwqD0AAOFDdeHDLz5s6QJeB53RV7XM7XaCOPsAw91Nyokzuh5QILHD54Zz6WecdhOmDObxIqXmB7qJVGmNwaoXO_aWkOvJXEtO4RIJuHbsUHwI5r4cqz",
    rank: 2
  },
  {
    id: 3,
    title: "Neon Horizon",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbVkRLKs8TBQKYhHyQBkS_aOSpXVXJkuS12YUVaQqJrzX9CrzBYc28hroAw-aR4seb_ZDLugbrehT5eZlcnqklAyhW7wJDC2u8gVHj4jQFxqRe8AeturNs-LSqt6Zt1ntN5bFbNbUQHnEGTO6ELkfsPCLVNh4Ng3kumOruqhM0pJLQRJtHbaMl1rrAJNvwyiGLbqYff297SOtiwd1ZcyDn-xQMhrHfUjv_UUR1m1_zOx9kXCCHOSJaqY9Y5IvDgOUJL3Dv3EqxEl0B",
    rank: 3
  }
];

const TOP_INDIA: Movie[] = [
  { id: 4, title: "Bharat Pride", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM8Vm7_VDsn_Kz1mm4MN3I3iQssRRQYIrSoZfUe80e6q-joGcC1eqUi97Kv7-ws55bDad9t6iOwlno0wtTseGBTFzKad71Eu-rxusZ5XuSs2YAequgSRPkbn8PR75hjzyMCeFnzrTqb5wHFEg4Rup4YGkgPNJD6hXf1l_4ARBaLdJNIoxGdGIcFCRRfTN-B-F79LKAyUV7nvqZKQ4unTD5P1ENDZ5Qx0B1z_MqgGrUuc_nU9Wbr97F2c79Lrh4hgl9-Q6f7hhRIqQB" },
  { id: 5, title: "Golden Temple", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaGtcojlihpRoep--d8egGwOIwrM9pNrIe9ni6dEWTGUDYE_z02Y5BM2fzh7GlTLHLq7yK57vUADa9eow_EC1csj-E0WbzyMccfQwdHB5Np1zlih_a42xRGcn5Yfij8RMsdeR1CIaEbDf7Aq1-IGtUdd0kHskK7MEAepPS3KA0rULcSHrHPqBhKqLlBkijb3PTmcLQUTTB84HfZtSgTUpdTF2GCDVjO_FZuRBDyO1duNxSDimmr7Y5HfFfiHEwXzWKduQLxjp_8_TK" },
  { id: 6, title: "Dawn at Taj", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByk0wcsu7Y5PWYLEhV1vUvRImAJzVVD1_7p2RYnN8pSiMU50L3q1m8gof4Hnnzo49wF7bbmMDkrpzGSA_vEeToHzIVvBdZCsg8694hwt_IS1IrIYOlRpjO4zGrAViAhWBgQx7lRjOC-_YZ49YSJ2wDuXath_CjaO-kVHbroVr8f-wQbQAtu2cig-jsnRWIswJYObL2IEvGo-eWWk-lEBnGzSWaRhuN9X9dTi2GBQf2ciDj_msnNrq2f5WG6-e5NHeBQ7ptbnneLBk7" },
  { id: 7, title: "Cultural Rhythms", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK-dmgWgy8w0s4Vq-VX7sIZoXkt5h81gRJNMzXUesd_9v8udZ6iiej24EJ7ciOR-BIrWujVgETju1JF-jjmutrv9raXmoc32NzRJ_vJjdyrMJUvRgkvBJ_EzLWNCgsM85ovVJMnZWklvhVAOf-Gt9Oi0jZXQsoJCVZ2EDofnQu4lRHZFQzyS829hl-DKFWLdj7nWzQttf8WzpgDZ779cPMhVOn_5NmGsj6vYt9rpDAyxT1X2hCbVzKT_gBlV51ccNefE7KW_Beqmlu" },
  { id: 8, title: "Himalayan Peaks", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8PW9e9pZRplNTC21HVxeY_JtsfZeV1c5dHYrrsmJwf0ks5UeCBWxFhtA2eMKQXdBMKtyFYm9CkE7lw5AWqXVuwh-TQnEF82utoZgqhk2Aj3tv5hmGw-R5du13LLHxjmXVvh4DwOl6vLKdf6Oo7EdYjZXJ3BmPFyB21_ac9Rjl-S42gIz5xp5kBKmkNWQ6NNKuc2oqqhgNdof7fdHyBE4xIPJ109vIc6blnuAiEwHrgoSq66QFo2BtAxvsFyUae3HRQe2wIH9EdMim" }
];

const RECENTLY_ADDED: Movie[] = [
  { id: 9, title: "Cyber Frontier", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBrIDUh13nA3boJYv6cqnSQsApW4sryYcqqD1CvgCEzGyT5VDZzJ9vd5ZkehK_L7X0GBgXO-w1MZS2HYBF9iIyAf86zY-xYLzWJ3JxWfTy9Jw-ld_4aS2e9iQqHavooUBkdNGj5K-Z4xk4pi1kyvYUPznfCcIAJqCZlBdp824Ud6t23jwqKQjZqpFGX-_gyigPcOKyBpQBuINRLI2hYqVGbm9VVXkdh3a43O1Db2E5MNo0auenk9lu3x9NKroVaAH9o8lh4nBfniSL", addedTime: "Yesterday", type: "S1 E1" },
  { id: 10, title: "Inside Hollywood", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSmT1CT98bsA8IX-go_02EG_M1VS_bxuhGrK9Cb3S-5htsG_eN_LZLMESKkt_WcYMGwnXB2yIpRU-vgOFhjaYiVUu21Wz5iK1lwMgXQcOGmcd_2NutQRv0pnvyPlmAX6FMCVhdV9KDkxLLBpotaKGb21lO6kMaHoCOWLk1-uUoQ296yJQ2P8_o59BjW6kc6XNoztPTyq2rCh6-Q3yZ106BlrCpHv-iHyjmTfkFFZjDoSwBdTSjGyJrx7z3baS1rR0ANodO5EWEPoaQ", addedTime: "2d ago", type: "Documentary" },
  { id: 11, title: "Urban Echoes", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9TF6pof6STW2ygOJa34wl88uljkxnZZUqwVIQKUJVlEjs6UUv0DhA6sCE_hj73PtVNsTC1HMa4gMQQH3jKYF8b7F6um7wLinsMGIGCy7qS3-prOCKtCJaXMqs137-Id-jiBhCQVgmKz1_3ZoS2CPh1QpjAI1qbqi9zqHMlYzFSdSMczGMvrbaF5vFL2Np6WcNOVEQ2_9inkGqXYqJZJFYHLAXnA_1lO5wHlNhKhVMLYq8UBtM_V0hnoTAAM0z5SrZIGK1diUvI_MO", addedTime: "3d ago", type: "Film" }
];

const BECAUSE_YOU_WATCHED: Movie[] = [
  { id: 12, title: "Interstellar Voyage", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-6Y6FPrUIm9lFG7OBwHvH6ZDbZl7lhP5_sRsi6AaUgFDSp0VIiWo6Dd1DP0WUHxamWCXZ1trHsz87ZVrx6cYNMtDUoolVlGFA9QzWW_y5ul8moAvmKw72xYOThAOIvjI2vwG_IoC1evIx5mRjmhm6cJ5XA2pp-aLEdTEeTQCmYhXflLmjY9y7aOYBUSdsHmRBVlWPX_oDSnbBGNUoQn_SvyvTb7951Q5NrXIF1JUQ0nq9VElnYux6h0YUXx6CypXJevJjaqrT2YAL", progress: 66 },
  { id: 13, title: "Stellar Mysteries", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8vkv7c_PfSV5La2BBhiL2FRMJxrvw8AR4TsoHd_1LZZ-XZ2h0-fV5Zw_HiX9JTzvz3VvPaEdMfIfnGRGILViMsch4V7g_ZrCHfG7DWZK2hZPciNtsYZEo1m2PXzi-EcGNmG1BmmySx0Fw076RJKga4wFUo2C2WmRqchCM3_ASZ9GA0O_HxnMeLP9C89Ua3YTvettSpJASA6I5Xkp063ecc4k6EkEblAJNZ_mkJrji1-5DsI3XHSKQhNj_0y3pIE7kVFJ6SO4K0EcF", progress: 25 },
  { id: 14, title: "The Last Frontier", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhdexiM10y3I7KyoqLRvzc8JieWLn8XpjYkNhreBfSEMRSp2l33qVHmC_wiNecWwx2gXv5_4oqL3qgBBeUGwmqofeMdbhNREk0C6i7Y5Z7nSiA7yv7Wssu8MQx3HyUPjn6vUQG2axLVYXGuql2nGRWcnq3c1qCxk_VvxqCuHhlyQUVgtA3JXg5ZYKknHNiJ-ExmlxyaU3axiMHrMCHdaqQo3Fw8Ws9SDW_xSul_0C3vbEPtyDOamioWqNq9fOsAczG81_3M0mejomu" },
  { id: 15, title: "Deep Sky Origins", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe5UqWAfQSMGmnqLLjICDkC_Y7HSPAaHziklofDv0q3Kd9wUUKXAy6eEZ_WQTza8BMc9oSydgYeR85nL5ld2E8-Tc_DoyZ3Ht4-3vOlQtvX6syJyNidWv4iUwyILecIDke35jTZd9VI_rFUh_-HrBYwU0T142veFqq6lGg7KI7gsJC27n4ES07HDrcIoO7lYHqU8r6UYljI0GkOjZ9SgxAq9yQRDy88DU4dFyF8yFnFzXTcNsk7Hma2mWC7W77_FyXE3AWAgQZz2RI" },
  { id: 16, title: "Solar System", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsNLE2IogfB1Z9odJ3bwDDdtWVjmgpbFRpg9miyWIUDsIgA5sGv617_58KJoQnoni-9mVXTy61Nc4ZohpjlBgFmV2tc79eaGF6BGtQSlqMFrkklEJ7zr7RpBYmUT6uR6NgETY_s4m94g0Jdko_ICaOGa6IMXGbOFOLoVc5rcpU0qnt19apvQn-crUM7GzgorS9jl4Q9KI7egGyCG_eQdarQPXf-L5ZSWYLt2k53yIKxmvlV4_dK3hmBd6h-2wBT0mKKVJoFBN9yM0c" }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#131313]">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 h-20 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-12">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-white cursor-pointer"
          >
            STREAMFLIX
          </motion.span>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white font-bold border-b-2 border-blue-600 pb-1">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Movies</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">TV Shows</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Live Sports</a>
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
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffe16d] text-[#221b00] font-bold px-6 py-2 rounded-full hover:bg-[#ffe16d]/90 transition-all"
          >
            Subscribe
          </motion.button>
          <button className="hidden md:block text-gray-400 hover:text-white font-bold">Login</button>
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

      <main className="flex-grow pb-20">
        {/* Hero Section */}
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

        {/* Content Rows */}
        <div className="space-y-16 -mt-24 relative z-20">
          {/* Trending Now */}
          <section className="pl-8 md:pl-16 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              Trending Now
              <TrendingUp className="w-6 h-6 text-[#ffe16d]" />
            </h2>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pr-16 pb-4">
              {TRENDING_MOVIES.map((movie) => (
                <motion.div 
                  key={movie.id}
                  whileHover={{ scale: 1.02 }}
                  className="flex-none w-[300px] md:w-[350px] relative group cursor-pointer"
                >
                  <div className="flex items-end">
                    <span 
                      className="text-[160px] font-black leading-none text-transparent stroke-white/30 stroke-2 translate-x-4 z-10 transition-colors group-hover:text-white/10"
                      style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}
                    >
                      {movie.rank}
                    </span>
                    <div className="aspect-[2/3] w-full rounded-2xl overflow-hidden border border-white/5 group-hover:border-blue-500/50 transition-all duration-300 -ml-12 shadow-2xl relative">
                      <img 
                        src={movie.image} 
                        alt={movie.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">MOST WATCHED</span>
                        <h3 className="text-white font-bold text-xl">{movie.title}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <Play className="w-4 h-4 fill-current" />
                          </button>
                          <button className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                            <Info className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Top in India */}
          <section className="pl-8 md:pl-16">
            <h2 className="text-2xl font-bold text-white mb-6">Top in India</h2>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pr-16 pb-4">
              {TOP_INDIA.map((movie) => (
                <motion.div 
                  key={movie.id}
                  whileHover={{ 
                    scale: 1.1,
                    zIndex: 30,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                  }}
                  className="flex-none w-[220px] aspect-[2/3] rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-300"
                >
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-bold">{movie.title}</p>
                    <div className="flex gap-2 mt-2">
                      <Play className="w-4 h-4 text-white fill-current" />
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recently Added */}
          <section className="pl-8 md:pl-16">
            <h2 className="text-2xl font-bold text-white mb-6">Recently Added</h2>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pr-16 pb-4">
              {RECENTLY_ADDED.map((movie) => (
                <motion.div 
                  key={movie.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex-none w-[320px] aspect-video rounded-2xl overflow-hidden relative group cursor-pointer bg-white/5"
                >
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-lg">{movie.title}</p>
                    <p className="text-white/60 text-xs">{movie.type} • Added {movie.addedTime}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="bg-white text-black p-3 rounded-full shadow-lg"
                    >
                      <Play className="w-4 h-4 fill-current" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Because You Watched */}
          <section className="pl-8 md:pl-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-white">Because You Watched</h2>
              <span className="text-blue-500 font-bold text-xl px-2 py-1 bg-blue-500/10 rounded-lg">Cosmos</span>
            </div>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pr-16 pb-4">
              {BECAUSE_YOU_WATCHED.map((movie) => (
                <motion.div 
                  key={movie.id}
                  whileHover={{ y: -10 }}
                  className="flex-none w-[200px] flex flex-col gap-2 group cursor-pointer"
                >
                  <div className="aspect-[2/3] rounded-2xl overflow-hidden border border-white/5 group-hover:border-blue-500 transition-all duration-300 relative">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  </div>
                  {movie.progress ? (
                    <div className="h-1 bg-white/20 rounded-full mt-2 w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${movie.progress}%` }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="h-1 mt-2 w-full" />
                  )}
                  <p className="text-white text-sm font-bold mt-1 truncate">{movie.title}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-50 md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 flex justify-around items-center h-16 px-4">
        <a href="#" className="flex flex-col items-center justify-center text-white gap-1">
          <Home className="w-6 h-6" />
          <span className="text-[10px] uppercase font-bold tracking-widest">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-gray-500 gap-1 hover:text-white transition-colors">
          <Search className="w-6 h-6" />
          <span className="text-[10px] uppercase font-bold tracking-widest">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-gray-500 gap-1 hover:text-white transition-colors">
          <TrendingUp className="w-6 h-6" />
          <span className="text-[10px] uppercase font-bold tracking-widest">Hot</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-gray-500 gap-1 hover:text-white transition-colors">
          <User className="w-6 h-6" />
          <span className="text-[10px] uppercase font-bold tracking-widest">Me</span>
        </a>
      </nav>

      {/* Footer */}
      <footer className="mt-20 py-20 border-t border-white/5 bg-[#0e0e0e] px-8 md:px-16 text-gray-400">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-md">
            <span className="text-2xl font-black tracking-tighter text-white mb-4 block">STREAMFLIX</span>
            <p className="text-sm leading-relaxed mb-8">
              Your ultimate destination for the world's best stories. Experience cinema in 4K with spatial audio, exclusive originals, and live sports events.
            </p>
            <div className="flex gap-6">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 text-sm">
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Platform</span>
              <a href="#" className="hover:text-white transition-colors">Browse</a>
              <a href="#" className="hover:text-white transition-colors">Devices</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Download App</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Company</span>
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Press</a>
              <a href="#" className="hover:text-white transition-colors">Investors</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Support</span>
              <a href="#" className="hover:text-white transition-colors">Help Center</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase">
          <p>© 2024 STREAMFLIX INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Hindi</a>
            <a href="#" className="hover:text-white transition-colors">English</a>
            <a href="#" className="hover:text-white transition-colors">Spanish</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
