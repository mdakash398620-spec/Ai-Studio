/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Download, 
  Tv, 
  Trophy, 
  ShieldCheck, 
  Zap, 
  Facebook, 
  MessageCircle, 
  Send, 
  Users, 
  Menu, 
  X,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

// --- Components ---

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-brand-dark overflow-hidden">
      {/* Animated Gradient */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-red/20 blur-[120px]"
      />
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-brand-red/10 blur-[100px]"
      />
      
      {/* Particles Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random()
            }}
            animate={{ 
              y: [null, "-100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-brand-red rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Download', href: '#download' },
    { name: 'Contact', href: '#contact' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden glow-red">
            <img 
              src="https://www.atvsports.live/icon.png" 
              alt="ATV Sports Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-display font-extrabold tracking-tighter">
            ATV <span className="text-brand-red">SPORTS</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-brand-red transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#download"
            className="bg-brand-red hover:bg-brand-red/80 px-6 py-2 rounded-full text-sm font-bold transition-all glow-red hover:scale-105 active:scale-95"
          >
            Download
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-medium text-white/70 hover:text-brand-red transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-6">
            The Ultimate Entertainment App
          </span>
          <h1 className="text-5xl md:text-8xl font-bangla font-bold leading-tight mb-6">
            লাইভ <span className="text-brand-red text-glow-red">TV</span> ও স্পোর্টস <br />
            এখন এক অ্যাপে
          </h1>
          <p className="text-white/60 text-lg md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            ফ্রি HD Streaming • Ads Free • Fast
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://github.com/chinkulj/t/releases/download/v10.1.0/app-release.apk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-brand-red px-10 py-5 rounded-2xl text-xl font-bold glow-red-strong overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-3">
                <Download className="w-6 h-6" />
                Download Now
              </span>
            </motion.a>
            <a href="#features" className="px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/5 text-xl font-bold transition-all text-center">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-brand-red/20 blur-[100px] -z-10" />
          <img 
            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/659661735_909535835232649_8249349733157881912_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeHS8N8Gffz45oBEG7McnOqrlx55lSO_NM6XHnmVI780zu_H-q2qBC4NnWArLE2_gHTdKsutrWew2CaLvKbco5Gg&_nc_ohc=AsPklxz0nqIQ7kNvwHJn3HK&_nc_oc=AdqO1X7PjNVvvFq6UHdOu6OiMORL1SOLYhcw0trt9uZnbjuk5QjDnGCpbaM7Sb13Aic&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=dPAaxgjNtJY0wRm6fL8x2w&_nc_ss=7a3a8&oh=00_Af3XaMPKkvUnLolBKhYYTdk6b4dqXSZfxxRhyIARwU866w&oe=69E31917" 
            alt="App Interface" 
            className="rounded-3xl border border-white/10 shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Tv className="w-8 h-8 text-brand-red" />,
      title: "সব TV Channel লাইভ",
      desc: "দেশি-বিদেশি সকল জনপ্রিয় টিভি চ্যানেল উপভোগ করুন একদম ফ্রিতে।"
    },
    {
      icon: <Trophy className="w-8 h-8 text-brand-red" />,
      title: "লাইভ স্পোর্টস",
      desc: "ক্রিকেট, ফুটবল সহ সকল বড় স্পোর্টস ইভেন্ট সরাসরি দেখুন HD কোয়ালিটিতে।"
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-brand-red" />,
      title: "Ads Free",
      desc: "কোনো বিরক্তিকর বিজ্ঞাপন ছাড়াই নিরবচ্ছিন্ন স্ট্রিমিং এর অভিজ্ঞতা।"
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-red" />,
      title: "Fast & Smooth",
      desc: "লো-ব্যান্ডউইথ ইন্টারনেট কানেকশনেও বাফারিং ছাড়া স্মুথ স্ট্রিমিং।"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Amazing Features</h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-red/30 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-brand-red/10 w-fit group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bangla font-bold mb-3">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Preview = () => {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">App Preview</h2>
          <p className="text-white/50">Take a look at our clean and modern interface</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTGoWjxla9GDz6UE_vkxd_p8sD9jH-NJGCwt68mAQpU1qxW4HhgYsS9q9lEnc6Br4JumBBCncD_0lnYOARqiqnQOM0nrXfG4Qn49yG1G1oP1vvRk82QXENLODeGFH3FNDH9OH-WhD_Zhw&s=19",
            "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS-0psH6qylk0LvTUGy7qcVxmnDI-WAeC2siboFrT6dnahqSYcHkUs_gNUHGKo4cD96-1iGMeyZrtQYfhMHkXH2MheeAqj45T7A75ZqAeTuG2dwybXbnRAjP5sSOKzEE6tTDAD6MC0L&s=19",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGG3scjreflg1MpNXasD6QKorkr71acjmIoUIAORphrlpXqmrBv_cTFw4ttXAApyU07THdCDrQ_SP0T6WKhUqIqyKAVjcpD0cuB6MHbAIQw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYdY_K-m5XPblXaOy8CkR3VuvkrhyKFcxGA&s"
          ].map((url, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-[9/16] rounded-2xl overflow-hidden border border-white/10"
            >
              <img 
                src={url} 
                alt={`Screenshot ${i + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  const [count, setCount] = useState(100000);

  useEffect(() => {
    // Simple visitor counter simulation
    const savedCount = localStorage.getItem('visitorCount');
    const initialCount = savedCount ? Math.max(parseInt(savedCount), 100000) : 100420;
    setCount(initialCount);
    
    const interval = setInterval(() => {
      setCount(prev => {
        const next = prev + Math.floor(Math.random() * 5) + 1;
        localStorage.setItem('visitorCount', next.toString());
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-glass p-8 rounded-3xl flex items-center gap-6">
          <div className="p-4 bg-brand-red/20 rounded-2xl">
            <Users className="w-10 h-10 text-brand-red" />
          </div>
          <div>
            <h4 className="text-3xl font-bold">{count.toLocaleString()}+</h4>
            <p className="text-white/50 text-sm">Active Users Worldwide</p>
          </div>
        </div>
        <div className="bg-glass p-8 rounded-3xl flex items-center gap-6">
          <div className="p-4 bg-green-500/20 rounded-2xl">
            <ShieldCheck className="w-10 h-10 text-green-500" />
          </div>
          <div>
            <h4 className="text-3xl font-bold">100% Safe</h4>
            <p className="text-white/50 text-sm">Verified & Secure APK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const socials = [
    { icon: <Facebook />, label: "Facebook Page", color: "bg-blue-600", href: "https://www.facebook.com/atvsportss/" },
    { icon: <MessageCircle />, label: "Facebook Group", color: "bg-blue-500", href: "#" },
    { icon: <Send />, label: "Telegram Channel", color: "bg-sky-500", href: "https://t.me/Atvsports" },
    { icon: <Send />, label: "Telegram Group", color: "bg-sky-400", href: "https://t.me/atvsportsgroup" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Join Our Community</h2>
          <p className="text-white/50">Stay updated with the latest news and updates</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className={`p-3 rounded-xl ${s.color}`}>
                {s.icon}
              </div>
              <span className="font-medium">{s.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-brand-red blur-2xl opacity-20 rounded-full" />
          <img 
            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/657550470_909534455232787_5212277304396095537_n.jpg?stp=c0.0.715.715a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeH5D3cy7mn2OhI95vz611oU4lV5Yrzi3zLiVXlivOLfMgHsZsWCzv4lwKr7FtHnLT_PqMmb915IZNDfSHZr3NG9&_nc_ohc=yOUdp7Uae9YQ7kNvwErIb1B&_nc_oc=AdoYCAkS2Nylad3CAjwnw3tXQegLbeIa7XfcwO7Ns4jB5_6btvpg-uNTZ41k6fZxkA8&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=dPAaxgjNtJY0wRm6fL8x2w&_nc_ss=7a3a8&oh=00_Af19Lu8cSagJiNKVhukomZUz43Rjuyj8O52oEGxAJ3akdg&oe=69E33206" 
            alt="Owner" 
            className="w-32 h-32 rounded-full border-4 border-brand-red/30 relative z-10"
            referrerPolicy="no-referrer"
          />
        </div>
        <h2 className="text-3xl font-display font-bold mb-2">About the Developer</h2>
        <p className="text-brand-red font-bangla text-xl mb-6">Owner: আকাশ</p>
        <p className="text-white/60 leading-relaxed">
          ATV Sports is dedicated to providing the best live streaming experience for sports and TV lovers. 
          Our mission is to make entertainment accessible to everyone, everywhere, for free.
        </p>
      </div>
    </section>
  );
};

const FloatingDownload = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://github.com/chinkulj/t/releases/download/v10.1.0/app-release.apk"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 bg-brand-red p-4 rounded-2xl glow-red-strong shadow-2xl flex items-center gap-3 font-bold"
        >
          <Download className="w-6 h-6" />
          <span className="hidden sm:inline">Download APK</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        <Preview />
        
        <Trust />

        <section id="download" className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-red to-red-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden glow-red-strong">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Ready to Watch?</h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                Download ATV Sports now and start streaming your favorite channels and sports events instantly.
              </p>
              <a 
                href="https://github.com/chinkulj/t/releases/download/v10.1.0/app-release.apk"
                className="bg-white text-brand-red px-12 py-5 rounded-2xl text-2xl font-black hover:bg-brand-dark hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto shadow-2xl w-fit"
              >
                <Download className="w-8 h-8" />
                DOWNLOAD APK
              </a>
              <p className="mt-6 text-white/50 text-sm">Version 2.4.0 • 15.2 MB • Android 5.0+</p>
            </motion.div>
          </div>
        </section>

        <Contact />
        
        <About />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/30 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} ATV Sports. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for Sports Lovers</p>
        </div>
      </footer>

      <FloatingDownload />
    </div>
  );
}
