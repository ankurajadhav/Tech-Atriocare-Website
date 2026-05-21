import { motion, AnimatePresence } from 'motion/react';
import { Activity, Mic, Wind, Sparkle, Check, X, Heart, Users, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import wellnessCompanion from '../assets/images/wellness_companion_character_1779008484828.png';
import vaaniResonance from '../assets/images/vaani_vocal_resonance_1779011238955.png';
import verveConnection from '../assets/images/verve_energy_connection_1779011260055.png';
import vibesResonance from '../assets/images/vibes_neural_resonance_1779011276325.png';
import heroAbstract from '../assets/images/vsync_hero_abstract_1779006839698.png';
import futuristicTech from '../assets/images/vsync_futuristic_medical_tech_1779007100167.png';

export default function VSyncPage() {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsPurchaseOpen(false);
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
    if (params.get('action') === 'subscribe') {
      setIsPurchaseOpen(true);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#FF77BC] text-white font-sans selection:bg-white selection:text-[#FF77BC] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroAbstract} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF77BC]/50 via-transparent to-[#FF77BC]" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              {/* Logo & Intro */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <div className="relative">
                      <svg width="60" height="60" viewBox="0 0 100 100" className="text-white fill-none stroke-current stroke-[3]">
                        <path d="M10 50 L30 50 L40 20 L60 80 L70 50 L90 50" />
                      </svg>
                    </div>
                    <div className="flex flex-col ml-2">
                       <h1 className="text-6xl font-serif italic text-white leading-none">sync</h1>
                       <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-80 mt-1">vaani, verve & vibes</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <motion.button 
                    onClick={() => setIsPurchaseOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="sync-button-purple text-lg shadow-[0_10px_30px_rgba(168,85,247,0.4)]"
                  >
                    Quick Start
                  </motion.button>
                </div>
              </motion.div>

              {/* Doodles Cluster (Right Side) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="hidden lg:block relative w-1/2 h-[600px] pointer-events-none"
              >
                <div className="relative w-full h-full">
                  {/* Replicating the doodle vibe from screenshot 1 */}
                  <div className="absolute inset-0 flex flex-wrap gap-8 justify-center items-center p-10">
                    <Heart className="w-20 h-20 opacity-30 rotate-12" />
                    <Heart className="w-12 h-12 opacity-20 -rotate-12" />
                    <Activity className="w-16 h-16 opacity-30" />
                    <Mic className="w-10 h-10 opacity-20 rotate-45" />
                    <Sparkle className="w-24 h-24 opacity-30 -rotate-6" />
                    <Users className="w-14 h-14 opacity-20" />
                    <Wind className="w-12 h-12 opacity-30 rotate-180" />
                    <div className="w-full text-center text-white/5 font-black text-9xl tracking-tighter uppercase">V-SYNC</div>
                    <Heart className="w-8 h-8 opacity-20" />
                    <Activity className="w-24 h-24 opacity-30" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: Unleash the vibe check */}
      <section className="py-32 px-6 md:px-20 bg-gradient-to-b from-[#FF77BC] to-[#FF89D6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white font-sans">
              Unleash the vibe check with V-sync!
            </h2>
            <p className="text-xl md:text-2xl font-medium opacity-95 leading-relaxed max-w-xl">
              V-sync, powered by its bi-layered sync algorithm, is the world's first relationship wellness platform that calculates your vibe check through your voice! ✨
            </p>
            <div className="space-y-6">
              {[
                "It's real, it's revolutionary, and it's here!",
                "So, what are you waiting for?",
                "Simply hummmmmmmmmmm........"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Screenshot 2 card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-[60px] p-10 md:p-20 shadow-4xl border border-white/20 transition-all hover:bg-white/15">
               <div className="space-y-8">
                  <div className="inline-block bg-white text-[#db2777] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                    HAVE YOU EXPERIENCED
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black leading-tight">Awkward <br /> quizzes?</h3>
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl font-bold opacity-80 uppercase tracking-widest">NOT SURE ....</p>
                    <p className="text-4xl md:text-6xl font-black text-[#db2777] bg-white px-2 inline-block">WHAT TO SAY?</p>
                  </div>
                  <p className="text-2xl italic font-serif opacity-90 leading-relaxed">
                    Keep your answer in mind <br />
                    & Simply hummmm....
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 px-6 md:px-20 bg-white text-[#FF77BC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Screenshot 3 image mock */}
            <div className="relative rounded-[60px] overflow-hidden shadow-4xl border-8 border-pink-50 bg-[#FFD1E8] p-10">
              <img 
                src={wellnessCompanion} 
                alt="Smartphone Interface" 
                className="w-full h-auto rounded-3xl mix-blend-multiply"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center animate-bounce">
                <span className="text-5xl font-serif italic font-light text-[#db2777]">hmm</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 order-1 lg:order-2"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tight text-[#db2777]">
              How It Works?
            </h2>
            <div className="space-y-10">
              {[
                { t: "Record", d: "Record a short hum into your phone." },
                { t: "Analyze", d: "Our bi-layered sync algorithm analyzes your voice and calculates your vibe compatibility with friends, dates, or anyone!" },
                { t: "Results", d: "Get real-time results and know instantly if you're riding the same wavelength." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#db2777] flex items-center justify-center shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl md:text-3xl font-bold leading-tight text-slate-800">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-20 bg-gradient-to-tr from-[#FF77BC] via-[#db2777] to-[#FFA0D2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-[100px] font-black tracking-tighter uppercase text-white opacity-80">Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { q: "V-sync offered a refreshingly new approach and an innovative idea. Fun-loving experience...", a: "Satyam & Sanya" },
              { q: "Absolutely fascinating tech experience! Just a simple 'hmmm' sound let me match vibes in a minute. Mind-blowing and truly amazing!", a: "Tanish & Saurabh" },
              { q: "I had a wonderful experience using the first-ever Vibe Checker tool. It can help me find my vibe with anyone. Truly fascinating!", a: "Yash & Yashika" }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white/15 backdrop-blur-2xl p-12 rounded-[50px] border border-white/20 shadow-4xl flex flex-col justify-between hover:bg-white/25 transition-all"
              >
                <p className="text-2xl font-serif italic text-white leading-relaxed mb-12">"{t.q}"</p>
                <div className="flex flex-col items-end">
                   <div className="h-0.5 w-12 bg-white/40 mb-4" />
                   <span className="text-lg font-black uppercase tracking-widest text-white">— {t.a}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaani, Verve, Vibes (Hindi sections) */}
      <section className="py-40 px-6 md:px-20 bg-white space-y-40">
        <div className="max-w-7xl mx-auto">
          {/* Vaani */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-8xl md:text-[160px] font-black text-[#db2777] leading-none tracking-tighter">वाणी</h2>
              <div className="space-y-6">
                 <p className="text-3xl font-bold text-slate-800 leading-relaxed">
                   In Hindi, the word "Vaani" (वाणी) translates to "speech" or "voice".
                 </p>
                 <p className="text-xl font-medium text-slate-500 leading-relaxed max-w-2xl">
                   Using your voice (Vaani) as a guide, our 2-tier algorithm will help you and your loved ones test your physiological synchrony. By processing and analyzing the heart rate and breathing rate patterns from the humming voice data, this product can help you find the synchronization % with your significant other, family, and friends.
                 </p>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="rounded-[60px] overflow-hidden shadow-4xl bg-white border-8 border-cyan-50 p-2 flex flex-col items-center justify-center aspect-square relative group"
            >
               <img 
                 src={vaaniResonance} 
                 alt="Vaani Vocal Resonance" 
                 className="w-full h-full object-cover rounded-[50px]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-transparent pointer-events-none" />
               <h3 className="absolute bottom-10 text-6xl font-serif italic text-white drop-shadow-lg">Vaani</h3>
            </motion.div>
          </div>

          {/* Verve */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="order-2 lg:order-1 rounded-[60px] overflow-hidden shadow-4xl bg-white border-8 border-rose-50 p-2 flex flex-col items-center justify-center aspect-square relative group"
            >
               <img 
                 src={verveConnection} 
                 alt="Verve Energy Connection" 
                 className="w-full h-full object-cover rounded-[50px]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent pointer-events-none" />
               <h3 className="absolute bottom-10 text-6xl font-serif italic text-white drop-shadow-lg">Verve</h3>
            </motion.div>
            <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-8xl md:text-[160px] font-black text-rose-600 leading-none tracking-tighter">उत्साह</h2>
              <div className="space-y-6">
                 <p className="text-3xl font-bold text-slate-800 leading-relaxed">
                   "Verve" is the dynamic and energetic quality of interpersonal connections.
                 </p>
                 <p className="text-xl font-medium text-slate-500 leading-relaxed max-w-2xl">
                   It denotes the existence of vibrant and engaged interactions. It suggests a sense of excitement, passion, and positive engagement, which can help to synchronize physiological responses or improve the quality of interpersonal interactions.
                 </p>
              </div>
            </div>
          </div>

          {/* Vibes */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-8xl md:text-[160px] font-black text-indigo-700 leading-none tracking-tighter">तरंग</h2>
              <div className="space-y-6">
                 <p className="text-3xl font-bold text-slate-800 leading-relaxed">
                   "Vibes" is the emotional and intuitive energy detected in a person or setting.
                 </p>
                 <p className="text-xl font-medium text-slate-500 leading-relaxed max-w-2xl">
                   In the context of physiological synchrony, "vibes" refer to the emotional and energetic resonance or connection that persons feel. It is about the intuitive wavelength that connects two souls instantly through vocal resonance.
                 </p>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="rounded-[60px] overflow-hidden shadow-4xl bg-white border-8 border-indigo-50 p-2 flex flex-col items-center justify-center aspect-square relative group"
            >
               <img 
                 src={vibesResonance} 
                 alt="Vibes Neural Resonance" 
                 className="w-full h-full object-cover rounded-[50px]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent pointer-events-none" />
               <h3 className="absolute bottom-10 text-6xl font-serif italic text-white drop-shadow-lg">Vibes</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-900 text-white/40 text-center flex flex-col items-center gap-6">
        <div className="flex items-center gap-4 text-white opacity-100">
           <Activity className="w-10 h-10" />
           <span className="text-3xl font-black uppercase tracking-tighter">V-Sync</span>
        </div>
        <p className="text-xs font-black uppercase tracking-[0.4em]">© 2024 TechAtrio Care. All Systems Encrypted.</p>
      </footer>

      <AnimatePresence>
        {isPurchaseOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPurchaseOpen(false)}
              className="absolute inset-0 bg-slate-950/10 backdrop-blur-3xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              className="relative w-full max-w-xl bg-white rounded-[60px] p-12 md:p-24 shadow-3xl border border-white text-slate-950"
            >
              <button 
                onClick={() => setIsPurchaseOpen(false)}
                className="absolute top-12 right-12 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 hover:bg-slate-950 hover:text-white transition-all shadow-sm"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-black uppercase tracking-tighter italic">Initialize Node</h3>
                {isSubmitted ? (
                   <div className="py-10 text-rose-500 font-bold">Request Transmitted. Check your link.</div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input required type="text" placeholder="IDENTIFY" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-full outline-none font-black" />
                    <input required type="email" placeholder="EMAIL@SYNC.NODE" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-full outline-none font-black" />
                    <button type="submit" className="w-full py-6 bg-slate-950 text-white rounded-full font-black text-lg uppercase tracking-widest hover:bg-rose-500 transition-all">Request Access</button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
