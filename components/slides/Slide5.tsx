
import React from 'react';

const FeaturePoint: React.FC<{ title: string; text: string; delay: number }> = ({ title, text, delay }) => (
    <li className="flex items-start animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
        <svg className="flex-shrink-0 h-6 w-6 text-cyan-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p><strong className="font-semibold text-white">{title}:</strong> <span className="text-slate-300">{text}</span></p>
    </li>
);

const Slide5: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in overflow-y-auto">
            <h2 className="text-2xl text-cyan-400 font-semibold mb-2 animate-slide-down">CAPÍTULO 3</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-10 text-center animate-slide-down" style={{animationDelay: '200ms'}}>Reconocimiento como Derecho Autónomo</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl">
                <div className="animate-zoom-in" style={{animationDelay: '400ms'}}>
                    <img src="https://picsum.photos/seed/habeasdata/600/600" alt="Digital Rights" className="rounded-full shadow-2xl shadow-cyan-500/20 aspect-square object-cover" />
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '600ms'}}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Un Pilar de la Democracia Digital</h3>
                    <ul className="space-y-4 text-base md:text-lg">
                        <FeaturePoint 
                            title="Esencial"
                            text="Su protección se considera indispensable para la dignidad humana en el Estado social de derecho."
                            delay={800}
                        />
                         <FeaturePoint 
                            title="Primera Generación"
                            text="Se le equipara a otros derechos fundamentales, siendo de aplicación inmediata."
                            delay={1000}
                        />
                         <FeaturePoint 
                            title="Accionable"
                            text="Su vulneración permite el uso directo de la Acción de Tutela para su protección."
                            delay={1200}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slide5;
