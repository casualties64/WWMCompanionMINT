
import React, { useState } from 'react';
import { CheckSquare, Settings, AlertTriangle, HelpCircle, Gift, TrendingUp, Monitor, Gamepad2, Video, Globe, Clock, Info, Coffee, Menu, ExternalLink, BookOpen, ArrowRight, Image as ImageIcon, Download, Youtube } from 'lucide-react';

export const GuideTab: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<string>('INTERNAL');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const GUIDES = [
    { 
        id: 'INTERNAL', 
        title: 'App Guide (General)', 
        url: null,
        description: 'Comprehensive general guide for WWM'
    },
    { 
        id: 'PART1', 
        title: 'Part 1: F2P & Spending', 
        url: null, // Now internal
        description: 'Maximize Jade, Coupons & Gacha'
    },
    { 
        id: 'PART2', 
        title: 'Part 2: Gameplay & UI', 
        url: null, // Now internal
        description: 'Efficiency, UI Breakdown, Routine'
    },
    { 
        id: 'PART3', 
        title: 'Part 3: Weapon Skins', 
        url: null, // Now internal
        description: 'Advanced Weapon Reforging'
    },
    { 
        id: 'PART4', 
        title: 'Part 4: Merchant Trading', 
        url: null, // Now internal
        description: 'How to Make Serious Money'
    },
    { 
        id: 'PART5', 
        title: 'Part 5: Cosmetics Roadmap', 
        url: null, // Now internal
        description: 'CN Spoilers & Planning Pulls'
    },
  ];

  const renderSidebar = () => (
    <div className="flex flex-col h-full bg-stone-950 border-r border-stone-800 w-full lg:w-80 shrink-0">
        {/* Credit Header */}
        <div className="p-4 bg-stone-900 border-b border-stone-800">
            <div className="bg-stone-800/50 rounded-lg p-3 border border-stone-700/50">
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1">Guide Credit</span>
                <div className="text-stone-300 text-xs">
                    Content courtesy of <br/>
                    <a 
                        href="https://www.reddit.com/user/Silent-Musician-7918/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#98ff98] hover:underline font-bold text-sm inline-flex items-center gap-1 mt-1 break-all"
                    >
                        u/Silent-Musician-7918 <ExternalLink size={10} />
                    </a>
                    <span className="block text-stone-500 text-[10px] mt-0.5">on Reddit</span>
                </div>
            </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {GUIDES.map(guide => (
                <button
                    key={guide.id}
                    onClick={() => { setActiveGuide(guide.id); setShowMobileMenu(false); }}
                    className={`w-full text-left p-3 rounded-lg transition-all border text-sm group relative overflow-hidden flex items-start gap-3 ${
                        activeGuide === guide.id 
                        ? 'bg-emerald-900/20 border-wwm-green/50 text-wwm-green shadow-md' 
                        : 'bg-stone-900/50 border-stone-800 text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                    }`}
                >
                    <div className={`mt-0.5 shrink-0 ${activeGuide === guide.id ? 'text-wwm-green' : 'text-stone-600'}`}>
                        {guide.id === 'INTERNAL' || guide.id.startsWith('PART') ? <BookOpen size={16} /> : <ExternalLink size={16} />}
                    </div>
                    <div className="relative z-10">
                        <div className="font-bold mb-0.5">{guide.title}</div>
                        <div className="text-xs opacity-80 leading-tight">{guide.description}</div>
                    </div>
                    {activeGuide === guide.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-wwm-green" />}
                </button>
            ))}
        </div>

        {/* Donation Footer */}
        <div className="p-4 border-t border-stone-800">
            <a 
                href="https://www.paypal.com/donate/?business=P6P5JA7WRBM36&no_recurring=0&item_name=If+you+enjoyed+any+of+the+apps+I%27ve+created%2C+please+donate+and+buy+me+a+coffee.+Thank+you+and+I+hope+you%27ve+enjoyed+my+work%21&currency_code=USD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-700 to-wwm-green hover:from-emerald-600 hover:to-wwm-green text-stone-900 font-bold py-3 px-4 rounded-lg shadow-lg transition-all hover:scale-[1.02] text-xs uppercase tracking-wide"
            >
                <Coffee size={16} /> Buy me a Coffee!
            </a>
        </div>
    </div>
  );

  const renderNavButtons = () => (
      <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART1')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                  [CLICK HERE FOR PART1: F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)]
              </button>
          </p>
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART2')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                  [CLICK HERE FOR PART 2: Gameplay, UI &amp; "No-Grind" Routine]
              </button>
          </p>
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART3')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                  [CLICK HERE FOR PART 3: Advanced Weapon Reforging(Weapon skins)]
              </button>
          </p>
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART4')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                  [CLICK HERE FOR PART 4: Where Winds Meet: The Ultimate Merchant Trading Guide (How to Make Serious Money)]
              </button>
          </p>
           <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART5')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                  [CLICK HERE FOR Part 5: [CN Spoilers] Want to plan your pulls? Here is the complete Cosmetics Roadmap(still update)]
              </button>
          </p>
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <a className="text-wwm-green hover:text-emerald-400 hover:underline cursor-pointer font-bold" href="https://www.reddit.com/r/wherewindsmeet_/comments/1p6xsyn/psa_if_you_cant_trigger_a_new_encounterquest_read/" target="_blank" rel="noopener noreferrer">
                  [PSA] If you can't trigger a new Encounter/Quest, read this (It's not a bug!)
              </a>
          </p>
      </div>
  );

  const renderContent = () => {
    if (activeGuide === 'INTERNAL') {
        return (
            <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-8 animate-in fade-in duration-300 pb-24">
                {/* Header */}
                <div className="bg-gradient-to-r from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 shadow-lg">
                    <h1 className="text-2xl md:text-3xl font-bold text-wwm-green mb-2">App Guide (General)</h1>
                    <p className="text-stone-400 text-sm md:text-base italic">Introduction</p>
                    <p className="text-stone-300 text-sm md:text-base mt-2">
                    This guide focuses on efficiency, scaling, and input precision. It is written for players who want to optimize their account long term instead of guessing or over-farming.
                    </p>
                </div>

                {/* Scope */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Info size={20} className="text-wwm-green" /> Scope
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-stone-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-wwm-green rounded-full shrink-0"/> Things to do on a weekly/daily basis</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-wwm-green rounded-full shrink-0"/> Performance and input configuration</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-wwm-green rounded-full shrink-0"/> Weapon roles and pairing</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-wwm-green rounded-full shrink-0"/> Leveling and breakthrough order</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-wwm-green rounded-full shrink-0"/> Mystic Arts, Talents, Inner Arts</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-wwm-green rounded-full shrink-0"/> Gear, Resonance, weekly systems, and co-op</li>
                    </ul>
                </section>

                {/* Daily & Weekly Routine */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <CheckSquare size={20} className="text-wwm-green" /> Daily & Weekly Routine
                    </h2>
                    
                    <div className="space-y-6">
                        {/* Daily Checklist */}
                        <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800">
                            <h3 className="text-wwm-green font-bold mb-3 uppercase text-sm tracking-wide">Daily Checklist</h3>
                            <ol className="list-decimal pl-5 space-y-3 text-stone-300 text-sm">
                                <li>
                                    <strong className="text-stone-200">Spend Mental Energy</strong>
                                    <p className="text-stone-400 text-xs">Never let it cap. Use it on one stronghold or any small objective.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Complete one casual activity</strong>
                                    <p className="text-stone-400 text-xs">Pitch-Pot is quickest.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Visit your home</strong>
                                    <p className="text-stone-400 text-xs">Use the grooming interaction. (Blissful retreat -&gt; House on left -&gt; Table mirror).</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Buy daily/weekly-limited materials</strong>
                                    <p className="text-stone-400 text-xs mb-1">Prioritize useful items with limited stock.</p>
                                    <ul className="list-disc pl-4 text-xs text-stone-500 space-y-1">
                                        <li>Menu &gt; Shop &gt; Items: Lingering Melody</li>
                                        <li>Menu &gt; Season &gt; Season Shop: Oscillating Jade, Life Supplies Support Box, Martial Arts Chest, Inner Way Note Chest, Small Box of Commerce Coins</li>
                                        <li>If you see raw ore / coarse fur: buy all 99.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Handle guild events (if unlocked)</strong>
                                    <p className="text-stone-400 text-xs">Start multi-day chains early.</p>
                                </li>
                            </ol>
                        </div>

                        {/* Weekly Checklist */}
                        <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800">
                            <h3 className="text-wwm-green font-bold mb-3 uppercase text-sm tracking-wide">Weekly Checklist</h3>
                            <ol className="list-decimal pl-5 space-y-3 text-stone-300 text-sm">
                                <li>
                                    <strong className="text-stone-200">Weekly Dungeon (Hero's Realm)</strong>
                                    <p className="text-stone-400 text-xs">Do before reset. Ideally later in the week after upgrades. Can do twice if in a guild.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Use weekly jade fish and echo jades</strong>
                                    <p className="text-stone-400 text-xs">Spend on internal arts, skill breakthroughs. (Jade fish: Season Shop, Echo jade: Merchants).</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Stronghold farming</strong>
                                    <p className="text-stone-400 text-xs">&lt;Lv40: prevent Mental Energy cap. &gt;Lv40: target boss strongholds for set gear.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Recycle unused gear</strong>
                                    <p className="text-stone-400 text-xs">Every replaced item should be dismantled.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Finish multi-day sect/guild tasks</strong>
                                    <p className="text-stone-400 text-xs">Start early to avoid missing weekly completion.</p>
                                </li>
                            </ol>
                        </div>

                         {/* Avoiding Waste */}
                         <div className="bg-red-950/20 p-4 rounded-lg border border-red-900/30">
                            <h3 className="text-red-400 font-bold mb-3 uppercase text-sm tracking-wide flex items-center gap-2"><AlertTriangle size={16}/> Avoiding Waste</h3>
                            <ul className="space-y-2 text-stone-300 text-sm">
                                <li><strong className="text-stone-200">Mental Energy rewards scale:</strong> Don’t farm heavily until mid-game.</li>
                                <li><strong className="text-stone-200">Weekly dungeon mats are exclusive:</strong> Skipping = permanent loss.</li>
                                <li><strong className="text-stone-200">Weekly shop mats compound:</strong> Always buy them.</li>
                                <li><strong className="text-stone-200">Recycling is progression:</strong> Dismantle blue/low-level gear. You'll need mats for tuning later.</li>
                                <li><strong className="text-stone-200">Weekly caps &gt; daily tasks:</strong> Hit weekly limits first.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Resets & Schedules */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Clock size={20} className="text-wwm-green" /> Daily & Weekly Resets/Schedules
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <h3 className="font-bold text-white mb-2">Reset Timings</h3>
                             <p className="text-sm text-stone-400">New Day: <strong>21:00 UST</strong></p>
                             <p className="text-sm text-stone-400">New Week: <strong>Monday</strong></p>
                         </div>
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800 space-y-2">
                             <div>
                                 <strong className="text-wwm-green text-sm block">Saturday & Sunday</strong>
                                 <p className="text-xs text-stone-400">Guild war, Fireworks (Kaifeng), Buying merchant commodities.</p>
                             </div>
                             <div>
                                 <strong className="text-wwm-green text-sm block">Monday Onwards</strong>
                                 <p className="text-xs text-stone-400">Weekly shop reset, Bond lvl refresh, Raids (10-man, 5-man, Guild), Sect/BP Caps refresh.</p>
                             </div>
                             <div>
                                 <strong className="text-wwm-green text-sm block">Wednesday Onwards</strong>
                                 <p className="text-xs text-stone-400">Selling commodities to other players.</p>
                             </div>
                         </div>
                    </div>
                </section>

                {/* Settings & Optimization */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Monitor size={20} className="text-wwm-green" /> Settings & Optimization
                    </h2>
                    <p className="text-sm text-stone-400">These configurations ensure smooth combat timing. Stability and clarity take priority over visual quality.</p>

                    {/* Display & Graphics */}
                    <div>
                        <h3 className="font-bold text-stone-200 mb-2 flex items-center gap-2"><Video size={16}/> Display & Graphics</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-stone-300">
                                <thead className="text-xs text-stone-400 uppercase bg-stone-800">
                                    <tr>
                                        <th className="px-4 py-2 rounded-tl-lg">Setting</th>
                                        <th className="px-4 py-2">Value</th>
                                        <th className="px-4 py-2 rounded-tr-lg">Reason</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-stone-900/50">
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2 font-medium">Display Mode</td>
                                        <td className="px-4 py-2 text-wwm-green">Fullscreen</td>
                                        <td className="px-4 py-2 text-stone-500">Prevents focus loss and hitching.</td>
                                    </tr>
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2 font-medium">FPS Limit</td>
                                        <td className="px-4 py-2 text-wwm-green">Uncapped / 120+</td>
                                        <td className="px-4 py-2 text-stone-500">Smoother input timing.</td>
                                    </tr>
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2 font-medium">V-Sync</td>
                                        <td className="px-4 py-2 text-wwm-green">Off</td>
                                        <td className="px-4 py-2 text-stone-500">Reduces input delay.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-medium">Motion Blur</td>
                                        <td className="px-4 py-2 text-wwm-green">Off</td>
                                        <td className="px-4 py-2 text-stone-500">Improves clarity.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Control Layout */}
                    <div>
                        <h3 className="font-bold text-stone-200 mb-2 flex items-center gap-2"><Gamepad2 size={16}/> Control Layout</h3>
                        <div className="bg-stone-900/50 p-4 rounded border border-stone-800 text-sm">
                            <p className="mb-3 text-stone-400">Bind offensive (keyboard) and defensive (mouse) tools separately to prevent conflict.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <ul className="space-y-1">
                                    <li className="flex justify-between"><span className="text-stone-500">Light Attack</span> <span className="text-stone-200">LMB</span></li>
                                    <li className="flex justify-between"><span className="text-stone-500">Parry</span> <span className="text-stone-200">Forward Mouse Btn</span></li>
                                    <li className="flex justify-between"><span className="text-stone-500">Dodge</span> <span className="text-stone-200">Back Mouse Btn</span></li>
                                </ul>
                                <ul className="space-y-1">
                                    <li className="flex justify-between"><span className="text-stone-500">Weapon Skill</span> <span className="text-stone-200">Q / E</span></li>
                                    <li className="flex justify-between"><span className="text-stone-500">Mystic Arts</span> <span className="text-stone-200">1–4</span></li>
                                    <li className="flex justify-between"><span className="text-stone-500">Movement</span> <span className="text-stone-200">F</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Camera Config */}
                    <div>
                        <h3 className="font-bold text-stone-200 mb-2">Camera Configuration</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-stone-300">
                                <thead className="text-xs text-stone-400 uppercase bg-stone-800">
                                    <tr>
                                        <th className="px-4 py-2 rounded-tl-lg">Setting</th>
                                        <th className="px-4 py-2">Value</th>
                                        <th className="px-4 py-2 rounded-tr-lg">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-stone-900/50">
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2">Camera Distance</td>
                                        <td className="px-4 py-2 text-wwm-green">Wide</td>
                                        <td className="px-4 py-2 text-stone-500">Improves awareness.</td>
                                    </tr>
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2">Horizontal Sens</td>
                                        <td className="px-4 py-2 text-wwm-green">6–8</td>
                                        <td className="px-4 py-2 text-stone-500">Smooth tracking.</td>
                                    </tr>
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2">Vertical Sens</td>
                                        <td className="px-4 py-2 text-wwm-green">5–6</td>
                                        <td className="px-4 py-2 text-stone-500">Prevents over-aiming.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Camera Correction</td>
                                        <td className="px-4 py-2 text-wwm-green">Off / Close</td>
                                        <td className="px-4 py-2 text-stone-500">Avoids disruption.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                            <strong className="text-stone-200 block mb-2">Network Settings</strong>
                            <p className="text-stone-400 mb-1">Use wired Ethernet. Avoid VPNs unless they lower ping significantly.</p>
                            <p className="text-xs text-stone-500 italic">Consistent latency &gt; Raw speed.</p>
                        </div>
                        <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                            <strong className="text-stone-200 block mb-2">Performance Checklist</strong>
                            <ul className="list-disc pl-5 text-stone-400 space-y-1">
                                <li>Cap FPS only if heating occurs.</li>
                                <li>Update GPU drivers (DX12).</li>
                                <li>Close overlays (Discord/Steam).</li>
                                <li>Run from SSD.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Pre-Game Configuration */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Settings size={20} className="text-wwm-green" /> Pre-Game Configuration
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <strong className="text-wwm-green block mb-1">Guidance Mode</strong>
                             <p className="text-stone-300 mb-2"><strong>Detailed:</strong> Recommended for start.</p>
                             <p className="text-stone-300"><strong>Moderate:</strong> Switch later for cleaner UI.</p>
                         </div>
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <strong className="text-wwm-green block mb-1">Operation Mode</strong>
                             <p className="text-stone-300 mb-2"><strong>ARPG:</strong> Recommended (Auto-cam).</p>
                             <p className="text-stone-300"><strong>MMORPG:</strong> Manual drag.</p>
                         </div>
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <strong className="text-wwm-green block mb-1">Game Difficulty</strong>
                             <p className="text-stone-300 mb-2"><strong>Recommended:</strong> Balanced.</p>
                             <p className="text-stone-300"><strong>Legend/Hardcore:</strong> Permanent difficulty/Permadeath.</p>
                         </div>
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <strong className="text-wwm-green block mb-1">Social Tendency</strong>
                             <p className="text-stone-300"><strong>Shared Journey:</strong> Recommended (Enables Co-op/Trade).</p>
                         </div>
                    </div>
                    <div className="bg-stone-900/50 p-4 rounded border border-stone-800 text-sm">
                         <strong className="text-wwm-green block mb-1">Character & Talents</strong>
                         <p className="text-stone-300 mb-2">First 3 edits are free. Create final look early.</p>
                         <p className="text-stone-300"><strong>Recommended Talent:</strong> <em>Rhetoric Edge</em> (Improves persuasion in quests).</p>
                    </div>
                </section>

                {/* Progression */}
                <section className="space-y-4">
                     <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <TrendingUp size={20} className="text-wwm-green" /> Progression & Leveling
                    </h2>
                    <div className="bg-stone-800/50 p-4 rounded text-sm text-stone-300 space-y-3 border-l-4 border-emerald-600">
                        <p><strong>1. Always push Main Story first.</strong> XP cap and breakthroughs are tied to it.</p>
                        <p><strong>2. Perform breakthroughs immediately</strong> when hitting a level cap.</p>
                        <p><strong>3. Use remaining time</strong> for daily/weekly tasks, exploration, and side quests only after story progress is blocked by current patch limits.</p>
                    </div>
                </section>

                {/* Exchange Codes */}
                <section className="space-y-4">
                     <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Gift size={20} className="text-wwm-green" /> Exchange Codes
                    </h2>
                    <p className="text-xs text-stone-500">Input in Settings &gt; Other &gt; Exchange Code</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-900/20 border border-emerald-800 p-4 rounded">
                            <strong className="text-emerald-400 block mb-2 uppercase text-xs tracking-wider">Ongoing</strong>
                            <ul className="space-y-1 font-mono text-sm text-stone-300">
                                <li>WWMGLyoutube</li>
                                <li>WWMGLtiktok</li>
                                <li>WWM251115</li>
                            </ul>
                        </div>
                        <div className="bg-stone-900/50 border border-stone-800 p-4 rounded opacity-75">
                            <strong className="text-stone-500 block mb-2 uppercase text-xs tracking-wider">Expired</strong>
                            <ul className="space-y-1 font-mono text-sm text-stone-500 line-through">
                                <li>WWMGO1114</li>
                                <li>WWMGO1115</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-4">
                     <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <HelpCircle size={20} className="text-wwm-green" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"Why did Hero's Realm attempt not count into the Guild event?"</p>
                            <p className="text-sm text-stone-400">If in a guild, you can do it twice. The second run counts for guild events and gives rewards at the end.</p>
                        </div>
                        <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"Where is the 5v5 arena?"</p>
                            <p className="text-sm text-stone-400">As of 25/11/2025, it is not yet released.</p>
                        </div>
                        <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"I am dying in PvP / Combat Mastery is low"</p>
                            <p className="text-sm text-stone-400">Focus on ONE martial path (e.g., Bellstrike) to avoid spreading resources too thin.</p>
                        </div>
                         <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"Outposts vs Campaign Challenge?"</p>
                            <p className="text-sm text-stone-400">Outposts for resources (Ebon Iron). Campaign for specific set gear.</p>
                        </div>
                         <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"20 co-op poses is tiring!"</p>
                            <p className="text-sm text-stone-400">Have a friend stay in a pose. Press F -&gt; Move away -&gt; Repeat x20.</p>
                        </div>
                         <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"Clearing Guild Transporter is a pain"</p>
                            <p className="text-sm text-stone-400">Hover over the needed item and click the suggested merchant for instant access.</p>
                        </div>
                    </div>
                </section>

                 <section className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 text-center space-y-4">
                    <h2 className="text-xl font-bold text-white">Final Notes - Join our guild ;)</h2>
                    <p className="text-sm text-stone-400 italic">
                        With that being said, this guide is not perfect and was written originally based off the Chinese server, so some of the translation is not perfect.
                    </p>
                    <div className="inline-block bg-indigo-900/50 border border-indigo-500/30 p-4 rounded-lg">
                        <p className="text-indigo-200 font-bold">JOIN OUR GUILD: <span className="text-white text-lg">WeHateitHere</span></p>
                        <p className="text-indigo-300 text-sm mt-1">Discord.gg/weh8</p>
                    </div>
                </section>
            </div>
        );
    }

    // --- PART 1 ---
    if (activeGuide === 'PART1') {
        return (
            <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300" style={{'--emote-size': '20px'} as any}>
                <h1 className="text-2xl font-bold text-wwm-green">[Note: This guide is constantly being updated. Please check back often!]</h1>
                <p><strong className="text-white">[UPDATE] GUIDE SPLIT INTO 5 PARTS!</strong></p>
                <p>Due to Reddit's post length limit, I cannot add more updates here. I have split the guide into Four parts to cover everything in detail.</p>
                <p className="text-stone-500/50">---</p>
                <h1 className="text-2xl font-bold mt-6 mb-4 text-stone-200">⚠️ NAVIGATION INDEX</h1>
                {renderNavButtons()}
                <p className="text-stone-500/50 pt-4 border-t border-stone-800 mt-4">---</p>
                <p><em>(Original Post Starts Below)</em></p>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">Intro &amp; Reality Check</h1>
                <p>Hi everyone! I play on the CN server. English isn't my first language, so I'm using AI to help translate.</p>
                <p>I have spent some time putting this guide together to cover as many items and mechanics as possible. <strong className="text-white">If you have any questions or if there are specific items you are confused about, please leave a comment.</strong> I will do my best to answer and update the main post with explanations.</p>
                <p><strong className="text-white">Heads up: This is a long and detailed post.</strong></p>
                <p>However, if you really want to understand how the monetization works—whether you aim to be a strict F2P (Free-to-Play) player or want to spend money efficiently without getting ripped off—taking the time to read this carefully will be very helpful.</p>
                <p><strong className="text-wwm-green">⚠️ Important Expectation Management:</strong></p>
                <p>I want to be very clear: <strong className="text-white">This game is NOT predatory Pay-to-Win</strong> (spending is entirely restricted to cosmetics).</p>
                <p><strong className="text-white">HOWEVER, it is undeniably still an MMO.</strong></p>
                <p>Even though the graphics and gameplay might look like a single-player action game, the payment structure is "bloated" and complex, typical of Asian MMOs. Even a "Lite" MMO is still an MMO at its core.</p>
                <p><strong className="text-white">Why am I sharing this?</strong></p>
                <p>I know discussing money can be depressing. It often feels like stripping the joy out of a game and reducing it to a cold transaction.
                </p>
                <p><strong className="text-white">The Goal:</strong> Understanding these mechanics is the only way to spot potential "traps" so you can play with peace of mind.</p>
                <p><strong className="text-white">For F2P Players:</strong> I listed these details so you know exactly what you might "miss" and—more importantly—what you still get. I hope this rebuilds your confidence.</p>
                <p><strong className="text-white">Rest Assured:</strong> Please do not be intimidated. <strong className="text-white">You can experience 100% of the continuous Main Story and Map updates without spending a single penny.</strong> Based on the CN version, I can confirm this content is excellent.</p>
                <p>Sometimes, we need to dive deeper into how a game makes money. This knowledge empowers you to choose <em><strong>how</strong></em> you want to enjoy the game—or calculate exactly how much it costs to meet your expectations—so you can manage your time and wallet wisely.</p>
                <p><em><strong>Disclaimer: Please note that things might differ on Global, so treat this as a reference based on CN experience and always check your own server</strong></em>.</p>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">1. The Store &amp; The "50% Off" Trick</h1>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-32">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3jrsf41id62g1.png?width=117&amp;format=png&amp;auto=webp&amp;s=a12fe9cabc2a31a0eda46793454a3a03c4f424a2" alt="Coupons" className="mx-auto" />
                </figure>
                <p>For cosmetics sold directly in the store, never pay full price.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">The Coupons:</strong> These look like golden rectangular tickets. Each one gives <strong className="text-emerald-400">10% off</strong>.</p></li>
                    <li><p><strong className="text-white">How to get them:</strong></p>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li><p><strong className="text-white">Daily Sign-ins (Main Source):</strong> You get these regularly by logging in. (Roughly every 18 days). (Usually around the 7th or 18th day).</p></li>
                            <li><p><strong className="text-white">Resonance Shop (Exchange):</strong> You can verify in the "Resonance Shop". You can usually exchange "Stardust" (points from gacha pulls) for <strong className="text-white">1 extra coupon per month</strong>.</p></li>
                        </ol>
                    </li>
                    <li><p><strong className="text-white">Stacking Strategy:</strong> You can stack up to <strong className="text-white">5 coupons</strong> on a single item. This means you can get a <strong className="text-emerald-400">50% discount</strong>.</p></li>
                    <li><p><strong className="text-white">Missed a day?</strong> If you miss a login, don't worry. You can earn currency from multiplayer modes to "make up" the sign-in, ensuring you get your coupons.</p></li>
                </ul>
                <p className="mt-4 text-stone-500 italic">[See Part 5 for full details]</p>
            </div>
        );
    }
    
    const renderPart2 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            <h1 className="text-2xl font-bold text-wwm-green">[NAVIGATION] MISSED PART 1?</h1>
            <p>This is <strong>Part 2</strong> of the guide, focusing on Gameplay Loops, UI, and Crafting.</p>
            <p>If you want to know about <strong>Monetization, Gacha Economy, and Spending Tips</strong>, please check Part 1 below:</p>
            <div className="mt-4 p-4 bg-stone-800/50 rounded-lg border border-stone-700">{renderNavButtons()}</div>
            <hr className="border-stone-700" />
            <h1 className="text-2xl font-bold pt-4 text-white">IN THIS POST (PART 2):</h1>
            <ul className="list-disc pl-5 space-y-1">
                <li>Seasonal Resets: Why P2W is impossible (Detailed Breakdown).</li>
                <li>The "No-Grind" Routine: How to finish weekly tasks in 30 mins.</li>
                <li>UI Translation: Full breakdown of the menus based on CN experience.</li>
            </ul>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">1. Seasonal Resets: The "No P2W" Structure &amp; Casual Friendliness</h1>
            <p>WWM operates on a Seasonal Model (similar to ARPGs like Diablo or Path of Exile). This is the core reason why Pay-to-Win does not exist for combat power here: Gear must be earned through gameplay.</p>
            <ul className="list-disc pl-5 my-4"><li>Duration: Approx. 3 months per season.</li></ul>
            <h2 className="text-xl font-bold text-white">A. The "Soft Reset" Rules</h2>
            <p>When a new season starts, the Level Cap increases. Here is exactly how your power is affected:</p>
            <div className="space-y-4 my-4">
                <div className="bg-stone-800/50 p-4 rounded-lg border border-emerald-800">
                    <strong className="text-emerald-400 block mb-2">✅ 1. Permanent Progression (What You KEEP):</strong>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Skills &amp; Techniques:</strong> Your Martial Arts and Inner Skills levels are fully retained.</li>
                        <li><strong>Exploration &amp; Cosmetics:</strong> Map completion percentages and all skins/outfits do NOT reset.</li>
                    </ul>
                </div>
                <div className="bg-stone-800/50 p-4 rounded-lg border border-blue-800">
                    <strong className="text-blue-400 block mb-2">🆕 2. Seasonal Systems (Where Everyone Starts at 0):</strong>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Seasonal Talent Pool:</strong> Each season introduces a new, separate Talent system. Your old "Base Talents" stay, but the new seasonal tree starts fresh.</li>
                        <li><strong>Boss Talents:</strong> New bosses mean new specific Boss Talents to unlock.</li>
                        <li><strong>Rankings:</strong> Leaderboards are wiped clean.</li>
                    </ul>
                </div>
                <div className="bg-stone-800/50 p-4 rounded-lg border border-red-800">
                    <strong className="text-red-400 block mb-2">⚔️ 3. Equipment (The Great Equalizer):</strong>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>The Reset:</strong> While you keep your skills, your old equipment becomes outdated due to the Level Cap increase.</li>
                        <li><strong>The Grind:</strong> To compete, <strong>EVERYONE</strong> (F2P and Whales alike) must farm new gear for the new level cap.</li>
                        <li><strong>Crucial Fact:</strong> High-end equipment is obtained strictly through gameplay (Dungeons/Raids) and is <strong>NOT</strong> sold in the Cash Shop. You cannot swipe a credit card to generate the best gear; you have to play the game just like everyone else.</li>
                    </ul>
                </div>
            </div>
            <h2 className="text-xl font-bold text-white mt-8">B. The "Catch-Up" Mechanism (Season Shop)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-q8v7lwp3gf2g1.png?width=742&format=png&auto=webp&s=4fbfe17d210fc29feed771ccbfbd88fe78f0775f" alt="Season Shop" className="rounded shadow border border-stone-700 w-full" />
                <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-curf6ml5gf2g1.png?width=1080&crop=smart&auto=webp&s=8f868013bfbfc282e4bb8f59fc74d6334e632f97" alt="Season Shop UI" className="rounded shadow border border-stone-700 w-full object-cover" />
            </div>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>The Fear:</strong> "If I start late, will I be behind forever?"</li>
                <li><strong>The Solution:</strong> The Catch-up Shop (CN: "No-Grind Shop").</li>
                <li><strong>How it works:</strong> If you fall behind, you can buy essential upgrade materials cheaply using common currency.</li>
                <li><strong>Summary:</strong> Because gear power effectively resets every 90 days, new players never fall permanently behind veterans. The devs want to ensure that even if you take a break, you can jump back in next season without penalty.</li>
            </ul>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">2. NO DAILY QUESTS — Only WEEKLY QUESTS</h1>
            <p>Great News: This game has NO DAILY QUESTS. Instead, it has a system literally called "No-Grind" (BuGan). In the Global UI, this is typically found under the Season tab.</p>
            <ul className="list-disc pl-5 my-4">
                <li>The Rule: You have a Weekly Cap of 22,000 Points.</li>
                <li>Flexibility: You can fill this bar whenever you want. Grind it all on Monday, or spread it out over the weekend. Once you hit 22k, you are done for the week!</li>
            </ul>
            <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-164g76xjhf2g1.png?width=1080&crop=smart&auto=webp&s=e2f641c5fe27d8a940927f9873fe730a133fd8ad" alt="Weekly Progress Bar" className="rounded shadow border border-stone-700 w-full my-4" />
            <h2 className="text-xl font-bold text-white">HOW TO FILL THE BAR (2 METHODS)</h2>
            <p className="mt-2"><strong className="text-white">METHOD A: THE NATURAL WAY (JUST PLAY)</strong> For most players, the bar fills up automatically as you:</p>
            <ul className="list-disc pl-5 my-2">
                <li>Open Chests &amp; Explore the Map.</li>
                <li>Clear Dungeons.</li>
                <li>Complete Quests.</li>
            </ul>
            <p><strong className="text-white">METHOD B: THE "SPEEDRUN" STRATEGY (~30 MINS)</strong> Busy week? Here are the "Cheat Codes" to max out your limit in under 30 minutes using <strong>Leisure &amp; Profession</strong> mechanics:</p>
            <ol className="list-decimal pl-5 my-2 space-y-2">
                <li><strong>SOCIAL MINIGAMES (FASTEST):</strong> Play Mahjong or <em>Yezi Xi</em> (Card Game) with players/NPCs, or join a Jam Session (Music). These give massive points instantly.</li>
                <li><strong>THE "AFK" CHECKLIST:</strong>
                    <ul className="list-disc pl-5 mt-1">
                        <li><strong>Meditate:</strong> Go to the "Carefree Time" (<em>Wangyou</em>) spot and just AFK for 20 mins.</li>
                        <li><strong>Emotes:</strong> Spam "Dual Interactions" (High-five, hug) with a friend 20 times.</li>
                        <li><strong>Cargo:</strong> Do the "Merchant Cargo" mission 3 times.</li>
                        <li><strong>Burn Stamina:</strong> Quickly craft items to spend 200 Vitality.</li>
                    </ul>
                </li>
            </ol>
            <p className="text-sm italic text-stone-400"><strong>Note:</strong> The <strong>Weekly Discounted Gacha Ticket</strong> (Price: 200 Jade) can only be purchased <em>after</em> you fill this progress bar. The Season Shop also sells critical upgrade materials using these 22,000 points as currency—<strong>buy them all every week!</strong></p>
            <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-h3ivci6uif2g1.png?width=615&format=png&auto=webp&s=484598c662c9c258a18c449d2685157a7807b94f" alt="Weekly Gacha Ticket" className="rounded shadow border border-stone-700 my-4 max-w-md mx-auto" />
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">3. Game UI Disassembly (Where to Click)</h1>
            <div className="space-y-4">
                <p><strong>1. Bags (Inventory)</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Recycle: Use the "Recycle/Dismantle" button often.</li>
                    <li>Pro Tip: In the recycle menu, click the Gear Icon to "Auto-Mark" low-quality gear. Saves hours of clicking.</li>
                    <li>Warning: UI naming can be confusing. "Develop" / "Upgrade" menus for gear are often accessed directly from the Inventory item details.</li>
                </ul>
                <p><strong>2. Develop (Martial Arts)</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Builds: Manage your Skills and Xinfa (Inner Skills) here.</li>
                    <li>Loadouts: Use "Scheme Management" to save builds (e.g., PvE vs. Exploration).</li>
                    <li>Exchange: Dismantle duplicate Skill Books to buy the specific S-Tier books you need.</li>
                    <li>Exploration Stats: Shows stats like Alcohol Tolerance or Elegance. Raise these by interacting with the world (Drinking, Petting Cats), not fighting.</li>
                </ul>
                <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-99ty7khujf2g1.png?width=535&format=png&auto=webp&s=8236d95f78474538a6cd7526350d7adb2dfd0106" alt="Exploration Stats" className="rounded shadow border border-stone-700 my-4 max-w-sm mx-auto" />
                <p><strong>3. Appearance</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Wardrobe:</strong> Equip Outfits, Weapon Skins, and Mounts.</li>
                    <li><strong>Customize:</strong> Change your "Victory Animation" here.</li>
                    <li><strong>Presets:</strong> Import character faces from other players ("Copying Homework").</li>
                    <li><strong>Hide Weapon:</strong> Toggle this if your weapon clips through your cape.</li>
                </ul>
                <p><strong>4. Profession:</strong> Check your Identity level (Doctor, Scribe, Architect, etc.).</p>
                <p><strong>5. SHOP:</strong> Direct purchase cosmetics (Outfits, Mounts) and <strong>Consumables</strong>. This includes <strong>Gender-Swap</strong> items and appearance reset tokens.</p>
                <p><strong>6. Events:</strong> Check here for Limited-time login rewards and Seasonal events.</p>
                <p><strong>7. Draw (Gacha):</strong> Standard and Limited Character/Weapon Banners.</p>
                <p><strong>8. Battle Pass:</strong> Includes both the Free tier and Paid tier rewards.</p>
                <p><strong>9. Journal</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Exploration Progress:</strong> Tracks map completion %.</li>
                    <li><strong>Rewards:</strong> Click here to claim free Jade when you reach milestones.</li>
                </ul>
                <p><strong>10. Quest:</strong> Tracks Main Story and Side Quests. <strong>Note:</strong> Check your "Quest Items" bag often; reading letters/scrolls often unlocks new lore entries.</p>
                <p><strong>11. Compendium (The "Free Jade Bank"):</strong> Collects all lore, items, and discoveries.</p>
                <ul className="list-disc pl-5"><li><strong>Golden Rule:</strong> If you see a <strong>Red Dot</strong> here, <strong>CLICK IT</strong>. It usually gives you free Jade/Currency.</li></ul>
                <p><strong>12. Wandering Paths:</strong> Matchmaking hub for 5-man/10-man Dungeons and PvP modes.</p>
                <p><strong>13. Season (CRITICAL)</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Weekly Shop:</strong> The most important shop for F2P.</li>
                    <li><strong>Must Buy:</strong> Use activity points to buy <strong>Gold Gacha Pulls</strong>, Gold Gear Boxes, and Upgrade Materials. Clear this shop every week!</li>
                </ul>
                <p><strong>14. Sects:</strong> Manage your Sect reputation, donate coins, and buy your Sect Uniform here.</p>
                <p><strong>15. Social:</strong> Friends list and Affinity (Partner/Master-Apprentice) management.</p>
                <p><strong>16. Guild</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Dividends:</strong> Click here every <strong>Monday</strong> to claim your Weekly Jade Dividend (Salary).</li>
                    <li><strong>Cargo:</strong> Trade open-world materials here.</li>
                </ul>
            </div>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">4. The Weekly Routine Cheatsheet</h1>
            <p>(Based on CN End-game loops. NOTE: These tasks are NOT mandatory! You can play at your own pace. Only follow this routine if you want to maximize efficiency and stay at the absolute forefront of progression.)</p>
            <p className="mt-4"><strong className="text-white">[SECTION A] THE "GET RICH" ROUTE (Commercial currency)</strong></p>
            <button onClick={() => setActiveGuide('PART4')} className="text-wwm-green hover:underline font-bold">[CLICK HERE FOR PART 4: The Ultimate Merchant Trading Guide]</button>
            <p className="text-sm italic text-stone-400 mt-2">NOTE: The reason for earning this money is that you can then rent out a house; it cannot be purchased, and you will have to pay rent every month. Of course, if you feel you don't need a house, you can skip this. If you want to live in a luxury house, you need 10,000 business currency, and that's the monthly rent, which you have to pay every month. You can rent a house by going to Feng's Tradehall. If you can't find the option to rent a house, it's not available in the current version, but it will be in the future. Besides, this money can also be used for gambling (like playing mahjong).</p>
            <p className="mt-4"><strong className="text-white">[SECTION B] SHOPPING LIST</strong> <em>(See attached images for visual reference)</em></p>
            <a href="https://files.catbox.moe/24tvzo.jpg" target="_blank" rel="noopener noreferrer" className="text-wwm-green hover:underline">View Shopping List Image</a>
        </div>
    );
    
    const renderPart3 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            <h1 className="text-2xl font-bold text-wwm-green">[NAVIGATION] MISSED A PART?</h1>
            <div className="mt-4 p-4 bg-stone-800/50 rounded-lg border border-stone-700">{renderNavButtons()}</div>
            <hr className="border-stone-700 my-4" />

            <h1 className="text-2xl font-bold text-red-500 mb-4 flex items-center gap-2">⚠️ STOP! READ THIS FIRST! ⚠️</h1>
            <div className="bg-red-900/20 border border-red-800 p-4 rounded-lg space-y-2 mb-6">
                <p>Before you touch this system, understand three things:</p>
                <ol className="list-decimal pl-5 space-y-1">
                    <li><strong>ZERO COMBAT POWER:</strong> Reforging weapon skins gives you 0 Stats. It is 100% cosmetic. It just makes your sword look cool and glow.</li>
                    <li><strong>WHALE TERRITORY:</strong> This is the most expensive RNG system in the game.</li>
                    <li><strong>THE DANGER:</strong> If you spam clicks without a brain, you will lose hundreds of dollars. If you use my method, you can save 70% of the cost.</li>
                </ol>
                <p className="mt-2 font-bold">Target Audience for this Guide:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li className="text-red-400">❌ F2P Players: Don't try it.</li>
                    <li className="text-emerald-400">✅ Low/Mid Spenders: Unlock the 5 slots and STOP. Do not chase Gold stats. OR, Aim for "3-Gold" or "4-Gold" stats.</li>
                    <li className="text-blue-400">🐋 Whales: Go for "5-Gold" (But read this to save money).</li>
                </ul>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2">🎒 PART 1: THE "SECRET" MECHANIC</h1>
            <p>The game doesn't tell you this, but the Reforging system is NOT completely random. It uses a system we call "Pseudo-RNG".</p>
            
            <h2 className="text-xl font-bold text-white mt-4">🧠 The "35-Roll" Rule</h2>
            <div className="bg-stone-800/50 p-4 rounded border border-stone-700">
                <p>Imagine a hidden counter on EACH of the 5 slots on your weapon.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>On average, a Gold (Legendary) stat appears on a specific slot once every 30 to 40 rolls.</li>
                    <li>Let's say the average is 35.</li>
                    <li>If you roll Slot #1 30 times and get nothing, the "Gold" is very likely to appear in the next few clicks.</li>
                </ul>
                <p className="mt-2 text-yellow-400 italic">This is your only advantage. If you don't count your rolls, you are gambling. If you count your rolls, you are strategizing.</p>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">📝 PART 2: PREPARATION</h1>
            
            <h3 className="text-lg font-bold text-white mt-4">1. Get a Notebook 📓</h3>
            <p>I am serious. Get a piece of paper or open Excel. You need to track the "Fail Count" for each slot position (1, 2, 3, 4, 5) separately.</p>
            <ul className="list-disc pl-5 text-stone-400 mt-2">
                <li>Slot 1 Fails: 12</li>
                <li>Slot 2 Fails: 30 (HOT! 🔥)</li>
                <li>Slot 3 Fails: 5</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-4">2. Understand "Schemes" (The Money Saver)</h3>
            <p>The game lets you save different "Schemes" (Loadouts) for the same weapon.</p>
            <ul className="list-disc pl-5 mt-2">
                <li><strong>Scheme A:</strong> Your Main Scheme (The one with good stats you want to keep).</li>
                <li><strong>Scheme B:</strong> The "Trash" Scheme (An empty scheme we use to burn bad luck).</li>
            </ul>
            <div className="bg-stone-800/50 p-4 rounded border border-stone-700 mt-4">
                <strong className="text-yellow-400 block mb-2">💰 THE COST DIFFERENCE:</strong>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Rolling on Scheme B (Nothing locked): Costs 1 Stone per roll.</li>
                    <li>Rolling on Scheme A (With 2 stats Locked): Costs 5+ Stones per roll.</li>
                </ul>
                <p className="mt-2 text-sm">See the logic? We want to burn the "bad rolls" on the cheap Scheme B, and only switch to Scheme A when the Gold stat is guaranteed to drop!</p>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">🛠️ PART 3: THE STRATEGY (BATTLE EXAMPLES)</h1>
            <p>Let's simulate a real situation so even a monkey can understand this. 🐒</p>
            
            <h2 className="text-xl font-bold text-white mt-4">Goal: Getting 3 Golds (The Smart Choice)</h2>
            
            <div className="space-y-4 mt-4">
                <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                    <strong className="text-white block mb-1">Step 1: The Setup</strong>
                    <p>You roll normally until you get 2 Gold Stats on your weapon. Let's say Slot 1 and Slot 2 are Gold.</p>
                    <ul className="list-disc pl-5 mt-2 text-sm text-stone-400">
                        <li><strong>Problem:</strong> You want a 3rd Gold on Slot 3.</li>
                        <li><strong>Bad Player Action:</strong> Locks Slot 1 & 2 immediately and spams roll.</li>
                        <li><strong>Result:</strong> Each roll costs a fortune. It takes 35 rolls to get the next Gold. You go broke. 💀</li>
                    </ul>
                </div>

                <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                    <strong className="text-white block mb-1">Step 2: Check the Data</strong>
                    <p>Look at your notebook. When was the last time Slot 3 saw a Gold stat?</p>
                    <ul className="list-disc pl-5 mt-2 text-sm text-stone-400">
                        <li>If it just got a Gold 5 rolls ago... DO NOT LOCK. The next Gold is far away.</li>
                        <li>You need to build up "Fails" (Pity) for Slot 3.</li>
                    </ul>
                </div>

                <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                    <strong className="text-white block mb-1">Step 3: The "Trash Swap" Trick (The Secret Sauce)</strong>
                    <ol className="list-decimal pl-5 mt-2 space-y-2 text-sm text-stone-400">
                        <li>Save your good stats (Slot 1 & 2 Gold) in Scheme 1.</li>
                        <li>Switch to Scheme 2 (The Trash Scheme).</li>
                        <li>Start rolling on the Trash Scheme.
                            <ul className="list-disc pl-5 mt-1">
                                <li>We don't care about the result. We are just increasing the "Fail Count".</li>
                                <li>Keep marking your notebook for Slot 3. 10 fails... 20 fails... 30 fails...</li>
                            </ul>
                        </li>
                        <li>STOP! 🛑</li>
                        <li>Once Slot 3 has failed about 30-35 times on the Trash Scheme, it is now "Prime/Due" for a Gold.</li>
                    </ol>
                </div>

                <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                    <strong className="text-white block mb-1">Step 4: The Snipe</strong>
                    <ol className="list-decimal pl-5 mt-2 space-y-2 text-sm text-stone-400">
                        <li>Switch BACK to Scheme 1 (Your good one).</li>
                        <li>LOCK Slot 1 & 2 (The Golds you saved).</li>
                        <li>Roll.</li>
                        <li>Because Slot 3 is "Prime" (from your work on the trash scheme), the Gold stat should appear within 1-5 rolls.</li>
                        <li>Congratulations! You got a 3-Gold weapon for a fraction of the price. 🎉</li>
                    </ol>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">📊 PART 4: SUMMARY CHECKLIST</h1>
            <div className="bg-emerald-900/20 p-4 rounded border border-emerald-800">
                <ol className="list-decimal pl-5 space-y-2 text-white">
                    <li>Unlock all 5 Slots first. (Costs ~120 Stones).</li>
                    <li>Never Lock immediately after getting a Gold. The "Pity" resets, so the next rolls are wasted.</li>
                    <li>Use Trash Schemes to build up "Fail Stacks" cheaply.</li>
                    <li>Only Lock and Roll on your main scheme when your notebook says a slot is at 30+ Fails.</li>
                    <li>Stop at 3 or 4 Golds. 5-Gold requires perfect alignment of all 5 slots and is extremely expensive.</li>
                </ol>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">❓ FREQUENTLY ASKED QUESTIONS (FAQ)</h1>
            <div className="space-y-4">
                <div>
                    <strong className="text-white">Q: Do specific colors (Red/Blue/Green) matter?</strong>
                    <p className="text-sm text-stone-400">A: For pure visuals? No. Just aim for the "Gold" rarity icon. The specific stat type doesn't change the glow, only the rarity does.</p>
                </div>
                <div>
                    <strong className="text-white">Q: I rolled 40 times and no Gold! You lied!</strong>
                    <p className="text-sm text-stone-400">A: It's "Pseudo-RNG", not "Hard Pity". It's an average. Sometimes it comes at 20, sometimes at 50. But 35 is the mathematical sweet spot to start trying.</p>
                </div>
                <div>
                    <strong className="text-white">Q: Can I sell this weapon later?</strong>
                    <p className="text-sm text-stone-400">A: Yes, it works on the Chinese server, but you must verify on the global server or seek help from other players.</p>
                </div>
                <div>
                    <strong className="text-white">Q: What happens if I get a Gold on the "Trash Scheme"?</strong>
                    <p className="text-sm text-stone-400">A: Laugh and cry. 😂 It happens. It means you "wasted" your luck on the trash scheme. The counter resets to 0. Start counting again.</p>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">🖼️ VISUAL GALLERY</h1>
            <p className="mb-4">For players asking "Is it worth it?", here is what the effects actually look like. (Sourced from CN community):</p>
            <div className="space-y-2">
                {[
                    'https://files.catbox.moe/59mjns.png',
                    'https://files.catbox.moe/ogzzr6.png',
                    'https://files.catbox.moe/vc4zyo.png',
                    'https://files.catbox.moe/l9pykk.png',
                    'https://files.catbox.moe/bsqkjf.png'
                ].map((url, i) => (
                    <div key={i} className="bg-stone-900 p-2 rounded flex items-center justify-between">
                        <span className="text-sm font-bold text-stone-400">Effect Reference {i+1}</span>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-wwm-green hover:underline flex items-center gap-1 text-sm">
                            View Image <ExternalLink size={14} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPart4 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            <h1 className="text-2xl font-bold text-wwm-green">[NAVIGATION] MISSED A PART?</h1>
            <div className="mt-4 p-4 bg-stone-800/50 rounded-lg border border-stone-700">{renderNavButtons()}</div>
            <hr className="border-stone-700 my-4" />

            <div className="bg-stone-800 p-4 rounded border-l-4 border-wwm-green italic text-sm mb-6">
                <strong>Disclaimer:</strong> This article is based on CN experience. If there are any changes globally, please refer to the current server for the most up-to-date information.
            </div>

            <div className="flex justify-center my-4">
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-2hc3ap2h7r2g1.png?width=204&format=png&auto=webp&s=dee04023a213b4b5292d31adaafcf62f2d7ffb51" className="rounded-lg shadow-lg border border-stone-700" alt="Trade Office" />
            </div>

            <div className="space-y-4">
                <p><strong>NOTE:</strong> The reason for earning this money is that you can then rent out a house; it cannot be purchased, and you will have to pay rent every month. Of course, if you feel you don't need a house, you can skip this.</p>
                <p>If you want to live in a luxury house, you need <strong>10,000 business currency</strong>, and that's the monthly rent, which you have to pay every month, or your house will be repossessed.</p>
                <p className="text-sm italic text-stone-500">(There are three levels of housing: 100/month, 1000/month, and 10000/month. If you want to live in a luxury house, you'll have to work hard.)</p>
                <p>You can rent a house by going to <strong>Feng's Tradehall</strong>. Besides, this money can also be used for gambling (like playing mahjong).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-mdhgx0sm3l2g1.jpg?width=1080&format=pjpg&auto=webp&s=8ef4259300fca44a36f7e88cb4a1b39670c2ce95" className="w-full h-48 object-cover rounded-lg border border-stone-700" alt="Mansion 1" />
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-v0i6ap0v3l2g1.jpg?width=1080&format=pjpg&auto=webp&s=cf081b816119e999755db3e9910c44662233c2e6" className="w-full h-48 object-cover rounded-lg border border-stone-700" alt="Mansion 2" />
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-3dxwb3a04l2g1.jpg?width=1440&format=pjpg&auto=webp&s=6b9a85eb4d00b30c1f7988c1e19cf03012440ab0" className="w-full h-48 object-cover rounded-lg border border-stone-700" alt="Mansion 3" />
            </div>

            <p>Merchant Runs are one of the most important ways to earn Commerce Coins. However, it is not just about buying low and selling high. If you do not prepare your inventory space first, you will miss out on massive profits.</p>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">Step 1: Preparation (Max Out Your Inventory)</h1>
            <p className="text-white font-bold my-4">➡️ First, go here.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-x5t3prfgx33g1.png?width=2089&format=png&auto=webp&s=a7dd51f558df652c17881fde211aacfb2a7435b0" className="w-full rounded border border-stone-700" alt="Location Map" />
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-qsq6opeeuk2g1.png?width=1022&format=png&auto=webp&s=48f38053f906afbad67ca920dc7d29fe0b89657b" className="w-full rounded border border-stone-700" alt="NPC Interaction" />
            </div>

            <div className="bg-stone-900/50 p-4 rounded border border-stone-800 space-y-4">
                <div>
                    <strong className="text-white block mb-1">1. Rent Storage at Fengs Tradehall</strong>
                    <ul className="list-disc pl-5 text-sm text-stone-400">
                        <li>Find the NPC Feng Cheng. Talk to him and select "House Rental".</li>
                        <li>Scroll down and rent the option that costs <strong>10,000 Commerce Coins</strong>.</li>
                        <li>Why? Only the most expensive option gives you +60 Slots and lasts for one month. Do not waste money on cheaper options.</li>
                    </ul>
                </div>
                <div>
                    <strong className="text-white block mb-1">2. Upgrade Profession Skills</strong>
                    <ul className="list-disc pl-5 text-sm text-stone-400">
                        <li>Open your Profession (Guild) menu.</li>
                        <li>Level up "Trade Office Inventory" to Level 6 (+20 Slots).</li>
                        <li>Maximize "Sales Bonus" and "Tax Reduction".</li>
                    </ul>
                </div>
                <div className="bg-emerald-900/20 p-2 rounded text-center">
                    <strong className="text-wwm-green">Total Inventory:</strong> 20 (Initial) + 60 (Rental) + 20 (Skill) = <strong>100 Slots</strong>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">Step 2: Understanding Market Mechanics</h1>
            <p>Go to the Trade Office and talk to the NPC Zhang Qiyue.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-3nrgj15guk2g1.png?width=2205&format=png&auto=webp&s=51d521687b1fe2ac6e1f1551f35ea717ffb63b42" className="w-full rounded border border-stone-700" />
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-7jvca5sfuk2g1.png?width=862&format=png&auto=webp&s=7cb9b070ab71cc3a6726f239b44d79c2ae82ccbb" className="w-full rounded border border-stone-700" />
            </div>

            <div className="space-y-4">
                <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                    <strong className="text-white block mb-1">Types of Goods</strong>
                    <ul className="list-disc pl-5 text-sm text-stone-400">
                        <li><strong>Local Fluctuation:</strong> Price changes within your own world. Be careful if price rises >200%.</li>
                        <li><strong>Foreign Fluctuation:</strong> Price static in your world. Visit other players via Co-op to sell high.</li>
                    </ul>
                </div>
                <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                    <strong className="text-white block mb-1">Stock Limits</strong>
                    <ul className="list-disc pl-5 text-sm text-stone-400">
                        <li>Refreshes Saturday and Monday.</li>
                        <li>Buy limit: 30 items per refresh. Total weekly limit: 180 items.</li>
                    </ul>
                </div>
            </div>

            <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-jm739dffuk2g1.png?width=3610&format=png&auto=webp&s=9d420539ff48266a2d101ee99b35bf78125ced50" className="w-full rounded-lg border border-stone-700 my-4" alt="Market Analysis" />

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">Step 3: The Golden Weekly Schedule</h1>
            <p>The trading cycle runs from Saturday 6:00 AM to the next Saturday 6:00 AM.</p>
            <div className="space-y-4 mt-4">
                <div className="flex gap-4 items-start">
                    <div className="bg-stone-800 p-2 rounded text-center min-w-[80px] text-xs font-bold text-stone-400">SAT-SUN</div>
                    <div>
                        <strong className="text-white block">Hoard Only</strong>
                        <p className="text-sm text-stone-400">Prices are low. Buy 90 items. Do not sell yet.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-stone-800 p-2 rounded text-center min-w-[80px] text-xs font-bold text-stone-400">MON-TUE</div>
                    <div>
                        <strong className="text-white block">Hold</strong>
                        <p className="text-sm text-stone-400">Prices rising. Be patient.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-wwm-green text-stone-900 p-2 rounded text-center min-w-[80px] text-xs font-bold">WED</div>
                    <div>
                        <strong className="text-wwm-green block">The Payday</strong>
                        <p className="text-sm text-stone-400">Prices peak (up to 300%). Sell hoarded items. Buy Mon/Sat refresh stock and sell immediately.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-stone-800 p-2 rounded text-center min-w-[80px] text-xs font-bold text-stone-400">THU-FRI</div>
                    <div>
                        <strong className="text-white block">Cleanup</strong>
                        <p className="text-sm text-stone-400">Sell whatever is left before reset.</p>
                    </div>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">Step 4: The Pro Tip - Profiting Without Travel</h1>
            <p>Selling at home can yield more profit due to tax reduction skills.</p>
            <div className="bg-stone-800/50 p-4 rounded border border-stone-700 mt-4">
                <strong className="text-white">NPC: Cong Bushao</strong>
                <p className="text-sm text-stone-400 mb-2">Location: Inside your Guild Base / Residence. Left of main gate.</p>
                <p className="text-sm text-stone-300"><strong>Price Rule:</strong> Selling at Home for 203 ≈ Selling to Stranger for 285 (due to taxes).</p>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">Future Content: The "Lone Summit" Sect</h1>
            <p>A future sect focuses entirely on trading. Members must earn 100 Commerce Coins weekly to maintain standing.</p>
        </div>
    );

    const renderPart5 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            <h1 className="text-2xl font-bold text-wwm-green">[NAVIGATION] MISSED A PART?</h1>
            <div className="mt-4 p-4 bg-stone-800/50 rounded-lg border border-stone-700">{renderNavButtons()}</div>
            <hr className="border-stone-700 my-4" />

            <div className="bg-stone-800 p-6 rounded-lg text-center space-y-4">
                <h1 className="text-3xl font-bold text-wwm-green">Part 5: Cosmetics Roadmap [CN Spoilers]</h1>
                <p className="text-stone-300 max-w-2xl mx-auto">
                    Hi everyone, I have noticed many Global players asking about future cosmetics. 
                    Here is a compiled timeline of all Appearance/Cosmetics released on the CN server to help you plan your Jade budget.
                </p>
                <p className="text-sm text-stone-500 font-mono bg-stone-900 inline-block px-3 py-1 rounded">Updated: 2025/11/22</p>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">🛑 How to Read This Guide</h1>
            <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li><strong>Chronological Order:</strong> The list starts from the beginning and goes forward in time.</li>
                <li><strong>Current Status:</strong> Updated up to Nov 2025 (CN).</li>
                <li><strong>WIP:</strong> This is a massive project; I will update regularly.</li>
            </ul>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">💡 Cosmetic Showcase</h1>
            <p className="mb-4">Click the links below to view the outfits (External Image Links):</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                    { url: 'https://files.catbox.moe/uj5eax.jpg', note: 'Revised 2025/11/22' },
                    { url: 'https://files.catbox.moe/ghjfsg.jpg', note: '' },
                    { url: 'https://files.catbox.moe/2sjin0.jpg', note: 'Revised 2025/11/22 (Added fox details)' },
                    { url: 'https://files.catbox.moe/g5jt5g.jpg', note: '' },
                    { url: 'https://files.catbox.moe/a5n8r4.jpg', note: '' },
                    { url: 'https://files.catbox.moe/nlkeoy.jpg', note: '' },
                    { url: 'https://files.catbox.moe/7a2cz9.jpg', note: '' },
                    { url: 'https://files.catbox.moe/zh11cl.jpg', note: '' },
                    { url: 'https://files.catbox.moe/unijd6.jpg', note: '' },
                    { url: 'https://files.catbox.moe/utx9tk.jpg', note: '' },
                    { url: 'https://files.catbox.moe/12fs7e.jpg', note: '' },
                    { url: 'https://files.catbox.moe/g48mcw.jpg', note: '' },
                    { url: 'https://files.catbox.moe/u6zpdx.jpg', note: '' },
                    { url: 'https://files.catbox.moe/leom6t.jpg', note: '' },
                    { url: 'https://files.catbox.moe/9oyht9.jpg', note: '' },
                    { url: 'https://files.catbox.moe/wx5z0c.jpg', note: '' },
                    { url: 'https://files.catbox.moe/w1mixt.jpg', note: '' },
                    { url: 'https://files.catbox.moe/df3t8m.jpg', note: '' },
                    { url: 'https://files.catbox.moe/on9wcg.jpg', note: '' },
                    { url: 'https://files.catbox.moe/knkewt.jpg', note: '' },
                    { url: 'https://files.catbox.moe/e2epcj.jpg', note: '' },
                    { url: 'https://files.catbox.moe/g7jch2.jpg', note: '' }
                ].map((item, i) => (
                    <a 
                        key={i} 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-stone-900 rounded hover:bg-stone-800 transition-colors border border-stone-800 hover:border-wwm-green group"
                    >
                        <div className="flex items-center gap-3">
                            <ImageIcon size={18} className="text-stone-500 group-hover:text-wwm-green" />
                            <span className="text-sm font-mono text-stone-300">Outfit Showcase #{i+1}</span>
                        </div>
                        <div className="text-xs text-stone-500 flex items-center gap-2">
                            {item.note && <span className="text-wwm-green">{item.note}</span>}
                            <ExternalLink size={14} />
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-8 space-y-4">
                <div className="bg-stone-900 p-4 rounded border border-stone-800">
                    <strong className="text-wwm-green block mb-2 flex items-center gap-2"><Download size={18}/> Google Drive Archive</strong>
                    <p className="text-sm text-stone-400 mb-2">Access the full folder of images:</p>
                    <a href="https://drive.google.com/drive/folders/1UqI9ox1SHNBITYEEZQxuBwCI0_VvmIl9?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all text-sm">
                        https://drive.google.com/drive/folders/1UqI9ox1SHNBITYEEZQxuBwCI0_VvmIl9?usp=sharing
                    </a>
                </div>

                <div className="bg-stone-900 p-4 rounded border border-stone-800">
                    <strong className="text-red-400 block mb-2 flex items-center gap-2"><Youtube size={18}/> Video Showcase</strong>
                    <p className="text-sm text-stone-400 mb-2">Victory Cutscenes & Full Skin Showcase:</p>
                    <a href="https://youtu.be/FsmaAKV9xko?si=7ZbeE3q_KXSk1nmX" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all text-sm">
                        https://youtu.be/FsmaAKV9xko?si=7ZbeE3q_KXSk1nmX
                    </a>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-wwm-green border-b border-stone-700 pb-2 mt-8">📝 Notes</h1>
            <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li><strong>Release Dates:</strong> These follow the CN timeline. The Global release schedule might be faster or slower.</li>
                <li>Some free cosmetic items, Skill effects, and weapon appearances were skipped due to the sheer volume.</li>
            </ul>
        </div>
    );

    const renderNoGuideSelected = () => {
        const guide = GUIDES.find(g => g.id === activeGuide);
        switch (guide?.id) {
            case 'PART2': return renderPart2();
            case 'PART3': return renderPart3();
            case 'PART4': return renderPart4();
            case 'PART5': return renderPart5();
            default: return <div>Error: Guide not found</div>;
        }
    }

    return renderNoGuideSelected();
  };

  return (
        <div className="flex flex-col lg:flex-row h-full w-full bg-stone-950 overflow-hidden relative">
             {/* Mobile Menu Toggle */}
             <div className="lg:hidden p-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between shrink-0">
                <span className="font-bold text-wwm-green">Guides</span>
                <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-stone-400">
                    <Menu />
                </button>
             </div>
    
             {/* Sidebar (Desktop) */}
             <div className="hidden lg:block h-full">
                {renderSidebar()}
             </div>
    
             {/* Sidebar (Mobile Overlay) */}
             {showMobileMenu && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    <div className="w-64 h-full bg-stone-950 border-r border-stone-800 shadow-2xl animate-in slide-in-from-left duration-200">
                        {renderSidebar()}
                    </div>
                    <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)} />
                </div>
             )}
    
             {/* Main Content */}
             <div className="flex-1 overflow-y-auto bg-stone-900 relative">
                {renderContent()}
             </div>
        </div>
    );
};
