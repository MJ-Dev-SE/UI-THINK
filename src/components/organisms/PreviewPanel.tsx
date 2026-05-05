import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { terms } from '../../data/terms';
import { cn } from '../../lib/utils';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { Code, ExternalLink, Info, CheckCircle2, XCircle, Sparkles, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PreviewPanel: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const currentTerm = terms.find(t => t.id === state.selectedTermId) || terms[0];
  const [activeTab, setActiveTab] = React.useState<'preview' | 'code'>('preview');

  const randomTerm = () => {
    const otherTerms = terms.filter(t => t.id !== state.selectedTermId);
    const rand = otherTerms[Math.floor(Math.random() * otherTerms.length)];
    dispatch({ type: 'SET_TERM', payload: rand.id });
  };

  return (
    <main className="flex-1 h-full overflow-y-auto bg-transparent relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTerm.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto p-8"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="accent">{currentTerm.category}</Badge>
                {currentTerm.platforms.map(p => (
                  <Badge key={p} variant="outline">{p}</Badge>
                ))}
              </div>
              <h1 className="text-5xl font-black mb-3 tracking-tight">{currentTerm.name}</h1>
              <p className="text-xl text-white/50">{currentTerm.tagline}</p>
            </div>
            <Button variant="ghost" onClick={randomTerm} className="gap-2">
              <Sparkles size={16} />
              Surprise Me
            </Button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Info */}
            <div className="lg:col-span-7 space-y-8">
              <section className="glass p-6 rounded-2xl">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                  <Info size={14} /> Definition
                </h3>
                <p className="text-lg leading-relaxed text-white/80">{currentTerm.definition}</p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass p-6 rounded-2xl border-green-500/10">
                  <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <CheckCircle2 size={14} /> When to use
                  </h4>
                  <ul className="space-y-3">
                    {currentTerm.whenToUse.map((v, i) => (
                      <li key={i} className="text-sm text-white/70 flex gap-2">
                        <span className="text-green-500 mt-1">•</span> {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass p-6 rounded-2xl border-red-500/10">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <XCircle size={14} /> When NOT to use
                  </h4>
                  <ul className="space-y-3">
                    {currentTerm.whenNotToUse.map((v, i) => (
                      <li key={i} className="text-sm text-white/70 flex gap-2">
                        <span className="text-red-500 mt-1">•</span> {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {currentTerm.officialStandard && (
                <section className="glass p-6 rounded-2xl border-[var(--color-accent)]/20 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 translate-x-4 -translate-y-4">
                      <ExternalLink size={120} />
                   </div>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-2)] mb-4 flex items-center gap-2">
                    <ExternalLink size={14} /> Official Standard
                  </h3>
                  <div className="relative z-10">
                    <div className="text-xl font-bold mb-2">{currentTerm.officialStandard.source}</div>
                    <blockquote className="italic text-white/60 text-sm mb-4 border-l-2 border-white/10 pl-4 py-1">
                      "{currentTerm.officialStandard.excerpt}"
                    </blockquote>
                    <a 
                      href={currentTerm.officialStandard.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-[var(--color-accent-2)] text-xs flex items-center gap-1 transition-colors"
                    >
                      View full documentation <ExternalLink size={10} />
                    </a>
                    <div className="mt-4 pt-4 border-t border-white/5 text-[10px] uppercase tracking-tighter text-white/20 italic">
                      This reflects official published guidelines, not an opinion.
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Right: Demo/Code */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass flex flex-col rounded-2xl overflow-hidden h-[500px]">
                <div className="flex border-b border-white/10">
                  <button 
                    onClick={() => setActiveTab('preview')}
                    className={cn(
                      "flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all",
                      activeTab === 'preview' ? "bg-white/10 border-b-2 border-[var(--color-accent-2)]" : "opacity-40"
                    )}
                  >
                    Live Preview
                  </button>
                  <button 
                    onClick={() => setActiveTab('code')}
                    className={cn(
                      "flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all",
                      activeTab === 'code' ? "bg-white/10 border-b-2 border-[var(--color-accent-2)]" : "opacity-40"
                    )}
                  >
                    Code Source
                  </button>
                </div>
                
                <div className="flex-1 bg-white/5">
                  {activeTab === 'preview' ? (
                    <div className="h-full w-full p-4 relative group">
                      <iframe 
                        className="w-full h-full border-none rounded-xl bg-white/5"
                        srcDoc={currentTerm.liveDemo}
                        sandbox="allow-scripts"
                      />
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                         <Button size="icon" variant="ghost" onClick={() => {
                           const iframe = document.querySelector('iframe');
                           if (iframe) iframe.srcdoc = currentTerm.liveDemo;
                         }}>
                            <RefreshCcw size={14} />
                         </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 h-full overflow-auto font-mono text-xs leading-relaxed text-white/50 bg-black/50">
                      <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
                        <span className="text-[10px] text-white/30 lowercase">{currentTerm.codeSnippet.language}</span>
                        <Code size={12} className="text-white/20" />
                      </div>
                      <pre className="whitespace-pre-wrap">{currentTerm.codeSnippet.code}</pre>
                    </div>
                  )}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">Real World Usage</h4>
                 <div className="flex flex-wrap gap-2">
                    {currentTerm.realWorldUsage.map(usage => (
                      <span key={usage} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">
                        {usage}
                      </span>
                    ))}
                 </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">Related Concepts</h4>
                 <div className="flex flex-wrap gap-2">
                    {currentTerm.relatedTerms.map(termId => {
                      const rel = terms.find(t => t.id === termId);
                      return (
                        <button 
                          key={termId}
                          onClick={() => dispatch({ type: 'SET_TERM', payload: termId })}
                          className="px-3 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-lg text-xs text-[var(--color-accent-2)] hover:bg-[var(--color-accent)]/20 transition-colors"
                        >
                          {rel?.name || termId}
                        </button>
                      );
                    })}
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};
