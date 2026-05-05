import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { askGemini } from '../../utils/gemini';
import { Send, BookOpen, Lightbulb, Trash2, Github, ExternalLink, Bot, Sparkles } from 'lucide-react';
import { AIMessage } from '../../types';
import { cn } from '../../lib/utils';
import { Button } from '../atoms/Button';
import { motion, AnimatePresence } from 'motion/react';
import { terms } from '../../data/terms';

export const AIPanel: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [dynamicSuggestions, setDynamicSuggestions] = React.useState<string[]>([]);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const defaultPrompts = [
    { text: "WCAG contrast rules?", opinionated: false },
    { text: "W3C Dialog definition?", opinionated: false },
    { text: "Apple HIG Bottom Sheets?", opinionated: false },
  ];

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: AIMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    dispatch({ type: 'ADD_MESSAGE', payload: userMsg });
    setInput('');
    setLoading(true);
    setDynamicSuggestions([]);

    try {
      const response = await askGemini(text, state.history);
      const aiMsg: AIMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text,
        mode: response.mode,
        timestamp: new Date(),
      };
      dispatch({ type: 'ADD_MESSAGE', payload: aiMsg });
      if (response.suggestions) {
        setDynamicSuggestions(response.suggestions);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderContentWithLinks = (content: string) => {
    // Regex to match [[id]]
    const parts = content.split(/(\[\[[a-zA-Z0-9_-]+\]\])/g);
    return parts.map((part, index) => {
      const match = part.match(/\[\[([a-zA-Z0-9_-]+)\]\]/);
      if (match) {
        const termId = match[1];
        const term = terms.find(t => t.id === termId);
        return (
          <button
            key={index}
            onClick={() => dispatch({ type: 'SET_TERM', payload: termId })}
            className="px-1.5 py-0.5 mx-0.5 rounded bg-[var(--color-accent)]/20 text-[var(--color-accent-2)] border border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/40 hover:scale-105 active:scale-95 transition-all font-medium text-[0.9em] cursor-pointer"
            title={`Cross-reference: ${term ? term.name : termId}`}
          >
            {term ? term.name : termId}
          </button>
        );
      }
      return part;
    });
  };

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [state.history, loading, dynamicSuggestions]);

  return (
    <aside className={cn(
      "h-full glass-dark border-l border-white/10 flex flex-col transition-all duration-300",
      state.isAIPanelOpen ? "w-[360px]" : "w-0 translate-x-full overflow-hidden"
    )}>
      <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Bot size={16} className="text-[var(--color-accent-2)]" />
          UI THINK ASSISTANT
        </h2>
        <Button variant="ghost" size="icon" onClick={() => {
          dispatch({ type: 'CLEAR_HISTORY' });
          setDynamicSuggestions([]);
        }}>
          <Trash2 size={14} className="text-white/20" />
        </Button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6">
        {state.history.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50 px-4">
             <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <Bot size={32} />
             </div>
             <p className="text-xs">Ask me about UI standards, accessibility, or design patterns. I cite official sources by default.</p>
          </div>
        )}
        
        {state.history.map((msg) => (
          <div key={msg.id} className={cn(
            "flex flex-col gap-2",
            msg.role === 'user' ? "items-end" : "items-start"
          )}>
            {msg.role === 'assistant' && msg.mode && (
              <div className={cn(
                "flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest mb-1",
                msg.mode === 'STANDARDS' ? "text-blue-400" : "text-amber-400"
              )}>
                {msg.mode === 'STANDARDS' ? <BookOpen size={10} /> : <Lightbulb size={10} />}
                {msg.mode === 'STANDARDS' ? "Standards Mode" : "Suggestion Mode"}
              </div>
            )}
            <div className={cn(
              "p-3 rounded-2xl text-sm max-w-[90%] break-words",
              msg.role === 'user' ? "bg-[var(--color-accent)] text-white rounded-tr-none" : "bg-white/10 text-white/90 rounded-tl-none border border-white/5"
            )}>
              {msg.role === 'assistant' ? (
                <div className="whitespace-pre-wrap leading-relaxed markdown-body">
                  {renderContentWithLinks(msg.content)}
                </div>
              ) : msg.content}
            </div>
            <span className="text-[9px] text-white/20 px-1">
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}

        {dynamicSuggestions.length > 0 && !loading && (
          <div className="flex flex-col gap-2 py-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 px-1 flex items-center gap-1">
              <Sparkles size={10} /> Suggested follow-ups
            </span>
            <div className="flex flex-wrap gap-2">
              {dynamicSuggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(s)}
                  className="px-3 py-1.5 rounded-lg text-xs bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent-2)] hover:bg-[var(--color-accent)]/20 transition-all text-left"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="flex gap-2 items-start">
            <div className="p-3 rounded-2xl bg-white/10 rounded-tl-none">
              <div className="flex gap-1">
                <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" />
                <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white/5 border-t border-white/10 space-y-4">
        {state.history.length === 0 && (
          <div className="flex flex-wrap gap-2">
            {defaultPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSend(p.text)}
                className={cn(
                  "px-2 py-1 rounded-md text-[10px] bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1",
                  p.opinionated && "border-amber-500/20 text-amber-500/60"
                )}
              >
                {p.text}
              </button>
            ))}
          </div>
        )}
        
        <div className="flex items-end gap-2 bg-white/5 rounded-xl border border-white/10 p-2 focus-within:ring-2 focus-within:ring-[var(--color-accent)] transition-all">
          <textarea
            placeholder="Ask Lexi... (Shift+Enter for newline)"
            className="flex-1 bg-transparent border-none outline-none text-sm p-1 resize-none h-10 max-h-32"
            rows={1}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(input);
              }
            }}
          />
          <Button 
            size="icon" 
            variant="secondary" 
            disabled={!input.trim() || loading}
            onClick={() => handleSend(input)}
          >
            <Send size={14} />
          </Button>
        </div>
      </div>
    </aside>
  );
};
