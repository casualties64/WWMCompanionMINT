
import React from 'react';

export const GuideTab: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-auto p-4 md:p-8 pb-24">
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
                <header>
                    <h1 className="text-3xl font-bold text-wwm-green mb-2">Guides & Resources</h1>
                    <p className="text-stone-400">Curated community guides to help you master Where Winds Meet.</p>
                </header>

                <section>
                     <h2 className="text-xl font-bold text-stone-200 mb-4 flex items-center gap-2 border-l-4 border-wwm-green pl-3">
                        Arena Climbing
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                             <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/DMR8UN4gEaY"
                                    title="Climbing Guide 1"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                             </div>
                             <p className="text-sm text-stone-400 font-medium pl-1">Rank Climbing Strategy 1</p>
                        </div>
                        <div className="space-y-2">
                             <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/d9WyWI6RRL4"
                                    title="Climbing Guide 2"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                             </div>
                             <p className="text-sm text-stone-400 font-medium pl-1">Rank Climbing Strategy 2</p>
                        </div>
                         <div className="space-y-2">
                             <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/Xh_xT8AduX8"
                                    title="Climbing Guide 3"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                             </div>
                             <p className="text-sm text-stone-400 font-medium pl-1">Rank Climbing Strategy 3</p>
                        </div>
                        <div className="space-y-2">
                             <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/TCLlK21RVw0"
                                    title="Climbing Guide 4"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                             </div>
                             <p className="text-sm text-stone-400 font-medium pl-1">Rank Climbing Strategy 4</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
