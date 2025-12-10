
import React, { useState } from 'react';
import { Map, ScrollText, Layout, Coffee, Swords } from 'lucide-react';
import { Tab } from './types';
import { MapTab } from './components/MapTab';
import { XiangqiBoard } from './components/XiangqiBoard';
import { GuideTab } from './components/GuideTab';
import { PvpTab } from './components/PvpTab';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.CHESS);
  const [legalView, setLegalView] = useState<'PRIVACY' | 'TERMS' | null>(null);

  const handleLegalClick = (view: 'PRIVACY' | 'TERMS') => {
    setLegalView(view);
    setActiveTab(Tab.LEGAL);
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tab.MAP:
        return <MapTab />;
      case Tab.CHESS:
        return <XiangqiBoard />;
      case Tab.GUIDE:
        return <GuideTab />;
      case Tab.PVP:
        return <PvpTab />;
      case Tab.LEGAL:
        if (legalView === 'PRIVACY') return <PrivacyPolicy />;
        return <TermsOfService />;
      default:
        return <XiangqiBoard />;
    }
  };

  const NavButton: React.FC<{
    onClick: () => void;
    isActive: boolean;
    icon: React.ReactNode;
    label: string;
  }> = ({ onClick, isActive, icon, label }) => {
    const activeClasses = 'text-wwm-green bg-stone-800';
    const inactiveClasses = 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/50';
    const baseClasses = 'flex flex-col items-center justify-center w-full h-full space-y-1';

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-wide">
          {label}
        </span>
      </button>
    );
  };

  const headerContent = (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-wwm-green/50">
          <img src="https://play-lh.googleusercontent.com/C077FpQVnL7G5O6Mowj-sWKdTjUwEWAWxOVQUcBwhHY1yOZePOoIxtlOS5Tn9kIzLoI2eU8BWZ4Nh4ufS63zBg=w240-h480-rw" alt="Where Winds Meet Logo" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-stone-200 leading-none">
              Where Winds Meet <span className="text-wwm-green">Companion</span>
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-wwm-green font-medium tracking-wide" style={{ fontSize: '0.75em' }}>
                Created by Panzersmash
              </span>
              <a 
                href="https://www.reddit.com/user/Total-Pride-6491/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#FF4500] hover:bg-[#e03d00] text-white rounded-full p-1 transition-transform hover:scale-110"
                title="Visit Panzersmash on Reddit"
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.249-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
            </div>
        </div>
    </div>
  );

  // Default Standalone Layout (Bottom Nav)
  return (
    <div 
        className="flex flex-col h-screen w-screen bg-stone-900 text-stone-100 font-sans"
        style={{ backgroundColor: '#1c1917', minHeight: '100vh' }}
    >
      <header className="bg-stone-950 border-b border-stone-800 p-3 flex items-center justify-between shrink-0 z-10">
        {headerContent}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.paypal.com/donate/?business=P6P5JA7WRBM36&no_recurring=0&item_name=If+you+enjoyed+any+of+the+apps+I%27ve+created%2C+please+donate+and+buy+me+a+coffee.+Thank+you+and+I+hope+you%27ve+enjoyed+my+work%21&currency_code=USD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#98ff98] hover:bg-[#80e580] text-stone-900 font-bold px-4 py-2 rounded-lg shadow-md transition-all hover:scale-105 flex items-center gap-2 text-base sm:flex hidden"
          >
            <Coffee size={20} />
            Buy me a Coffee! (Donate)
          </a>
          <div className="text-xs text-stone-500 hidden sm:block">
            <button onClick={() => handleLegalClick('TERMS')} className="hover:text-stone-300 mr-2">Terms</button>
            <button onClick={() => handleLegalClick('PRIVACY')} className="hover:text-stone-300">Privacy</button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
        {renderContent()}
      </main>
      <nav className="shrink-0 bg-stone-950 border-t border-stone-800 pb-safe">
        <div className="flex justify-around items-center h-16">
          <NavButton onClick={() => { setActiveTab(Tab.GUIDE); setLegalView(null); }} isActive={activeTab === Tab.GUIDE} icon={<ScrollText size={20} />} label="Guide" />
          <NavButton onClick={() => { setActiveTab(Tab.MAP); setLegalView(null); }} isActive={activeTab === Tab.MAP} icon={<Map size={20} />} label="Map" />
          <NavButton onClick={() => { setActiveTab(Tab.PVP); setLegalView(null); }} isActive={activeTab === Tab.PVP} icon={<Swords size={20} />} label="PVP" />
          <NavButton onClick={() => { setActiveTab(Tab.CHESS); setLegalView(null); }} isActive={activeTab === Tab.CHESS} icon={<Layout size={20} />} label="Chess" />
        </div>
      </nav>
    </div>
  );
};

export default App;
