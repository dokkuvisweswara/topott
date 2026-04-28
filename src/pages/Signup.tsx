import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgYMgrpDpJMvfziQ4UJrhiedV0SaFsl6tKZkrqEGaJwqWm-Jt-E60AQae7jDHB2KE8pK7nhipo0kHbplUX3KP10QUPk5e_HjDtSjhr2GvVN0OCR0FwohmQCzdwYYQDBKgMN-_9N9xakNinWH3ykesREyKrTwqD0AAOFDdeHDLz5s6QJeB53RV7XM7XaCOPsAw91Nyokzuh5QILHD54Zz6WecdhOmDObxIqXmB7qJVGmNwaoXO_aWkOvJXEtO4RIJuHbsUHwI5r4cqz" 
          alt="Bg"
          className="w-full h-full object-cover shadow-inner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-[#131313]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-white mb-4">Unlimited movies, TV shows and more.</h1>
        <p className="text-gray-400 mb-8 font-medium">Watch anywhere. Cancel anytime.</p>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
            <input 
              type="password" 
              placeholder="Create a password"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-300">
             Choose your plan after this step. We'll send you an email to confirm your account.
          </div>

          <button className="w-full bg-[#ffe16d] text-[#221b00] font-bold py-4 rounded-2xl hover:bg-[#ffe16d]/90 transition-all text-lg shadow-lg shadow-yellow-500/10">
            Get Started
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
          <p className="text-gray-400 text-center">
            Already have an account? <Link to="/login" className="text-white font-bold hover:underline">Sign in.</Link>
          </p>
          <div className="flex items-center gap-2 justify-center text-[10px] text-gray-500 uppercase tracking-widest">
            <ShieldCheck size={12} />
            Secure Signup with reCAPTCHA
          </div>
        </div>
      </motion.div>
    </div>
  );
}
