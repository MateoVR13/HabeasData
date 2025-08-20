import React from 'react';

const Slide8: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center text-center p-4 md:p-8 animate-fade-in">
            <div className="relative">
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight animate-zoom-in" style={{animationDelay: '200ms'}}>
                    Tus datos son <br />
                    <span className="text-cyan-400">tuyos.</span>
                </h1>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-8 animate-fade-in-up" style={{animationDelay: '600ms'}}>
                Haz valer tu derecho al Habeas Data.
            </h2>
            <p className="text-slate-300 text-xl mt-6 animate-fade-in-up" style={{animationDelay: '900ms'}}>
                Infórmate, reclama y protege tu información personal.
            </p>
        </div>
    );
};

export default Slide8;