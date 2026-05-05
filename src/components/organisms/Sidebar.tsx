import React from 'react';
import { terms } from '../../data/terms';
import { useAppContext } from '../../context/AppContext';
import { cn } from '../../lib/utils';
import { CategoryType } from '../../types';
import { SearchBar } from '../molecules/SearchBar';
import { Layers, Box, Navigation, Play, Palette, Ruler, Layout, Smartphone, HelpCircle } from 'lucide-react';

const CategoryIcons: Record<CategoryType, any> = {
  layout: Layers,
  components: Box,
  navigation: Navigation,
  animation: Play,
  "design-style": Palette,
  "design-tokens": Ruler,
  "ux-patterns": Layout,
  "framework-concepts": HelpCircle,
  "platform-specific": Smartphone,
};

export const Sidebar: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const groupedTerms = terms.reduce((acc, term) => {
    if (!acc[term.category]) acc[term.category] = [];
    acc[term.category].push(term);
    return acc;
  }, {} as Record<CategoryType, typeof terms>);

  return (
    <aside className={cn(
      "h-full glass-dark border-r border-white/10 flex flex-col transition-all duration-300",
      state.isSidebarOpen ? "w-[300px]" : "w-0 -translate-x-full overflow-hidden"
    )}>
      <div className="p-4 border-b border-white/10 bg-white/5">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] w-2 h-2 rounded-full" />
          UI THINK
        </h2>
        <SearchBar />
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {(Object.entries(groupedTerms) as [CategoryType, typeof terms][]).map(([category, items]) => {
          const Icon = CategoryIcons[category] || HelpCircle;
          return (
            <div key={category} className="mb-4">
              <div className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white/30">
                <Icon size={12} />
                {category}
              </div>
              <div className="flex flex-col gap-1">
                {items.map(term => (
                  <button
                    key={term.id}
                    onClick={() => dispatch({ type: 'SET_TERM', payload: term.id })}
                    className={cn(
                      "text-left px-3 py-2 rounded-lg text-sm transition-all hover:bg-white/5",
                      state.selectedTermId === term.id ? "bg-white/10 text-[var(--color-accent-2)] font-medium" : "text-white/60"
                    )}
                  >
                    {term.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
