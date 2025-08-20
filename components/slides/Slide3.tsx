import React from 'react';

const Slide3: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in">
            <div className="text-center">
                 <h2 className="text-2xl text-cyan-400 font-semibold mb-2 animate-slide-down">CAPÍTULO 2</h2>
                 <h1 className="text-4xl md:text-5xl font-black text-white mb-10 animate-slide-down" style={{animationDelay: '200ms'}}>Orígenes y Evolución Constitucional</h1>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 md:p-8 rounded-xl max-w-4xl w-full shadow-2xl animate-zoom-in" style={{animationDelay: '400ms'}}>
                 <h3 className="text-3xl font-bold text-white mb-4">Un Reconocimiento Fundamental</h3>
                 <p className="text-slate-300 text-lg mb-6">El Habeas Data tiene sus raíces en la <span className="text-cyan-400 font-semibold">Constitución Política de Colombia de 1991.</span></p>
                 <div className="border-l-4 border-cyan-500 pl-4 md:pl-6 py-2 bg-slate-900/50 rounded-r-lg">
                    <p className="text-slate-200 italic text-lg leading-relaxed">
                        <strong className="text-cyan-400 not-italic">Artículo 15:</strong> "Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas."
                    </p>
                 </div>
            </div>
             <p className="text-slate-400 mt-10 text-center max-w-3xl text-lg animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                Inicialmente, fue visto como una herramienta accesoria, pero su importancia crecería hasta convertirlo en una garantía autónoma.
            </p>
        </div>
    );
};

export default Slide3;