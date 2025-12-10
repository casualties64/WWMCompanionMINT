
import React, { useState } from 'react';
import { Swords, Play, Filter, Zap, Shield, MousePointer2, Keyboard, RotateCcw } from 'lucide-react';

const VideoCard: React.FC<{ src: string; title: string }> = ({ src, title }) => (
  <div className="w-full bg-stone-900 rounded-xl overflow-hidden shadow-lg border border-stone-800 group hover:border-wwm-green/50 transition-colors">
    <div className="aspect-video relative bg-black">
        <iframe 
            src={src} 
            title={title}
            className="w-full h-full"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
        />
    </div>
    <div className="p-3 bg-stone-900 border-t border-stone-800">
        <h3 className="text-sm font-medium text-stone-300 group-hover:text-wwm-green truncate flex items-center gap-2">
            <Play size={14} className="fill-current" /> {title}
        </h3>
    </div>
  </div>
);

// --- COMBO TYPES & DATA ---

type SkillType = 'martial' | 'special' | 'light' | 'charged' | 'heavy' | 'heavy_charged' | 'conversion' | 'mystic' | 'defensive';

interface ComboStep {
  label: string;
  type: SkillType;
  note?: string;
}

interface Combo {
  id: string;
  title: string;
  description: string;
  primaryWeapon: string;
  secondaryWeapon: string;
  difficulty: number; // 1-3
  steps: ComboStep[];
  videoUrl?: string;
}

const SKILL_LEGEND: { label: string; type: SkillType; desc: string }[] = [
  { label: 'Q', type: 'martial', desc: 'Martial Art' },
  { label: '~', type: 'special', desc: 'Special' },
  { label: 'LMB', type: 'light', desc: 'Light Attack' },
  { label: 'LMB(H)', type: 'charged', desc: 'Light (Charged)' },
  { label: 'R', type: 'heavy', desc: 'Heavy Attack' },
  { label: 'R(H)', type: 'heavy_charged', desc: 'Heavy (Charged)' },
  { label: 'TAB', type: 'conversion', desc: 'Dual Skill' },
  { label: 'M', type: 'mystic', desc: 'Mystic Skill' },
  { label: 'E', type: 'defensive', desc: 'Parry' },
  { label: 'SCR', type: 'defensive', desc: 'Weapon Scroll' },
];

const COMBOS_DATA: Combo[] = [
  {
    id: 'inkwell-strategic',
    title: '(To Be Confirmed) Inkwell Fan into Strategic Sword',
    description: "You can open with Meridian Touch as well if you're not in range for the fan special.",
    primaryWeapon: 'Inkwell Fan',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 2,
    steps: [
      { label: '~', type: 'special' },
      { label: 'SCR', type: 'defensive' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'TAB', type: 'conversion' },
      { label: 'M', type: 'mystic', note: 'Talon Strike' }
    ]
  },
  {
    id: 'hq-nameless',
    title: 'Heavenquaker Spear into Nameless Spear',
    description: "Final attack can also be Dragon Head if you have vitality for it.",
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Nameless Spear',
    difficulty: 3,
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: '~', type: 'special', note: 'Cancel after 2nd hit' },
      { label: 'E', type: 'defensive' },
      { label: 'M', type: 'mystic', note: 'Free Morph (Cancel)' },
      { label: 'LMB(H)', type: 'charged', note: 'Lvl 1' },
      { label: 'M', type: 'mystic', note: 'Free Morph (Cancel)' },
      { label: 'E', type: 'defensive' },
      { label: 'LMB(H)', type: 'charged', note: 'Lvl 1 + Parry cancel' },
      { label: 'E', type: 'defensive' },
      { label: 'SCR', type: 'defensive' },
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', note: 'Soaring Spin' },
      { label: 'M', type: 'mystic', note: 'Dragons Breath' }
    ]
  },
  {
    id: 'nameless-hq',
    title: 'Nameless Spear into Heavenquaker Spear',
    description: "Dragon's Breath or Dragon Head at the end.",
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Nameless Spear',
    difficulty: 2,
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', note: 'Lions Roar' },
      { label: 'M', type: 'mystic', note: 'Yaksha Rush' },
      { label: 'SCR', type: 'defensive' },
      { label: 'LMB(H)', type: 'charged', note: 'Lvl 1' },
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', note: 'Free Morph (Cancel)' },
      { label: 'E', type: 'defensive' },
      { label: 'LMB(H)', type: 'charged', note: 'Lvl 1' },
      { label: '~', type: 'special' },
      { label: 'M', type: 'mystic', note: 'Dragons Breath' }
    ]
  },
  {
    id: 'infernal-strategic',
    title: 'Infernal Twinblades into Strategic Sword',
    description: "Execute setup with bleed detonation.",
    primaryWeapon: 'Infernal Twinblades',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 1,
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'TAB', type: 'conversion' },
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', note: 'Free Morph' }
    ]
  },
  {
    id: 'mortal-infernal',
    title: 'Mortal Rope Dart into Infernal Twinblades',
    description: "Buff with Rope Dart first.",
    primaryWeapon: 'Mortal Rope Dart',
    secondaryWeapon: 'Infernal Twinblades',
    difficulty: 3,
    steps: [
      { label: 'R', type: 'heavy' },
      { label: '~', type: 'special' },
      { label: 'Q', type: 'martial' },
      { label: 'SCR', type: 'defensive' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' }
    ]
  },
  {
     id: 'strategic-nameless',
     title: 'Strategic Sword Opened with Nameless Sword',
     description: "Cancel after pop-up.",
     primaryWeapon: 'Nameless Sword',
     secondaryWeapon: 'Strategic Sword',
     difficulty: 3,
     steps: [
        { label: 'R(H)', type: 'heavy_charged', note: 'Cancel after pop-up' },
        { label: 'E', type: 'defensive' },
        { label: 'M', type: 'mystic', note: 'Leaping Toad (Cancel)' },
        { label: 'E', type: 'defensive' },
        { label: 'LMB', type: 'light' },
        { label: 'Q', type: 'martial' },
        { label: 'Q', type: 'martial' },
        { label: 'R', type: 'heavy' },
        { label: 'R', type: 'heavy' },
        { label: '~', type: 'special' },
        { label: 'R(H)', type: 'heavy_charged' },
        { label: '~', type: 'special' },
        { label: 'SCR', type: 'defensive' },
        { label: '~', type: 'special' }
     ]
  },
  {
      id: 'nameless-strategic-extend',
      title: 'Nameless Sword + Strategic Sword Extendable',
      description: "",
      primaryWeapon: 'Nameless Sword',
      secondaryWeapon: 'Strategic Sword',
      difficulty: 3,
      steps: [
        { label: 'Q', type: 'martial' },
        { label: 'Q', type: 'martial', note: 'Cancel' },
        { label: 'E', type: 'defensive' },
        { label: 'Q', type: 'martial' },
        { label: 'R', type: 'heavy' },
        { label: 'R', type: 'heavy' },
        { label: 'M', type: 'mystic', note: 'Leaping Toad (Cancel)' },
        { label: 'E', type: 'defensive' },
        { label: 'SCR', type: 'defensive' }
      ]
  }
];

const SKILL_COLORS: Record<SkillType, string> = {
  martial: 'bg-orange-600 border-orange-500 text-white',
  special: 'bg-fuchsia-600 border-fuchsia-500 text-white',
  light: 'bg-sky-600 border-sky-500 text-white',
  charged: 'bg-sky-800 border-sky-600 text-sky-100',
  heavy: 'bg-red-600 border-red-500 text-white',
  heavy_charged: 'bg-red-800 border-red-600 text-red-100',
  conversion: 'bg-amber-500 border-amber-400 text-stone-900',
  mystic: 'bg-pink-600 border-pink-500 text-white',
  defensive: 'bg-emerald-600 border-emerald-500 text-white',
};

const SkillKey: React.FC<{ label: string; type: SkillType; note?: string }> = ({ label, type, note }) => {
  return (
    <div className="relative group">
        <div className={`
          w-12 h-12 md:w-14 md:h-14 rounded-lg border-b-4 active:border-b-0 active:translate-y-1 
          flex items-center justify-center font-black text-sm md:text-base shadow-lg transition-all
          ${SKILL_COLORS[type]}
        `}>
          <span className="drop-shadow-md">{label}</span>
          {note && (
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
        </div>
        {note && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {note}
            </div>
        )}
    </div>
  );
};

const ComboCard: React.FC<{ combo: Combo }> = ({ combo }) => {
  return (
    <div className="bg-stone-900 rounded-xl border border-stone-800 overflow-hidden hover:border-stone-700 transition-colors">
      <div className="p-4 border-b border-stone-800 flex justify-between items-start gap-4">
        <div>
          <h3 className="font-bold text-stone-200 text-lg">{combo.title}</h3>
          <div className="flex items-center gap-2 mt-1 text-xs text-stone-500">
             <span>{combo.primaryWeapon}</span>
             <span className="text-wwm-green">+</span>
             <span>{combo.secondaryWeapon}</span>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[1,2,3].map(i => (
             <Zap key={i} size={14} className={i <= combo.difficulty ? "text-wwm-green fill-wwm-green" : "text-stone-700"} />
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-stone-950/30">
          <div className="flex flex-wrap items-center gap-2">
            {combo.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                    <SkillKey label={step.label} type={step.type} note={step.note} />
                    {idx < combo.steps.length - 1 && (
                        <span className="text-stone-600 font-bold text-lg">›</span>
                    )}
                </React.Fragment>
            ))}
          </div>
      </div>

      {combo.description && (
          <div className="p-3 text-xs text-stone-400 italic border-t border-stone-800 bg-stone-900/50">
            {combo.description}
          </div>
      )}
    </div>
  );
};

export const PvpTab: React.FC = () => {
  const [subTab, setSubTab] = useState<'VIDEOS' | 'COMBOS'>('VIDEOS');
  const [weaponFilter, setWeaponFilter] = useState<string>('All');

  const allWeapons = Array.from(new Set(COMBOS_DATA.flatMap(c => [c.primaryWeapon, c.secondaryWeapon]))).sort();
  const filteredCombos = weaponFilter === 'All' 
    ? COMBOS_DATA 
    : COMBOS_DATA.filter(c => c.primaryWeapon === weaponFilter || c.secondaryWeapon === weaponFilter);

  return (
    <div className="w-full h-full bg-stone-950 overflow-y-auto p-4 lg:p-8 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto space-y-8 pb-24">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-900/50 p-6 rounded-2xl border border-stone-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-5">
                <div className="p-4 bg-red-900/20 rounded-full border border-red-900/50 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <Swords size={36} />
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-black text-white tracking-wider uppercase italic">Combat Academy</h1>
                    <p className="text-stone-400 font-medium text-sm md:text-base">Master the art of PvP.</p>
                </div>
            </div>
            
            {/* Subtab Toggle */}
            <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800">
                <button 
                    onClick={() => setSubTab('VIDEOS')}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${subTab === 'VIDEOS' ? 'bg-stone-800 text-white shadow-sm' : 'text-stone-500 hover:text-stone-300'}`}
                >
                    Video Guides
                </button>
                <button 
                    onClick={() => setSubTab('COMBOS')}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${subTab === 'COMBOS' ? 'bg-stone-800 text-white shadow-sm' : 'text-stone-500 hover:text-stone-300'}`}
                >
                    Combo DB
                </button>
            </div>
        </div>

        {subTab === 'VIDEOS' ? (
             <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
                {/* Basics Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                        <span className="px-2 py-1 bg-wwm-green text-stone-950 font-bold text-xs rounded uppercase tracking-wider">Part 1</span>
                        <h2 className="text-xl font-bold text-stone-200">
                            The Fundamentals
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <VideoCard 
                            src="https://www.youtube.com/embed/4UFzw-Q39pQ?si=0K1L_W3bJWbGBzaY" 
                            title="Basics of Combat - Volume 1" 
                        />
                        <VideoCard 
                            src="https://www.youtube.com/embed/DhhUnD1wmX4?si=TNXGe4PADviz3kRk" 
                            title="Basics of Combat - Volume 2" 
                        />
                        <VideoCard 
                            src="https://www.youtube.com/embed/TCLlK21RVw0?si=kKi6FVrKvNG0WnOs" 
                            title="Basics of Combat - Volume 3" 
                        />
                    </div>
                </section>

                {/* Advanced Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                        <span className="px-2 py-1 bg-red-600 text-white font-bold text-xs rounded uppercase tracking-wider">Part 2</span>
                        <h2 className="text-xl font-bold text-stone-200">
                            Advanced Techniques
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <VideoCard 
                            src="https://www.youtube.com/embed/DMR8UN4gEaY?si=y9eodxucXAPuTs_7" 
                            title="Advanced Techniques - Volume 1" 
                        />
                        <VideoCard 
                            src="https://www.youtube.com/embed/d9WyWI6RRL4?si=gKyJoHwWmPzByyO9" 
                            title="Advanced Techniques - Volume 2" 
                        />
                        <VideoCard 
                            src="https://www.youtube.com/embed/Xh_xT8Aduu8?si=wUuWEE_-JnbO3iPG" 
                            title="Advanced Techniques - Volume 3" 
                        />
                    </div>
                </section>
             </div>
        ) : (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                
                {/* Legend */}
                <div className="bg-stone-900 border border-stone-800 rounded-lg p-4">
                    <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Keyboard size={14} /> Skill Legend
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {SKILL_LEGEND.map((skill) => (
                            <div key={skill.type} className="flex items-center gap-3 bg-stone-950/50 p-2 rounded border border-stone-800/50">
                                <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs shadow-sm ${SKILL_COLORS[skill.type]}`}>
                                    {skill.label}
                                </div>
                                <span className="text-xs text-stone-400 font-medium">{skill.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filters */}
                <div className="space-y-2">
                    <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                         <Filter size={14} /> Filter by Weapon
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        <button 
                            onClick={() => setWeaponFilter('All')}
                            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                                weaponFilter === 'All' 
                                ? 'bg-wwm-green text-stone-900' 
                                : 'bg-stone-900 text-stone-500 hover:bg-stone-800 border border-stone-800'
                            }`}
                        >
                            All
                        </button>
                        {allWeapons.map(w => (
                            <button 
                                key={w}
                                onClick={() => setWeaponFilter(w)}
                                className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                                    weaponFilter === w
                                    ? 'bg-wwm-green text-stone-900' 
                                    : 'bg-stone-900 text-stone-500 hover:bg-stone-800 border border-stone-800'
                                }`}
                            >
                                {w}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Combo List */}
                <div className="grid grid-cols-1 gap-4">
                    {filteredCombos.map(combo => (
                        <ComboCard key={combo.id} combo={combo} />
                    ))}
                    {filteredCombos.length === 0 && (
                        <div className="text-center py-12 text-stone-500 border border-dashed border-stone-800 rounded-xl">
                            No combos found for this weapon.
                        </div>
                    )}
                </div>

            </div>
        )}

      </div>
    </div>
  );
};
