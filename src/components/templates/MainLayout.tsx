import React from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { PreviewPanel } from '../organisms/PreviewPanel';
import { AIPanel } from '../organisms/AIPanel';
import { useAppContext } from '../../context/AppContext';
import { Button } from '../atoms/Button';
import { PanelLeftClose, PanelLeft, Bot, PanelRightClose, PanelRight, Menu } from 'lucide-react';
import { cn } from '../../lib/utils';

export const MainLayout: React.FC = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[var(--color-bg)]">
      {/* Mobile Header */}
      <header className="lg:hidden p-4 glass border-b border-white/10 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
           <Button size="icon" variant="ghost" onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>
            <Menu size={20} />
          </Button>
          <span className="font-bold tracking-tight">UI THINK</span>
        </div>
        <Button size="icon" variant="ghost" onClick={() => dispatch({ type: 'TOGGLE_AI_PANEL' })}>
          <Bot size={20} />
        </Button>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Sidebar Toggle (Desktop) */}
        <div className="hidden lg:block absolute left-4 bottom-4 z-50">
           <Button size="icon" variant="ghost" onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>
            {state.isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeft size={18} />}
          </Button>
        </div>

        <Sidebar />
        
        <PreviewPanel />

        <AIPanel />

        {/* Right Panel Toggle (Desktop) */}
        <div className="hidden lg:block absolute right-4 bottom-4 z-50">
           <Button size="icon" variant="ghost" onClick={() => dispatch({ type: 'TOGGLE_AI_PANEL' })}>
            {state.isAIPanelOpen ? <PanelRightClose size={18} /> : <PanelRight size={18} />}
          </Button>
        </div>
      </div>
    </div>
  );
};
