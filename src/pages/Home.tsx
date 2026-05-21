import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Brain, 
  Zap, 
  ShieldCheck, 
  Database, 
  Search, 
  Microscope,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Cpu,
  ChevronRight,
  Activity,
  Wind,
  Target,
  Stethoscope,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Quote,
  Star,
  ArrowUpRight,
  Calendar,
  BookOpen
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogData';
import RecognitionsSection from '../components/RecognitionsSection';
import { useState } from 'react';
import JoinUsModal from '../components/JoinUsModal';

export default function Home() {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
  }>({
    isOpen: false,
    title: '',
    description: '',
  });

  const openPartnerModal = () => {
    setModalConfig({
      isOpen: true,
      title: 'Partner with Tech AtrioCare',
      description: 'Join our network of healthcare innovators and help us bring transformative wellness to every doorstep.',
    });
  };

  const openCaseStudyModal = () => {
    setModalConfig({
      isOpen: true,
      title: 'Request Case Studies',
      description: 'Get detailed insights into our clinical pilot studies and technological validation results.',
    });
  };

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-28 px-4 md:px-8 overflow-hidden bg-[#020617]">
        {/* Cinematic Lung Visualization Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ 
              scale: [1.2, 1.05, 1.2],
              opacity: 0.4
            }}
            transition={{ 
              scale: { duration: 45, repeat: Infinity, ease: "linear" },
              opacity: { duration: 3 }
            }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center brightness-150 saturate-[0.2] contrast-150 mix-blend-screen"
          />
          
          {/* Detailed Lung Network Overlay */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2500&auto=format&fit=crop')] bg-contain bg-no-repeat bg-center filter invert grayscale opacity-20 brightness-200"
          />

          {/* Core Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-transparent to-[#020617]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
          
          {/* Animated Biometric Grid */}
          <motion.div 
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"] 
            }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.12] medical-grid pointer-events-none"
            style={{ backgroundSize: '160px 160px' }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-brand-light-teal/20 blur-[240px] rounded-full pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1.25, 1, 1.25],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-brand-teal/15 blur-[220px] rounded-full pointer-events-none" 
          />
          
          {/* Sophisticated Floating Technical Assets */}
          {[
            { Icon: Heart, top: '15%', left: '15%', size: 52, delay: 0 },
            { Icon: Activity, top: '35%', left: '85%', size: 80, delay: 1 },
            { Icon: Wind, top: '75%', left: '12%', size: 65, delay: 2 },
            { Icon: Sparkles, top: '18%', left: '75%', size: 45, delay: 0.5 },
            { Icon: Microscope, top: '60%', left: '90%', size: 50, delay: 4 },
            { Icon: ShieldCheck, top: '40%', left: '8%', size: 40, delay: 3 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: [0, -60, 0],
                opacity: [0.25, 0.45, 0.25],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 18 + idx * 4, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut" 
              }}
              className="absolute text-brand-teal hidden lg:flex items-center justify-center"
              style={{ top: item.top, left: item.left }}
            >
              <div className="relative">
                <item.Icon size={item.size} strokeWidth={0.5} className="drop-shadow-2xl opacity-40" />
                <div className="absolute inset-0 bg-brand-teal/5 blur-xl rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-brand-teal drop-shadow-sm">Precision Diagnostics</span>
              <div className="h-3 w-px bg-white/20 mx-1" />
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-slate-400">AI-Powered Hub</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ x: 10 }}
              transition={{ delay: 0.2, type: "spring", damping: 25 }}
              className="mb-12 relative group cursor-default"
            >
               <div className="relative inline-block">
                 <h1 className="block text-6xl md:text-8xl font-black text-white uppercase tracking-tighter font-display leading-[0.8] mb-6 group-hover:text-brand-teal transition-all duration-700">
                   Future <br className="md:hidden" />
                   <span className="text-brand-teal relative inline-block">
                     Tech AtrioCare
                     <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="absolute -bottom-3 left-0 h-2.5 bg-gradient-to-r from-brand-teal to-blue-500 rounded-full shadow-[0_0_30px_rgba(20,184,166,0.8)]" 
                     />
                   </span>
                 </h1>
               </div>
               <div className="flex items-center gap-6 mt-10">
                 <div className="w-20 h-[4px] bg-gradient-to-r from-brand-teal to-transparent rounded-full shadow-lg" />
                 <span className="text-[11px] md:text-[12px] font-black text-slate-400 uppercase tracking-[0.8em] leading-none mb-0 drop-shadow-2xl">Redefining Respiratory Care</span>
               </div>
            </motion.div>
            
            <p className="text-slate-200 text-lg md:text-2xl max-w-2xl mb-14 leading-relaxed font-sans opacity-80 drop-shadow-sm">
              Tech AtrioCare is pioneering the world's most advanced non-invasive lung screening ecosystem. Our AI-driven diagnostic engine delivers clinical-grade insights in seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/checkup" className="relative atrio-gradient text-white px-12 py-7 rounded-full font-black shadow-[0_20px_50px_rgba(20,184,166,0.5)] hover:-translate-y-2.5 transition-all flex items-center gap-7 group w-full sm:w-auto justify-center overflow-hidden active:scale-95">
                {/* Advanced Light dynamics */}
                <motion.div
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/20 rounded-full blur-3xl"
                />
                
                <motion.div 
                  animate={{ x: "600%" }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[45deg]"
                />
                
                <div className="flex flex-col items-start leading-tight relative z-10 text-left">
                  <span className="text-xl uppercase tracking-tighter font-display leading-[0.85] mb-1">Check your lung <br className="md:hidden" /> health now!</span>
                  <span className="text-[10px] opacity-80 font-black uppercase tracking-[0.5em]">AI-Powered Bio-Scan</span>
                </div>
                <div className="bg-white p-3 rounded-full relative z-10 text-brand-teal shadow-2xl group-hover:scale-125 transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
              <Link to="/innovation" className="px-12 py-7 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full font-black text-white hover:bg-white/10 hover:border-brand-teal/40 hover:-translate-y-1.5 transition-all w-full sm:w-auto h-full shadow-[0_25px_50px_rgba(0,0,0,0.3)] text-center flex items-center justify-center uppercase text-xs tracking-[0.4em] active:scale-95">
                Explore Tech
              </Link>
            </div>
            
            {/* Trusted By / Supported By */}
            <div className="mt-16 pt-8 border-t border-white/10">
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8">Supported By Elite Institutions</p>
               <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center gap-2 font-black text-white border-r pr-8 border-white/10">
                    <div className="w-8 h-8 rounded bg-white text-slate-900 flex items-center justify-center text-[10px]">IIT</div>
                    <span className="text-xs">IIT DELHI</span>
                  </div>
                  <div className="flex items-center gap-2 font-black text-white border-r pr-8 border-white/10">
                    <div className="w-8 h-8 rounded bg-white text-slate-900 flex items-center justify-center text-[10px]">FITT</div>
                    <span className="text-xs">FITT</span>
                  </div>
                  <div className="flex items-center gap-2 font-black text-white">
                    <div className="w-8 h-8 rounded bg-white text-slate-900 flex items-center justify-center text-[10px]">GOI</div>
                    <span className="text-xs">MSME</span>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-2xl p-6 rounded-[56px] border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
              <div className="relative rounded-[40px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" 
                  alt="Health Monitoring" 
                  className="w-full h-auto brightness-90 saturate-[0.8] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Cards - Refined Integration */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-8 bg-black/40 backdrop-blur-xl p-6 rounded-[32px] shadow-2xl border border-white/10 min-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/20 flex items-center justify-center border border-brand-teal/20">
                    <Activity className="w-5 h-5 text-brand-teal" />
                  </div>
                  <span className="text-[11px] font-black text-brand-teal uppercase tracking-widest">Real-time Data</span>
                </div>
                <div className="text-3xl font-black text-white mb-1">98.4%</div>
                <div className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">Diagnostic Accuracy</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-12 -left-8 bg-black/40 backdrop-blur-xl p-6 rounded-[32px] shadow-2xl border border-white/10 min-w-[220px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-light-teal/10 flex items-center justify-center border border-white/5">
                    <Wind className="w-5 h-5 text-brand-teal" />
                  </div>
                  <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Screening Mode</span>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between text-[9px] font-black text-slate-500 uppercase tracking-tighter">
                      <span>Analyzing Signal</span>
                      <span className="text-brand-teal">85%</span>
                   </div>
                   <div className="flex gap-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ["10%", "85%", "10%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-brand-teal to-blue-400" 
                    />
                  </div>
                </div>
              </motion.div>

              {/* Removing potential problematic illustation card from bottom right of hero frame by simply not including it */}
            </div>
            
            {/* Ambient Shadow glow behind frame */}
            <div className="absolute -inset-10 bg-brand-teal/10 blur-[120px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* About Our Mission Section */}
      <section id="about" className="py-32 px-4 md:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-brand-blue mb-6">Our Core Purpose</h2>
            <p className="text-slate-500 font-medium">To deliver holistic, accessible, and high-quality healthcare using cutting-edge technology.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "WHO",
                desc: "We are a team of visionary engineers and health professionals from IIT Delhi committed to health equity.",
                icon: Users,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "HOW",
                desc: "By integrating AI, IoT, and cloud computing into simple, non-invasive diagnostic tools.",
                icon: Zap,
                color: "bg-teal-50 text-brand-teal"
              },
              {
                title: "VISION",
                desc: "A world where distance, cost, and complexity are no longer barriers to life-saving health screenings.",
                icon: Lightbulb,
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((box, i) => (
              <motion.div
                key={box.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 rounded-[32px] border border-brand-border bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform", box.color)}>
                  <box.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">{box.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{box.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-32 px-4 md:px-8 bg-brand-bg relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-teal/20 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-lg bg-brand-teal/10 text-brand-teal text-xs font-black uppercase tracking-widest mb-6">Our DNA</div>
              <h2 className="text-4xl md:text-6xl font-bold font-display text-brand-blue mb-8 leading-tight">Evidence-Led Research. <br /><span className="text-brand-teal">Intelligent Performance.</span></h2>
              
              <div className="space-y-10">
                {[
                  {
                    title: "Research-First Approach",
                    desc: "Our solutions are born from rigorous clinical research at IIT Delhi's world-class labs.",
                    icon: Microscope
                  },
                  {
                    title: "AI-Driven Predictive Models",
                    desc: "Proprietary algorithms that detect early signs of respiratory and cardiac distress.",
                    icon: Brain
                  },
                  {
                    title: "Holistic Digital Wellness",
                    desc: "Moving beyond diagnosis to provide integrated rehabilitation and physio solutions.",
                    icon: Heart
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-brand-border flex items-center justify-center text-brand-teal shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="col-span-1 rounded-[32px] overflow-hidden aspect-[4/5] relative group"
               >
                 <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Clinical Research" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Research Hub</span>
                    <h5 className="font-bold">Clinical Lab</h5>
                 </div>
               </motion.div>
               <motion.div 
                 whileHover={{ scale: 1.02, y: -20 }}
                 className="col-span-1 rounded-[32px] overflow-hidden aspect-[4/5] relative group"
               >
                 <img src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="AI Health Analysis" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">AI Core</span>
                    <h5 className="font-bold">Neural Analysis</h5>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-40 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light-teal/5 blur-[120px] rounded-full translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Product Ecosystem</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold font-display text-brand-blue leading-tight mb-6 tracking-tight">Advanced <span className="gradient-text">Health</span> <br /> Made Simple</h2>
              <p className="text-slate-500 text-lg font-medium max-w-xl">
                A high-precision ecosystem of physical and digital tools engineered to transform respiratory and cardiac health screening.
              </p>
            </div>
          </div>

            <div className="grid lg:grid-cols-3 gap-8">
            {/* Haal-Chaal Pravartak 1.0 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group bg-slate-50/50 rounded-[40px] border border-brand-border overflow-hidden flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/d/13TEduYr7AtBxsvJPP6TNedvtiv0cAxqe" 
                  alt="Haal-Chaal Pravartak Screening" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-teal text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Flagship</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-sm mb-8 group-hover:rotate-6 transition-transform">
                  <Activity className="w-8 h-8 text-brand-teal" />
                </div>
                <Link 
                  to="/haal-chaal"
                  className="hover:text-[#0097A7] transition-colors text-left"
                >
                  <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">Haal-Chaal Pravartak 1.0</h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">An integrated non-invasive health screening platform for real-time monitoring of vital signs.</p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    AI-Driven Analytics
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    Cloud Integration
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link 
                    to="/haal-chaal"
                    className="w-full py-4 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 cursor-pointer"
                  >
                    Explore Haal-Chaal
                  </Link>
                  <Link 
                    to="/haal-chaal?action=register" 
                    className="w-full py-3 rounded-2xl border-2 border-brand-teal text-brand-teal font-black text-xs uppercase tracking-widest text-center hover:bg-brand-teal hover:text-white transition-all"
                  >
                    Register for Challenge
                  </Link>
                  <Link 
                    to="/terms" 
                    className="text-xs font-bold text-slate-400 hover:text-brand-teal transition-colors text-center flex items-center justify-center gap-1 mt-3 group underline underline-offset-4 decoration-slate-200 hover:decoration-brand-teal"
                  >
                    View Challenge Terms & Conditions
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* V-sync */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group bg-slate-50/50 rounded-[40px] border border-brand-border overflow-hidden flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="V-sync Digital Health" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">New Release</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-sm mb-8 group-hover:rotate-6 transition-transform">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">V-sync (Digital Physio)</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">Digital cardiovascular and pulmonary gym syncing exercises with patient biometrics.</p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    Bio-Syncing Technology
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    Remote Monitoring
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link 
                    to="/vsync" 
                    className="w-full py-4 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 flex items-center justify-center cursor-pointer"
                  >
                    Discover V-sync
                  </Link>
                  <Link to="/vsync?action=subscribe" className="w-full py-3 rounded-2xl border-2 border-blue-600 text-blue-600 font-black text-xs uppercase tracking-widest text-center hover:bg-blue-600 hover:text-white transition-all">
                    Get Subscription
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* NOVICULE-TA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-slate-50/50 rounded-[40px] border border-brand-border overflow-hidden flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
                  alt="Novicule-TA Hardware Precision" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Hardware</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-sm mb-8 group-hover:rotate-6 transition-transform">
                  <Cpu className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">NOVICULE-TA</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">Military-grade hardware for high-fidelity cardiac data acquisition and analysis.</p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    High-Fidelity Sensors
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    Ultra-Low Latency
                  </div>
                </div>
                <a href="https://www.1mg.com/otc/novicule-ta-a-premium-gift-for-heart-lung-wellness-sachet-5-gm-each-orange-sugar-free-otc1059138?srsltid=AfmBOorGTJdADAsQFMzJwo3W8g-MptzPJCgOtA1b0tCwayTkkbpJdHcA&wpsrc=Google+Organic+Search" target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-4 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10">
                  Buy on TATA 1mg
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* R&D Impact Grid */}
      <section className="py-40 px-4 md:px-8 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0097A7 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="grid grid-cols-2 gap-8">
                 {[
                   { label: 'Clinical Accuracy', val: '99.2%', sub: 'Validated by AIIMS', icon: Microscope },
                   { label: 'Data Points/s', val: '1.2M+', sub: 'Real-time Processing', icon: Activity },
                   { label: 'Hospitals', val: '450+', sub: 'Across Tier 1 & 2', icon: ShieldCheck },
                   { label: 'Impacted Lives', val: '2M+', sub: 'And Counting', icon: Users },
                 ].map((stat, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1, duration: 0.5 }}
                     className="p-12 rounded-[48px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/10 hover:border-brand-teal/20"
                   >
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
                        <stat.icon className="w-6 h-6 text-brand-teal" />
                      </div>
                      <div className="text-5xl font-black text-brand-blue mb-2 font-display tracking-tight">{stat.val}</div>
                      <div className="text-[10px] font-black text-brand-teal uppercase tracking-[0.3em] mb-2">{stat.label}</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.sub}</div>
                   </motion.div>
                 ))}
              </div>
              <div className="space-y-10">
                 <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="space-y-8"
                 >
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                     <Microscope className="w-3.5 h-3.5 text-brand-teal" />
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Expert Research</span>
                   </div>
                   <h2 className="text-5xl md:text-7xl font-bold font-display text-brand-blue leading-tight tracking-tight">Engineering Precision. <br /> Advancing Life.</h2>
                   <p className="text-slate-500 text-lg leading-relaxed max-w-lg font-medium">
                      Our R&D pipeline extends beyond simple diagnostics. We are engineering the next generation of predictive biometrics for diverse high-stakes environments.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      {['Public Wellness', 'Elite Sports', 'Industrial Health', 'Early Diagnosis'].map(item => (
                         <div key={item} className="flex items-center gap-3 font-bold text-brand-blue p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-brand-teal transition-all group">
                            <Target className="w-5 h-5 text-brand-teal group-hover:scale-110 transition-transform" />
                            <span className="text-xs uppercase tracking-widest">{item}</span>
                         </div>
                      ))}
                   </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
             <h2 className="text-5xl md:text-7xl font-bold font-display text-brand-blue mb-6 tracking-tight">What Our Customers Say</h2>
             <p className="text-slate-500 text-lg max-w-2xl font-medium">
               Real experiences from people who've tried Novicule TA
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Prathyusha Meesala",
                time: "2 months ago",
                content: "I wasn't expecting much when I first tried Novicule TA, but wow—it really works! I came down with the flu and felt completely drained, but after taking it, I started feeling better way faster than usual. My congestion eased, the fatigue reduced, and within a day or two, I was back on my feet. It's definitely a must-have for flu season! Super convenient, effective, and something I'll be keeping stocked from now on. Highly recommend it to anyone who wants quick and reliable relief!",
                rating: 5,
                borderColor: "border-teal-200",
                accentColor: "text-teal-400"
              },
              {
                name: "Siddhartha Chandra",
                time: "a month ago",
                content: "Never before have I come across any flu fighting option to cut through the root cause in as little as one day! I had a 10k race to pace on Sunday, and I got my hands on Novicule-TA on Friday. On Friday I was down with a severe throat congestion and weakness and felt unsure about being able to run. All it took was 1 sachet on Friday night to restore my health and confidence. Not only did I run the race in prime conditions, but also honored the time commitment of completing in 70 mins. My utmost gratitude to the creators of Novicule-TA. I would highly recommend keeping a few packets handy in your medical box.",
                rating: 5,
                borderColor: "border-pink-200",
                accentColor: "text-pink-400"
              },
              {
                name: "Lasya N",
                time: "2 months ago",
                content: "I recently used Novicule TA when I caught a flu, and I was impressed with how quickly it worked! My fever dropped, body aches eased, and I felt more energetic in no time. What I loved most is how easy it is to use and how well it keeps symptoms under control. I've tried other remedies before, but Novicule TA truly delivers both fast relief and lasting benefits. Definitely keeping this on hand—highly recommend it!\"",
                rating: 5,
                borderColor: "border-blue-200",
                accentColor: "text-blue-400"
              }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-10 rounded-[32px] border-2 border-dashed bg-white shadow-xl flex flex-col relative transition-all duration-500 hover:-translate-y-2",
                  t.borderColor
                )}
              >
                <div className="mb-1">
                  <h3 className="font-bold text-xl text-slate-800">{t.name}</h3>
                </div>
                <p className="text-slate-400 text-xs mb-6">{t.time}</p>

                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm">
                  "{t.content}"
                </p>

                <div className="mt-auto flex justify-center gap-1">
                   {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Eakta Kandpal",
                time: "3 months ago",
                content: "I had been having a cough for many days, and it would get worse at night as soon as I tried to sleep. I tried cough syrup, but it didn't have any effect. Then I started taking these sachets before bedtime. After taking 6 sachets, my cough completely disappeared. I am also highly allergic to cold weather and dust, which causes me to cough frequently. But after taking these sachets, I feel much better, and my nighttime cough completely stopped. I will definitely recommend this product. If you have a persistent cough problem, please try it.",
                rating: 5,
                borderColor: "border-orange-200",
                accentColor: "text-orange-400"
              },
              {
                name: "Tanushree Shrivastav",
                time: "2 months ago",
                content: "I've struggled with recurring colds and coughs due to weather changes for years. However, I've always avoided antibiotics. Luckily, Tarun Adarsh introduced me to Novicule, and I saw instant results after trying it. For the past 6 months, I've stopped relying on medicines and instead opt for Novicule. Simply tearing open a sachet and consuming it helps me recover overnight – it's truly a remarkable solution!\"",
                rating: 5,
                borderColor: "border-teal-200",
                accentColor: "text-teal-400"
              }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 3) * 0.1 }}
                className={cn(
                  "p-10 rounded-[32px] border-2 border-dashed bg-white shadow-xl flex flex-col relative transition-all duration-500 hover:-translate-y-2",
                  t.borderColor
                )}
              >
                <div className="mb-1">
                  <h3 className="font-bold text-xl text-slate-800">{t.name}</h3>
                </div>
                <p className="text-slate-400 text-xs mb-6">{t.time}</p>

                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm">
                  "{t.content}"
                </p>

                <div className="mt-auto flex justify-center gap-1">
                   {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section id="blogs" className="py-32 px-4 md:px-8 bg-brand-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light-teal/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-brand-teal font-black text-xs uppercase tracking-[0.3em] mb-4 block">Our Journal</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-blue leading-tight">Research <br /><span className="gradient-text">Journals</span></h2>
              <p className="text-slate-500 mt-4 font-medium max-w-lg leading-relaxed">Scientific insights and updates from our research and development</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/blogs" 
                className="flex items-center gap-3 px-8 py-4 bg-white border border-brand-border rounded-full text-brand-blue font-bold shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all group"
              >
                Explore Full Journal <ArrowRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, i) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white rounded-[24px] overflow-hidden group shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 flex flex-col"
              >
                <div className="p-3">
                  <Link to={`/blogs/${blog.id}`} className="block">
                    <div className="aspect-[1.6] overflow-hidden rounded-[20px] bg-slate-100 flex items-center justify-center">
                      {blog.image ? (
                        <motion.img 
                          src={blog.image} 
                          alt={blog.title}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full atrio-gradient opacity-10 flex items-center justify-center">
                           <BookOpen className="w-8 h-8 text-brand-blue opacity-40" />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-teal bg-brand-teal/5 px-2 py-0.5 rounded">
                       {blog.category}
                    </span>
                  </div>
                  <Link to={`/blogs/${blog.id}`} className="block group/title">
                    <h3 className="text-xl font-bold text-gray-900 group-hover/title:text-brand-teal transition-colors mb-3 line-clamp-2 leading-tight tracking-tight">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                    {blog.desc}
                  </p>
                  <Link 
                    to={`/blogs/${blog.id}`}
                    className="mt-auto w-full py-4 bg-slate-50 rounded-2xl font-bold text-gray-800 text-sm flex items-center justify-center gap-2 group/btn hover:bg-brand-teal hover:text-white transition-all shadow-sm hover:shadow-brand-teal/10"
                  >
                    Read Insight <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto rounded-[64px] atrio-gradient p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-teal/40">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-bold font-display mb-8 tracking-tighter leading-none">Catalyzing the <br /> Future of Health</h2>
              <p className="text-white/80 text-lg md:text-xl mb-12 font-medium">
                Join our network of innovators and bring world-class healthcare to every doorstep. 
                Experience the Tech AtrioCare difference today.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button 
                  onClick={openPartnerModal}
                  className="px-10 py-5 bg-white text-brand-teal font-black rounded-full uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 cursor-pointer"
                >
                  Partner with Us
                </button>
                <button 
                  onClick={openCaseStudyModal}
                  className="px-10 py-5 border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-full uppercase tracking-widest transition-all text-center cursor-pointer"
                >
                  Request Case Studies
                </button>
              </div>
           </div>
        </div>

        <JoinUsModal 
          isOpen={modalConfig.isOpen}
          onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
          title={modalConfig.title}
          description={modalConfig.description}
        />
      </section>

      <RecognitionsSection />
    </div>
  );
}
