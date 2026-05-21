import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Sparkles, X, BrainCircuit, Activity, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';

export default function AIHealthAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: "Welcome to Tech AtrioCare AI. I can assist with clinical analysis, rehabilitation advice, or general medical tech inquiries. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Prepare history for backend
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: userMessage,
          history: history.slice(-6) // Send last 6 messages as context
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to reach neural link');
      }

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.text || 'I apologize, I encountered a clinical data interruption.' }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'ai', content: 'Connectivity lost. Make sure the `GEMINI_API_KEY` is added to your Vercel Environment Variables.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9, x: 50 }}
            className="mb-6 w-[400px] h-[600px] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl origin-bottom-right"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-brand-blue to-brand-teal text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <BrainCircuit className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Tech AtrioCare AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-80">Quantum Sync Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:rotate-90 transition-transform p-1 text-white"
              >
                <X />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide bg-slate-50/50"
            >
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex flex-col max-w-[85%]",
                  msg.role === 'user' ? "ml-auto items-end" : "items-start"
                )}>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-brand-teal text-white font-bold rounded-tr-none" 
                      : "bg-white border border-brand-border text-slate-800 rounded-tl-none prose prose-sm shadow-sm"
                  )}>
                    {msg.role === 'user' ? msg.content : <ReactMarkdown>{msg.content}</ReactMarkdown>}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 uppercase font-mono tracking-tighter">
                    {msg.role === 'user' ? 'Transmission Sent' : 'Data Processed'}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-brand-teal">
                  <Activity className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-mono uppercase tracking-widest animate-pulse">Analyzing Bio-Data...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-brand-border bg-white">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Query medical tech database..."
                  className="w-full bg-slate-50 border border-brand-border rounded-xl py-4 px-6 pr-14 text-sm text-slate-900 focus:outline-none focus:border-brand-teal transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-teal text-white rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-4 text-gray-500">
                 <HeartPulse className="w-3 h-3" />
                 <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Encrypted Session</span>
                 <HeartPulse className="w-3 h-3" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-tr from-brand-blue to-teal-400 rounded-2xl flex items-center justify-center shadow-2xl text-white relative group"
      >
        <div className="absolute inset-0 bg-brand-teal blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
        {isOpen ? <X /> : <MessageSquare className="w-8 h-8" />}
      </motion.button>
    </div>
  );
}
