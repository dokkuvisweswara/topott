import { Radio, Play, Circle } from 'lucide-react';
import { motion } from 'motion/react';

const CHANNELS = [
  { id: 1, name: "Streamflix News", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBrIDUh13nA3boJYv6cqnSQsApW4sryYcqqD1CvgCEzGyT5VDZzJ9vd5ZkehK_L7X0GBgXO-w1MZS2HYBF9iIyAf86zY-xYLzWJ3JxWfTy9Jw-ld_4aS2e9iQqHavooUBkdNGj5K-Z4xk4pi1kyvYUPznfCcIAJqCZlBdp824Ud6t23jwqKQjZqpFGX-_gyigPcOKyBpQBuINRLI2hYqVGbm9VVXkdh3a43O1Db2E5MNo0auenk9lu3x9NKroVaAH9o8lh4nBfniSL", viewers: "45K" },
  { id: 2, name: "Global Sports", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV_4WaXGYADUJJqyxviJAIaGGMa7o6hXXqRMv8kw-NwUBbmcRvol0pbBYvB0M6SJ92_P0JOYzFCzsrSZxLQ4McZtq5IWlviloJq3s4bS_oVvMv5ngpZh967wsWj1hxN5R-uAhg7Dypv_aRYDqjd57MwoxDJy0l9XRBCVxFrf5xyIwH4VSotXkPR1v0RNpv5w8W2WsB_LR3gHXMXN9jeLcdbEN3urdllVEqkMgXr2R2oMztckK_uwBgJCQm8-JuTDGndT4yLW4OtdGV", viewers: "1.2M" },
  { id: 3, name: "Cinema Live", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgYMgrpDpJMvfziQ4UJrhiedV0SaFsl6tKZkrqEGaJwqWm-Jt-E60AQae7jDHB2KE8pK7nhipo0kHbplUX3KP10QUPk5e_HjDtSjhr2GvVN0OCR0FwohmQCzdwYYQDBKgMN-_9N9xakNinWH3ykesREyKrTwqD0AAOFDdeHDLz5s6QJeB53RV7XM7XaCOPsAw91Nyokzuh5QILHD54Zz6WecdhOmDObxIqXmB7qJVGmNwaoXO_aWkOvJXEtO4RIJuHbsUHwI5r4cqz", viewers: "12K" },
  { id: 4, name: "Nature 24/7", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8PW9e9pZRplNTC21HVxeY_JtsfZeV1c5dHYrrsmJwf0ks5UeCBWxFhtA2eMKQXdBMKtyFYm9CkE7lw5AWqXVuwh-TQnEF82utoZgqhk2Aj3tv5hmGw-R5du13LLHxjmXVvh4DwOl6vLKdf6Oo7EdYjZXJ3BmPFyB21_ac9Rjl-S42gIz5xp5kBKmkNWQ6NNKuc2oqqhgNdof7fdHyBE4xIPJ109vIc6blnuAiEwHrgoSq66QFo2BtAxvsFyUae3HRQe2wIH9EdMim", viewers: "89K" }
];

export default function LiveTv() {
  return (
    <div className="pt-32 pb-20 space-y-12">
      <div className="px-8 md:px-16 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black text-white mb-4">Live TV</h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Real-time streaming from around the clock. News, sports, and entertainment.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full border border-red-500/20 font-bold animate-pulse">
           <Circle className="w-2 h-2 fill-current" />
           LIVE ENCOUNTERS
        </div>
      </div>

      <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CHANNELS.map(channel => (
          <motion.div 
            key={channel.id}
            whileHover={{ y: -5 }}
            className="group cursor-pointer bg-white/5 rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="aspect-video relative overflow-hidden">
              <img src={channel.image} alt={channel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1">
                <Radio size={10} /> Live
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <Play className="w-12 h-12 text-white fill-current" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-1">{channel.name}</h3>
              <p className="text-gray-500 text-sm">{channel.viewers} watching now</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Program Guide Placeholder */}
      <section className="px-8 md:px-16 mt-20">
        <h2 className="text-2xl font-bold text-white mb-8">Program Guide</h2>
        <div className="bg-white/5 rounded-3xl border border-white/10 p-8">
          <p className="text-gray-400 italic">Program guide is loading dynamic schedules...</p>
        </div>
      </section>
    </div>
  );
}
