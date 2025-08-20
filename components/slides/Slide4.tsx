
import React from 'react';

const TimelineItem: React.FC<{ number: number; title: string; description: string; delay: number }> = ({ number, title, description, delay }) => (
    <div className="flex items-center w-full mb-8 animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
        <div className="flex-shrink-0 z-10 w-12 h-12 md:w-16 md:h-16 bg-slate-700 text-cyan-400 font-black text-xl md:text-2xl rounded-full inline-flex items-center justify-center shadow-lg">
            {number}
        </div>
        <div className="flex-grow pl-4 md:pl-6">
            <h2 className="font-bold title-font text-lg sm:text-xl text-white mb-1 tracking-wider">{title}</h2>
            <p className="leading-relaxed text-slate-300 text-sm sm:text-base">{description}</p>
        </div>
    </div>
);

const Slide4: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in overflow-y-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 text-center animate-slide-down">La Corte Constitucional: Pionera en la Definición</h1>
            <div className="relative max-w-2xl">
                 <div className="absolute left-6 md:left-8 top-0 h-full w-1 bg-slate-700 rounded" />
                 <TimelineItem 
                    number={1}
                    title="1992: Sentencia T-414"
                    description="La Corte comienza a definir el alcance del Habeas Data, reconociendo la necesidad de control directo sobre la información."
                    delay={200}
                 />
                 <TimelineItem 
                    number={2}
                    title="Mediados de los 90: Casos Emblemáticos"
                    description="Se establecen precedentes que van desvinculando el Habeas Data de su dependencia exclusiva del buen nombre."
                    delay={500}
                 />
                 <TimelineItem 
                    number={3}
                    title="Finales de los 90: Principio de Autonomía"
                    description="La jurisprudencia empieza a sentar las bases para el reconocimiento del Habeas Data como un derecho independiente."
                    delay={800}
                 />
            </div>
        </div>
    );
};

export default Slide4;
