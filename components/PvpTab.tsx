
import React, { useState } from 'react';
import { Swords, Youtube, GraduationCap } from 'lucide-react';

const VideoCard: React.FC<{ id: string; title?: string }> = ({ id, title }) => (
    <div className="bg-stone-900 rounded-xl overflow-hidden shadow-lg border border-stone-800 hover:border-wwm-green/30 transition-colors">
        <div className="aspect-video w-full bg-stone-950 relative">
            <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={title || "YouTube video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
        {title && <div className="p-3 text-sm font-medium text-stone-300 bg-stone-900/80">{title}</div>}
    </div>
);

export const PvpTab: React.FC = () => {
    const [subTab, setSubTab] = useState<'COMBOS' | 'VIDEOS'>('COMBOS');

    return (
        <div className="w-full h-full bg-stone-950 flex flex-col">
            
            {/* Sub-Tabs Header */}
            <div className="flex border-b border-stone-800 bg-stone-900 shrink-0">
                <button
                    onClick={() => setSubTab('COMBOS')}
                    className={`flex-1 py-3 px-2 md:px-4 text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 ${
                        subTab === 'COMBOS' 
                        ? 'text-wwm-green border-b-2 border-wwm-green bg-stone-800/50' 
                        : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'
                    }`}
                >
                    <Swords size={18} />
                    <span>Combos</span>
                </button>
                <button
                    onClick={() => setSubTab('VIDEOS')}
                    className={`flex-1 py-3 px-2 md:px-4 text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 ${
                        subTab === 'VIDEOS' 
                        ? 'text-wwm-green border-b-2 border-wwm-green bg-stone-800/50' 
                        : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'
                    }`}
                >
                    <Youtube size={18} />
                    <span>PVP Videos</span>
                </button>
            </div>

            <div className="flex-1 overflow-hidden relative">
                {subTab === 'COMBOS' ? (
                     <iframe 
                        src="https://www.wwmcombos.com/?hasVideo=true"
                        className="w-full h-full border-none"
                        title="WWM Combos"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                     />
                ) : (
                    <div className="h-full overflow-y-auto">
                        <div className="container mx-auto px-4 py-8 pb-32 max-w-7xl">
                            <div className="space-y-8 animate-in fade-in duration-300">
                                 <section>
                                    <div className="flex items-center gap-3 mb-4 pb-2 border-b border-stone-800">
                                        <GraduationCap className="text-wwm-green" size={24} />
                                        <h3 className="text-xl font-bold text-stone-100">PVP Basics</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <VideoCard id="4UFzw-Q39pQ" title="Combat Fundamentals" />
                                        <VideoCard id="DhhUnD1wmX4" title="Movement & Positioning" />
                                        <VideoCard id="TCLlK21RVw0" title="Countering & Parry Basics" />
                                    </div>
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-4 pb-2 border-b border-stone-800">
                                        <Swords className="text-red-500" size={24} />
                                        <h3 className="text-xl font-bold text-stone-100">Advanced Techniques</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <VideoCard id="DMR8UN4gEaY" title="Animation Cancelling Guide" />
                                        <VideoCard id="d9WyWI6RRL4" title="Advanced Combo Strings" />
                                        <VideoCard id="Xh_xT8Aduu8" title="High Level PVP Strategy" />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
