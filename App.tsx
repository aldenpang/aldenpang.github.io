import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Award, Briefcase, GraduationCap, ArrowUpRight, MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { TRANSLATIONS, Language } from './constants';
import { GoogleGenAI } from "@google/genai";

// 使用相对路径导入图片，Vite 会处理这个导入并返回正确的 URL
const profileImg = `${import.meta.env.BASE_URL}IMG_8062_cpy.JPG`;

const Navbar: React.FC<{ lang: Language; setLang: (l: Language) => void }> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-academic font-bold tracking-tight text-slate-900">Shuo Pang</span>
          <span className="hidden lg:inline text-blue-600 font-mono text-[10px] border border-blue-200 px-2 py-0.5 rounded-full uppercase tracking-tighter">
            {t.tag}
          </span>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-xs font-medium tracking-wide uppercase text-slate-500">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-600 transition-colors">{t.about}</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-blue-600 transition-colors">{t.research}</a>
            <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')} className="hover:text-blue-600 transition-colors">{t.honors}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-blue-600 transition-colors">{t.contact}</a>
          </div>

          <div className="flex items-center space-x-1.5 bg-slate-100/50 p-1 rounded-lg border border-slate-200/50">
            {(['en', 'zh', 'fr'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-[10px] font-mono font-bold transition-all rounded ${
                  lang === l 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle?: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="mb-12">
    <div className="flex items-center space-x-3 text-blue-600 mb-2">
      {icon}
      <span className="font-mono text-sm uppercase tracking-widest">{subtitle || "Section"}</span>
    </div>
    <h2 className="text-4xl font-academic font-bold text-slate-900">{title}</h2>
    <div className="h-1 w-20 tech-gradient mt-4 rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = TRANSLATIONS[lang];
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  // AI Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [lang]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const user = 'pangshuo1981';
    const domain = 'gmail.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  // Chat handling using Gemini API
  const handleChatSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userText }]);
    setChatInput('');
    setIsChatLoading(true);

    try {
        // Initialize Gemini API client
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiKey) {
          throw new Error('Missing VITE_API_KEY');
        }
        const ai = new GoogleGenAI({ apiKey });
        
        // Prepare history for generateContent
        const contents = chatMessages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));
        contents.push({ role: 'user', parts: [{ text: userText }] });

        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents,
            config: {
                systemInstruction: `You are a professional AI representative for Shuo Pang, a Senior Technical Strategist and Researcher. 
                Answer questions about his career, skills, and background professionally and concisely.
                Shuo Pang has deep expertise in Human-Computer Interaction (HCI), AI, Wearable technology, and Real-Time Rendering.
                He has worked at Huawei Canada and held leadership roles at OVA and ShadeRealm.
                Current Language of the portfolio: ${lang}. 
                Resume data for context: ${JSON.stringify(TRANSLATIONS[lang])}`,
            }
        });

        const modelText = response.text || "I'm sorry, I encountered an issue processing your request.";
        setChatMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (err) {
        console.error("Gemini API error:", err);
        setChatMessages(prev => [...prev, { role: 'model', text: "The AI assistant is currently unavailable. Please reach out via LinkedIn or Email." }]);
    } finally {
        setIsChatLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8 section-reveal" ref={addToRefs}>
            <h1 className="text-6xl md:text-8xl font-academic font-bold leading-tight tracking-tight text-slate-900">
              {t.hero.title} <br />
              <span className="text-slate-300 italic font-normal">&</span> {t.hero.subtitle}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              {t.hero.introPrefix} <span className="text-slate-900 font-semibold">{t.hero.name}</span>{lang === 'zh' ? '，' : ', '}{t.hero.introBody}
            </p>
            <div className="flex flex-wrap gap-3">
              {t.interests.map((interest) => (
                <span key={interest} className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-mono font-medium hover:bg-blue-600 hover:text-white transition-all cursor-default border border-transparent hover:border-blue-400">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 relative section-reveal" ref={addToRefs}>
             <div className="aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden relative shadow-2xl group border border-slate-100/50">
                <img 
                  src={profileImg} 
                  alt="Shuo Pang" 
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl"></div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
             <div className="absolute top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50/50 scroll-mt-24 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading 
            title={t.sections.research} 
            subtitle={t.nav.research} 
            icon={<Briefcase size={20} />} 
          />
          
          <div className="space-y-12 relative before:absolute before:left-[17px] before:top-4 before:bottom-0 before:w-px before:bg-slate-200">
            {t.experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12 section-reveal" ref={addToRefs}>
                <div className="absolute left-0 top-1.5 w-9 h-9 bg-white border border-slate-200 rounded-full flex items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-200 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-academic font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                      <p className="text-slate-500 font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right flex flex-col items-start md:items-end">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 font-mono text-[10px] rounded-md uppercase tracking-wider mb-1">{exp.period}</span>
                      <p className="text-xs text-slate-400 font-mono italic">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-600 leading-relaxed text-sm">
                        <span className="text-blue-400 mt-1.5 flex-shrink-0">
                          <ArrowUpRight size={12} />
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Education */}
      <section id="achievements" className="py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <SectionHeading 
              title={t.sections.recognition} 
              subtitle={t.nav.honors} 
              icon={<Award size={20} />} 
            />
            <div className="space-y-4 section-reveal" ref={addToRefs}>
              {t.honors.map((honor, idx) => (
                <div key={idx} className="p-6 flex items-center space-x-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-blue-600 font-mono text-xs font-bold bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    {honor.year.slice(-2)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{honor.year}</span>
                    <h5 className="font-semibold text-slate-800 text-sm leading-snug">{honor.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading 
              title={t.sections.education} 
              subtitle={t.sections.academiaSubtitle} 
              icon={<GraduationCap size={20} />} 
            />
            <div className="space-y-10">
              {t.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start section-reveal" ref={addToRefs}>
                  <div className="space-y-2">
                    <h4 className="font-academic font-bold text-xl text-slate-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium text-sm">{edu.institution}</p>
                    <p className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 font-mono text-xs">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <h4 className="font-academic text-xl mb-4 italic">"Research is to see what everybody else has seen, and to think what nobody else has thought."</h4>
                  <p className="text-slate-400 text-xs font-mono">— Albert Szent-Györgyi</p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-slate-100 overflow-hidden relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 section-reveal" ref={addToRefs}>
          <SectionHeading 
            title={t.sections.contact} 
            subtitle={t.nav.contact} 
            icon={<Mail size={20} />} 
          />
          <p className="text-slate-500 max-w-xl mx-auto mb-16 text-sm leading-loose">
            {t.sections.contactSub}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-3xl mx-auto">
            <a 
              href="#" 
              onClick={handleEmailClick}
              className="flex flex-col items-center p-10 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-200 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="text-blue-600" size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] mb-2">E-Mail Address</span>
              <span className="text-lg font-academic font-bold text-slate-900 text-center">pangshuo1981(at)gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/pangshuo1981/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center p-10 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-200 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Linkedin className="text-blue-600" size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] mb-2">Connect via LinkedIn</span>
              <span className="text-lg font-academic font-bold text-slate-900">in/pangshuo1981</span>
            </a>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[9px] uppercase tracking-[0.3em] font-mono">
            <p>© {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}</p>
            <div className="mt-4 md:mt-0 flex space-x-8">
              <span className="hover:text-blue-600 transition-colors cursor-default">{t.footer.integrity}</span>
              <span className="hover:text-blue-600 transition-colors cursor-default">{t.footer.frontier}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini AI Assistant Widget */}
      <div className="fixed bottom-6 right-6 z-[60]">
          {/* Floating Toggle Button */}
          <button 
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95 group border-2 border-white"
          >
              {isChatOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />}
          </button>

          {/* Chat Window Container */}
          {isChatOpen && (
              <div className="absolute bottom-20 right-0 w-[320px] md:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                      <div>
                          <h3 className="text-sm font-academic font-bold text-slate-900">Research Assistant</h3>
                          <p className="text-[10px] text-blue-600 font-mono flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                              Powered by Gemini
                          </p>
                      </div>
                      <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                          <X size={18} />
                      </button>
                  </div>

                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/20 scrollbar-hide">
                      {chatMessages.length === 0 && (
                          <div className="text-center py-10 px-6">
                              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                  <MessageSquare className="text-blue-600" size={20} />
                              </div>
                              <p className="text-xs text-slate-500 leading-relaxed italic">
                                  "Hello! I'm Shuo's AI representative. Ask me about his experience in HCI, AI, or Real-Time Rendering."
                              </p>
                          </div>
                      )}
                      {chatMessages.map((msg, idx) => (
                          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                                  msg.role === 'user' 
                                      ? 'bg-blue-600 text-white rounded-tr-none' 
                                      : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
                              }`}>
                                  {msg.text}
                              </div>
                          </div>
                      ))}
                      {isChatLoading && (
                          <div className="flex justify-start">
                              <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                                  <Loader2 size={14} className="animate-spin text-blue-600" />
                                  <span className="text-[10px] text-slate-400 font-mono">Synthesizing response...</span>
                              </div>
                          </div>
                      )}
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleChatSend} className="p-4 border-t border-slate-100 bg-white flex items-center space-x-2">
                      <input 
                          type="text" 
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          placeholder="Type your question..."
                          className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                      />
                      <button 
                          type="submit"
                          disabled={isChatLoading || !chatInput.trim()}
                          className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-blue-700 transition-colors shadow-md shadow-blue-200 active:scale-90"
                      >
                          <Send size={16} />
                      </button>
                  </form>
              </div>
          )}
      </div>
    </div>
  );
};

export default App;
