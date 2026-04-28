import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_4WaXGYADUJJqyxviJAIaGGMa7o6hXXqRMv8kw-NwUBbmcRvol0pbBYvB0M6SJ92_P0JOYzFCzsrSZxLQ4McZtq5IWlviloJq3s4bS_oVvMv5ngpZh967wsWj1hxN5R-uAhg7Dypv_aRYDqjd57MwoxDJy0l9XRBCVxFrf5xyIwH4VSotXkPR1v0RNpv5w8W2WsB_LR3gHXMXN9jeLcdbEN3urdllVEqkMgXr2R2oMztckK_uwBgJCQm8-JuTDGndT4yLW4OtdGV" 
          alt="Bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-[#131313]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Sign In</h1>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <div className="space-y-2 relative">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 bottom-4 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Captcha Section */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Verification</label>
            <div className="flex gap-4">
              <div className="flex-1 bg-white/10 rounded-2xl flex items-center justify-center font-mono text-xl tracking-[0.5em] text-blue-400 select-none italic border border-white/5">
                R7x9K
              </div>
              <input 
                type="text" 
                placeholder="Captcha"
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none focus:border-blue-500 transition-all text-center"
              />
            </div>
          </div>

          <button className="w-full bg-[#ffe16d] text-[#221b00] font-bold py-4 rounded-2xl hover:bg-[#ffe16d]/90 transition-all text-lg shadow-lg shadow-yellow-500/10">
            Sign In
          </button>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input type="checkbox" className="rounded border-white/10 bg-white/5" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Need help?</a>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
          <p className="text-gray-400 text-center">
            New to Streamflix? <Link to="/signup" className="text-white font-bold hover:underline">Sign up now.</Link>
          </p>
          <div className="flex items-center gap-2 justify-center text-[10px] text-gray-500 uppercase tracking-widest">
            <ShieldCheck size={12} />
            Secure Login with reCAPTCHA
          </div>
        </div>
      </motion.div>
    </div>
  );
}
