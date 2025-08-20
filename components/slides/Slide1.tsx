
import React from 'react';

const Slide1: React.FC = () => {
    return (
        <div className="h-full w-full flex items-center justify-center p-8 animate-fade-in">
            <div className="absolute inset-0 z-0 opacity-10">
                {/* Background decorative circuits */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit" patternUnits="userSpaceOnUse" width="100" height="100">
                            <path d="M 0 10 H 20 V 30 H 40 V 10 H 60 V 30 H 80 V 10 H 100 M 50 30 V 50 H 30 V 70 H 50 V 90 H 70 V 70 H 90 V 50 H 70 V 30" stroke="#06b6d4" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
            </div>
            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="animate-zoom-in mb-6">
                    <div className="p-6 bg-cyan-400/10 rounded-full border-2 border-cyan-400">
                       <svg className="w-24 h-24 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                       </svg>
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
                    Habeas Data
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-cyan-400 mb-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
                    Protección de la información personal en Colombia
                </h2>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl animate-slide-up" style={{ animationDelay: '600ms' }}>
                    Una mirada a la evolución y relevancia de un derecho fundamental en la era digital.
                </p>
            </div>
        </div>
    );
};

export default Slide1;
