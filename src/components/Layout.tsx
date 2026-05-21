import { Menu, X, Wind, Activity, LayoutDashboard, Sparkles, Database, Mail, ArrowUpRight, Instagram, Linkedin, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Products', href: '/#products' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Team', href: '/team' },
    { name: 'Reviews', href: '/reviews' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-sans selection:bg-brand-teal selection:text-white">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="medical-grid absolute inset-0 opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-light-teal/30 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        {/* Animated Floating Medical Elements */}
        <div className="absolute inset-0">
          {[
            { icon: Activity, top: '15%', left: '10%', delay: 0 },
            { icon: Wind, top: '45%', left: '85%', delay: 2 },
            { icon: Sparkles, top: '75%', left: '15%', delay: 4 },
            { icon: Activity, top: '25%', left: '75%', delay: 1 },
            { icon: Wind, top: '85%', left: '65%', delay: 3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-brand-teal/5"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [0, -30, 0],
                opacity: [0, 0.5, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut" 
              }}
              style={{ top: item.top, left: item.left }}
            >
              <item.icon size={80 + i * 20} strokeWidth={0.5} />
            </motion.div>
          ))}
        </div>
      </div>

      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled 
            ? "bg-[#020617]/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl" 
            : location.pathname === '/' 
              ? "bg-transparent py-8 border-b border-white/5" 
              : "bg-[#020617]/90 backdrop-blur-lg py-5 border-b border-white/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-500",
              isScrolled || location.pathname !== '/' ? "atrio-gradient shadow-brand-teal/20" : "bg-white/10 backdrop-blur-md border border-white/20 shadow-none"
            )}>
              <Wind className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display tracking-tight uppercase leading-none text-white drop-shadow-lg transition-all duration-500">
                Tech AtrioCare
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase mt-1 text-brand-teal brightness-125 transition-all duration-500">
                Precision Health Screening
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs font-black uppercase tracking-widest transition-all hover:text-brand-teal relative group/link py-2 text-white/80 hover:text-white"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal transition-all group-hover/link:w-full" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "text-xs font-black uppercase tracking-widest transition-all hover:text-brand-teal relative group/link py-2",
                      location.pathname === link.href ? "text-brand-teal" : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal transition-all group-hover/link:w-full" />
                  </Link>
                )
              ))}
            </div>
            <div className="h-6 w-px bg-white/20 transition-colors duration-500" />
            <Link 
              to="/checkup"
              className="relative atrio-gradient text-white px-8 py-4 rounded-full text-xs font-black shadow-[0_15px_30px_-5px_rgba(0,184,166,0.5)] hover:-translate-y-1.5 transition-all flex items-center gap-4 group overflow-hidden active:scale-95"
            >
              <motion.div 
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-white/20 blur-xl"
              />
              <motion.div 
                animate={{ x: "600%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[45deg]"
              />
              <span className="relative z-10 uppercase tracking-[0.2em]">Check Health</span>
              <div className="bg-white p-2 rounded-full relative z-10 text-brand-teal shadow-xl group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-[#0a0f1a] border-b border-white/10 p-6 shadow-2xl flex flex-col gap-5 backdrop-blur-xl"
            >
              {navLinks.map((link) => (
                link.href.startsWith('/#') || link.href.startsWith('http') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-white font-bold px-4 py-2 text-lg hover:text-brand-teal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white font-bold px-4 py-2 text-lg hover:text-brand-teal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link 
                to="/checkup"
                className="bg-brand-teal text-white px-6 py-4 rounded-xl text-center font-bold text-lg shadow-lg shadow-brand-teal/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Check your health
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#007681] text-white pt-0 pb-12 overflow-hidden">
        {/* Pre-footer white bar */}
        <div className="bg-white py-6 mb-16 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 atrio-gradient rounded-lg flex items-center justify-center text-white">
                <Wind className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold font-display tracking-tight text-[#1E293B] uppercase">
                Tech AtrioCare
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link to="/checkup" className="text-[#007681] font-bold hover:text-brand-teal transition-colors text-sm">
                Check your lung health now!
              </Link>
              <div className="hidden md:flex gap-6">
                {navLinks.map(link => (
                  link.href.startsWith('http') ? (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 font-semibold hover:text-[#007681] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="text-slate-600 font-semibold hover:text-[#007681] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Products & Terms */}
            <div className="space-y-8">
              <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-sm border border-white/5">
                <h4 className="text-xl font-bold font-display mb-6 tracking-tight">Products</h4>
                <ul className="space-y-4 text-white/80 font-medium text-sm">
                  <li><Link to="/vsync" className="hover:text-white transition-colors">V-sync</Link></li>
                  <li><Link to="/haal-chaal" className="hover:text-white transition-colors">Haal-Chaal Pravartak 1.0</Link></li>
                  <li><Link to="/innovation" className="hover:text-white transition-colors">Novicule-TA</Link></li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-sm border border-white/5">
                <h4 className="text-xl font-bold font-display mb-4 tracking-tight">Terms & Conditions</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                  Read the full terms and conditions that govern the use of our products and services.
                </p>
                <Link 
                  to="/terms" 
                  className="text-[#4DD0E1] font-black text-xs uppercase tracking-widest hover:underline"
                >
                  View Terms & Conditions
                </Link>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-sm border border-white/5 h-fit">
              <h4 className="text-xl font-bold font-display mb-8 tracking-tight">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/tech.atriocare/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all group"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/tech-atriocare/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all group"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white/10 rounded-[40px] p-8 backdrop-blur-sm border border-white/5 lg:col-span-1">
              <h4 className="text-xl font-bold font-display mb-8 tracking-tight">Address</h4>
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    Plot No. - 2a, First Floor, Kh No 294 Kehar Singh State, Saidulajab Village, South West Delhi, India - 110030
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    208, 2nd Floor Nagarjuna Block, Vignan University, Guntur - Tenali Rd, Vadlamudi, Andhra Pradesh - 522213
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    CIIE, Jamia Hamdard, Hamdard Nagar, New Delhi - 110062
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-sm border border-white/5 h-fit">
              <h4 className="text-xl font-bold font-display mb-8 tracking-tight">Email</h4>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <a href="mailto:service.techatriocare@gmail.com" className="text-sm text-white/80 font-medium hover:text-white transition-colors break-all">
                  service.techatriocare@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col items-center gap-6">
            <div className="bg-white/5 px-6 py-2 rounded-full border border-white/5">
              <p className="text-[10px] md:text-xs text-white/50 font-bold uppercase tracking-[0.2em]">
                © 2022-2025 TECH ATRIOCARE PVT. LTD. | Innovation Focused
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

