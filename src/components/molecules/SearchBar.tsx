import React from 'react';
import { Search, Command } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { terms } from '../../data/terms';

export const SearchBar: React.FC = () => {
  const { dispatch } = useAppContext();
  const [query, setQuery] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const filteredTerms = terms.filter(t => 
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 5);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-[var(--color-accent)] transition-all">
        <Search size={16} className="text-white/40" />
        <input
          type="text"
          placeholder="Search UI Terms... (Cmd+K)"
          className="bg-transparent border-none outline-none text-sm w-full"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <div className="flex items-center gap-1 opacity-40">
          <Command size={12} />
          <span className="text-[10px] font-bold">K</span>
        </div>
      </div>

      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-dark rounded-xl overflow-hidden shadow-2xl z-50">
          {filteredTerms.length > 0 ? (
            filteredTerms.map(term => (
              <button
                key={term.id}
                onClick={() => {
                  dispatch({ type: 'SET_TERM', payload: term.id });
                  setQuery('');
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-white/10 flex flex-col gap-0.5 border-b border-white/5 last:border-none"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{term.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40">{term.category}</span>
                </div>
                <span className="text-xs text-white/50 truncate">{term.tagline}</span>
              </button>
            ))
          ) : (
            <div className="px-4 py-6 text-center text-sm text-white/40">No terms found matching "{query}"</div>
          )}
        </div>
      )}
    </div>
  );
};
