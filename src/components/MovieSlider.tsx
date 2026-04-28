import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { motion } from 'motion/react';
import { Play, Info, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

interface MovieSliderProps {
  title: string;
  items: Movie[];
  variant?: 'poster' | 'rank' | 'wide' | 'watched';
  icon?: React.ReactNode;
  subtitle?: string;
}

export default function MovieSlider({ title, items, variant = 'poster', icon, subtitle }: MovieSliderProps) {
  const isPoster = variant === 'poster';
  const isRank = variant === 'rank';
  const isWide = variant === 'wide';
  const isWatched = variant === 'watched';

  return (
    <section className="pl-8 md:pl-16 overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          {title}
          {icon}
        </h2>
        {subtitle && (
          <span className="text-blue-500 font-bold text-xl px-2 py-1 bg-blue-500/10 rounded-lg">{subtitle}</span>
        )}
      </div>

      <Swiper
        modules={[Navigation, FreeMode]}
        navigation={true}
        freeMode={true}
        loop={true}
        spaceBetween={24}
        slidesPerView={'auto'}
        className="movie-swiper !overflow-visible"
      >
        {items.map((movie) => (
          <SwiperSlide 
            key={movie.id} 
            className={`
              ${isRank ? '!w-[300px] md:!w-[350px]' : ''}
              ${isPoster ? '!w-[220px]' : ''}
              ${isWide ? '!w-[320px]' : ''}
              ${isWatched ? '!w-[200px]' : ''}
            `}
          >
            {isRank && (
              <Link to={`/details/${movie.id}`}>
                <motion.div whileHover={{ scale: 1.02 }} className="relative group cursor-pointer">
                  <div className="flex items-end">
                    <span 
                      className="text-[160px] font-black leading-none text-transparent stroke-white/30 stroke-2 translate-x-4 z-10 transition-colors group-hover:text-white/10"
                      style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}
                    >
                      {movie.rank}
                    </span>
                    <div className="aspect-[2/3] w-full rounded-2xl overflow-hidden border border-white/5 group-hover:border-blue-500/50 transition-all duration-300 -ml-12 shadow-2xl relative">
                      <img src={movie.image} alt={movie.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">MOST WATCHED</span>
                        <h3 className="text-white font-bold text-xl">{movie.title}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"><Play className="w-4 h-4 fill-current" /></button>
                          <button className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"><Info className="w-4 h-4" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            )}

            {isPoster && (
              <Link to={`/details/${movie.id}`}>
                <motion.div whileHover={{ scale: 1.1, zIndex: 30, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }} className="aspect-[2/3] rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-300 w-full">
                  <img src={movie.image} alt={movie.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-bold">{movie.title}</p>
                    <div className="flex gap-2 mt-2"><Play className="w-4 h-4 text-white fill-current" /><Plus className="w-4 h-4 text-white" /></div>
                  </div>
                </motion.div>
              </Link>
            )}

            {isWide && (
              <Link to={`/details/${movie.id}`}>
                <motion.div whileHover={{ scale: 1.05 }} className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer bg-white/5 w-full">
                  <img src={movie.image} alt={movie.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-lg">{movie.title}</p>
                    <p className="text-white/60 text-xs">{movie.type} • Added {movie.addedTime}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div whileHover={{ scale: 1.1 }} className="bg-white text-black p-3 rounded-full shadow-lg"><Play className="w-4 h-4 fill-current" /></motion.div>
                  </div>
                </motion.div>
              </Link>
            )}

            {isWatched && (
              <Link to={`/details/${movie.id}`}>
                <motion.div whileHover={{ y: -10 }} className="flex flex-col gap-2 group cursor-pointer w-full">
                  <div className="aspect-[2/3] rounded-2xl overflow-hidden border border-white/5 group-hover:border-blue-500 transition-all duration-300 relative">
                    <img src={movie.image} alt={movie.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  </div>
                  {movie.progress ? (
                    <div className="h-1 bg-white/20 rounded-full mt-2 w-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${movie.progress}%` }} className="h-full bg-blue-500 rounded-full" />
                    </div>
                  ) : (
                    <div className="h-1 mt-2 w-full" />
                  )}
                  <p className="text-white text-sm font-bold mt-1 truncate">{movie.title}</p>
                </motion.div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
