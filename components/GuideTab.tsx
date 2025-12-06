
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
                {/* Truncated rest of Part 1 here for brevity as it is duplicate content now found in Part 5 as well */}
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
            <h1 className="text-2xl font-bold text-wwm-green">Part 3: Advanced Weapon Reforging (Weapon Skins)</h1>
            <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700 text-center">
                <p className="text-lg">This section is currently being updated with the latest Weapon Reforging mechanics from the CN server.</p>
                <p className="mt-4 text-sm text-stone-400">Please check back later or visit the main community guides.</p>
            </div>
        </div>
    );

    const renderPart4 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            <h1 className="text-2xl font-bold text-wwm-green">Part 4: Merchant Trading Guide</h1>
            <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700 text-center">
                <p className="text-lg">Learn how to make serious money through the merchant system.</p>
                <p className="mt-4 text-sm text-stone-400">Detailed trade routes and commodity price charts coming soon.</p>
            </div>
        </div>
    );

    const renderPart5 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            {/* Header / Intro */}
            <h1 className="text-2xl font-bold text-wwm-green">[Note: This guide is constantly being updated. Please check back often!]</h1>
            <p><strong className="text-white">[UPDATE] GUIDE SPLIT INTO 5 PARTS!</strong></p>
            <p>Due to Reddit's post length limit, I cannot add more updates here. I have split the guide into Four parts to cover everything in detail.</p>
            <p className="text-stone-500/50">---</p>
            
            {/* Navigation Index */}
            <h1 className="text-2xl font-bold mt-6 mb-4 text-stone-200">⚠️ NAVIGATION INDEX</h1>
            <div className="space-y-3">
                <p className="flex items-start gap-2">
                    <span>👉</span> 
                    <button onClick={() => setActiveGuide('PART1')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                        [CLICK HERE FOR PART1: F2P & Spending Guide]
                    </button>
                </p>
                <p className="flex items-start gap-2">
                    <span>👉</span> 
                    <button onClick={() => setActiveGuide('PART2')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                        [CLICK HERE FOR PART 2: Gameplay, UI & "No-Grind" Routine]
                    </button>
                </p>
                <p className="flex items-start gap-2">
                    <span>👉</span> 
                    <button onClick={() => setActiveGuide('PART3')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                        [CLICK HERE FOR PART 3: Advanced Weapon Reforging]
                    </button>
                </p>
                <p className="flex items-start gap-2">
                    <span>👉</span> 
                    <button onClick={() => setActiveGuide('PART4')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                        [CLICK HERE FOR PART 4: Merchant Trading Guide]
                    </button>
                </p>
                <p className="flex items-start gap-2">
                    <span>👉</span> 
                    <button onClick={() => setActiveGuide('PART5')} className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                        [CLICK HERE FOR PART 5: Cosmetics Roadmap]
                    </button>
                </p>
                 <p className="flex items-start gap-2">
                    <span>👉</span> 
                    <a href="https://www.reddit.com/r/wherewindsmeet_/comments/1p6xsyn/psa_if_you_cant_trigger_a_new_encounterquest_read/" target="_blank" rel="noopener noreferrer" className="text-left font-bold text-wwm-green hover:text-emerald-400 hover:underline">
                        [PSA] If you can't trigger a new Encounter/Quest, read this
                    </a>
                </p>
            </div>
            
            <p className="text-stone-500/50 pt-4 border-t border-stone-800 mt-4">---</p>
            <p><em>(Original Post Starts Below)</em></p>

            {/* Section 1 */}
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">Intro & Reality Check</h1>
            <p>Hi everyone! I play on the CN server. English isn't my first language, so I'm using AI to help translate.</p>
            <p className="mt-2">I have spent some time putting this guide together to cover as many items and mechanics as possible. <strong className="text-white">If you have any questions, please leave a comment.</strong></p>
            
            <div className="bg-stone-900/50 p-4 rounded border border-stone-800 my-4">
                <p className="mb-2"><strong className="text-wwm-green">⚠️ Important Expectation Management:</strong></p>
                <p className="mb-2">I want to be very clear: <strong className="text-white">This game is NOT predatory Pay-to-Win</strong> (spending is entirely restricted to cosmetics).</p>
                <p className="mb-2"><strong className="text-white">HOWEVER, it is undeniably still an MMO.</strong> Even though it looks like a single-player action game, the payment structure is "bloated".</p>
                <p><strong className="text-white">For F2P Players:</strong> You can experience 100% of the continuous Main Story and Map updates without spending a single penny.</p>
            </div>

            {/* Section 1: Store */}
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">1. The Store & The "50% Off" Trick</h1>
            <div className="flex justify-center my-4">
                <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3jrsf41id62g1.png?width=117&format=png&auto=webp&s=a12fe9cabc2a31a0eda46793454a3a03c4f424a2" alt="Coupons" className="rounded border border-stone-700" />
            </div>
            <p>For cosmetics sold directly in the store, never pay full price.</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-white">The Coupons:</strong> Look like golden rectangular tickets. Each gives <strong className="text-emerald-400">10% off</strong>.</li>
                <li><strong className="text-white">Stacking:</strong> Stack up to 5 coupons for <strong className="text-emerald-400">50% off</strong>.</li>
                <li><strong className="text-white">Sources:</strong> Daily Sign-ins (every ~18 days) and Resonance Shop (1/month).</li>
            </ul>

            {/* Section 2: Echo Jade */}
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">2. Echo Jade (Free Currency)</h1>
            <div className="flex justify-center my-4">
                <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3ug3fvb9d62g1.png?width=79&format=png&auto=webp&s=46b5e5fc2f2bada720cd635d993e2fc490770cea" alt="Echo Jade" className="rounded border border-stone-700" />
            </div>
            <p>Jade is green currency from gameplay. <strong>NOT purchasable with real money</strong>.</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Re-customization:</strong> 200 Jade.</li>
                <li><strong>Skill Books:</strong> ~5000 Jade total. Prioritize 'Yi Shui Ge'.</li>
                <li><strong>Gacha Exchange:</strong> 160 Jade = 1 Standard Pull. 200 Jade = 1 Limited Pull (Limit 2/week).</li>
            </ul>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
                 <div className="text-center">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-pfkgj5fwg62g1.png?width=195&format=png&auto=webp&s=e1678b401b84d8618e19cb360dd5026f13305e6c" className="rounded border border-stone-700 mx-auto" />
                    <span className="text-xs text-stone-500">Customize Ticket</span>
                 </div>
                 <div className="text-center">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-f03sctzej62g1.png?width=225&format=png&auto=webp&s=813fd3a212a8396c23a3fc907a1f2ea1df1c39fc" className="rounded border border-stone-700 mx-auto" />
                    <span className="text-xs text-stone-500">Skill Book</span>
                 </div>
            </div>
            <p className="bg-stone-800 p-2 rounded border border-stone-700 text-sm">
                ⚠️ <strong>Critical Tip:</strong> Save for "Limited Echo Jade Banners". Usually requires ~24k Jade for a guaranteed outfit. Unlock this banner by pulling 200 times on standard first (lifetime count).
            </p>

            {/* Section 3: Celestial Echo */}
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">3. Celestial Echo: F2P Strategy</h1>
            <p>Limited banner (Cash/Special Echo). Hard pity at 150 pulls. <strong>F2P can grind this.</strong></p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Weekly:</strong> Buy 2 pulls (200 Jade each) + 1 pull (Season Shop).</li>
                <li><strong>Monthly:</strong> Exchange for 2 pulls in shop.</li>
                <li><strong>Result:</strong> ~30 free pulls/month. 4-6 months to hit pity.</li>
            </ul>
            <p className="mt-2"><strong>Regret Mechanic:</strong> If you get the outfit but don't like it, dismantle it (while unused in bag) for "Harmonic Cores" to buy the weapon skin instead.</p>

            {/* Section 4: Advanced Gacha */}
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">4. Advanced Gacha Mechanics</h1>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Hidden Pity:</strong> After 131 pulls, if you get a gold drop that isn't the outfit, you gain 20% wish value. At 100%, next gold is guaranteed outfit.</li>
                <li><strong>Duplicate Recycling:</strong> Duplicate purples convert to tokens for Premium Dye, Reroll Stones, or SFX.</li>
            </ul>

            {/* Section 5: Dye System */}
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">5. The Dye System</h1>
            <div className="flex gap-4 my-4">
                <div className="text-center">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3ido9dqdf62g1.png?width=101&format=png&auto=webp&s=bf12958d70e3e99061c59158c609049bde3bb5e8" className="rounded border border-stone-700 mx-auto" />
                    <span className="text-xs text-stone-500">Basic Dye</span>
                </div>
                <div className="text-center">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-hkr78ia0f62g1.png?width=105&format=png&auto=webp&s=7e8b151e1914d3afcb33b1b4b2e6982cc4e946e1" className="rounded border border-stone-700 mx-auto" />
                    <span className="text-xs text-stone-500">Premium Dye</span>
                </div>
            </div>
            <p><strong>Basic Dye (Wooden Box):</strong> Low saturation. Farm via Dihua Shop (Standard Gacha Shop), Battle Pass, Social Shops. Easy to get.</p>
            <p><strong>Premium Dye (Green Box):</strong> High saturation (Neon/Deep Black). Farm via Dihua Shop (10/week) and Stardust Shop. Harder to get.</p>
            <p className="mt-2 text-red-400 font-bold">⚠️ WARNING: Do not buy "Pre-Dyed" bundles with Pearls! Buy the base outfit and use your free farmed dyes.</p>
            
            <h3 className="font-bold text-white mt-4">Hair Dyes</h3>
            <p><strong>Basic (Beige Pot):</strong> Natural colors. Farm via Dihua Shop.</p>
            <p><strong>Premium (Blue Pot):</strong> White/Silver hair. Very expensive to craft. <strong>Tip:</strong> Wait for Limited Paid Banners that sell pre-dyed hair for cheaper exchange rates.</p>

            {/* Section 6: Future Events */}
            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">6. Future Events (CN Insights)</h1>
            <p><strong>Step-Up Spin:</strong> 4 layers. Layer 1-3 costs ~5-6k Pearls. Layer 4 is expensive. Save Monthly Pass pearls for this.</p>
            <p><strong>Turtle Matching:</strong> Mini-game for cosmetics. Don't spend points immediately; wait until you finish all draws as items can drop directly.</p>

            <h1 className="text-2xl font-bold mt-8 mb-4 text-wwm-green border-b border-stone-700 pb-2">Conclusion</h1>
            <p>Understanding the economy early helps you decide if this game fits your budget. Whether you grind hard or play casually, I hope this transparency helps.</p>
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
