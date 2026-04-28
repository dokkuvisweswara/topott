import { Check, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const PLANS = [
  { id: 1, name: "Mobile", price: "149", features: ["480p Viewing", "Mobile only", "Ad-supported"] },
  { id: 2, name: "Basic", price: "299", features: ["720p Viewing", "Any device", "Ad-free experience"] },
  { id: 3, name: "Premium", price: "499", features: ["4K + HDR", "4 Devices", "Spatial Audio", "Unlimited Downloads"], recommended: true }
];

export default function Subscription() {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="px-8 md:px-16 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-4">Choose your plan</h1>
        <p className="text-gray-400 text-lg">
          No commitments, cancel anytime. Everything on Streamflix for one low price. No ads on any plan (except Mobile).
        </p>
      </div>

      <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PLANS.map(plan => (
          <motion.div 
            key={plan.id}
            whileHover={{ scale: plan.recommended ? 1.05 : 1.02 }}
            className={`relative p-8 rounded-[2rem] border transition-all ${
              plan.recommended 
                ? 'bg-blue-600/10 border-blue-500/50 shadow-2xl shadow-blue-600/10' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-2">
                <Zap size={10} fill="currentColor" /> MOST POPULAR
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
              plan.recommended 
                ? 'bg-[#ffe16d] text-[#221b00] hover:bg-[#ffe16d]/90' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
              Select {plan.name}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="px-8 md:px-16 text-center text-gray-500 text-xs flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 uppercase tracking-widest font-bold">
          <ShieldCheck size={14} /> 100% Encrypted Payment
        </div>
        <p className="max-w-xl">
          HD and Ultra HD availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
        </p>
      </div>
    </div>
  );
}
