
import React from 'react';
import { ShieldIcon } from '../IconComponents';

const Slide7: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-8 animate-fade-in">
            <h2 className="text-2xl text-cyan-400 font-semibold mb-2 animate-slide-down">CAPÍTULO 5</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-10 text-center animate-slide-down" style={{animationDelay: '200ms'}}>Importancia en la Era Digital</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
                <div className="flex justify-center items-center animate-zoom-in" style={{animationDelay: '400ms'}}>
                    <div className="relative w-80 h-80">
                         <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-ping"></div>
                         <div className="absolute inset-8 border-2 border-cyan-500/50 rounded-full animate-ping delay-200"></div>
                         <div className="absolute inset-0 bg-slate-800 rounded-full flex items-center justify-center">
                            <ShieldIcon className="w-32 h-32 text-cyan-400" />
                         </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="animate-fade-in-up" style={{animationDelay: '600ms'}}>
                        <h3 className="text-2xl font-bold text-white mb-2">Tus Datos en el Ecosistema Digital</h3>
                        <p className="text-slate-300">Cada transacción, interacción en redes sociales y uso de apps genera una huella de datos que circula a una velocidad sin precedentes.</p>
                    </div>
                    <div className="animate-fade-in-up" style={{animationDelay: '800ms'}}>
                        <h3 className="text-2xl font-bold text-white mb-2">Riesgos y Amenazas</h3>
                        <p className="text-slate-300">Esta vasta circulación conlleva riesgos como el fraude, el uso indebido de información y la vulneración de la privacidad.</p>
                    </div>
                     <div className="animate-fade-in-up" style={{animationDelay: '1000ms'}}>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">El Habeas Data como Salvaguarda</h3>
                        <p className="text-slate-300">Es la herramienta esencial para asegurar el control, la actualización y la protección de tu información. Es la garantía de que, en un mundo hiperconectado, tus datos siguen siendo tuyos.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide7;
