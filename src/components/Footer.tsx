import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
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
  );
}
