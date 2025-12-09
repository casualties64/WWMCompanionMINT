
import React from 'react';
import { Swords, Play } from 'lucide-react';

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

export const PvpTab: React.FC = () => {
  return (
    <div className="w-full h-full bg-stone-950 overflow-y-auto p-4 lg:p-8 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto space-y-10 pb-24">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-900/50 p-6 rounded-2xl border border-stone-800 shadow-xl flex items-center gap-5">
            <div className="p-4 bg-red-900/20 rounded-full border border-red-900/50 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <Swords size={36} />
            </div>
            <div>
                <h1 className="text-2xl md:text-3xl font-black text-white tracking-wider uppercase italic">Combat Academy</h1>
                <p className="text-stone-400 font-medium text-sm md:text-base">Master the art of PvP with these curated video guides.</p>
            </div>
        </div>

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
    </div>
  );
};
