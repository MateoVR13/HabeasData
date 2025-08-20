import React from 'react';

const LawCard: React.FC<{ law: string; title: string; description: string; principles: string; delay: number; }> = ({ law, title, description, principles, delay }) => (
    <div className="bg-slate-800 rounded-lg p-6 md:p-8 shadow-xl border-t-4 border-cyan-500 animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
        <h3 className="text-xl font-bold text-cyan-400 mb-2">{law}</h3>
        <h4 className="text-2xl font-bold text-white mb-3">{title}</h4>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="bg-slate-700/50 p-4 rounded-md">
            <p className="text-sm font-semibold text-slate-200">
                <strong className="text-cyan-400">Principios:</strong> {principles}
            </p>
        </div>
    </div>
);

const Slide6: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in">
            <h2 className="text-2xl text-cyan-400 font-semibold mb-2 animate-slide-down">CAPÍTULO 4</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-12 text-center animate-slide-down" style={{animationDelay: '200ms'}}>Marco Legal Vigente en Colombia</h1>
            <div className="max-w-5xl w-full space-y-8">
                <LawCard
                    law="Ley 1266 de 2008"
                    title="Habeas Data Financiero y Crediticio"
                    description="Regula el manejo de información contenida en bases de datos financieras, crediticias, comerciales y de servicios."
                    principles="Finalidad, veracidad, libertad, transparencia, confidencialidad."
                    delay={400}
                />
                <LawCard
                    law="Ley 1581 de 2012"
                    title="Régimen General de Protección de Datos Personales"
                    description="Aplica a todas las bases de datos personales, públicas o privadas."
                    principles="Legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad, confidencialidad."
                    delay={700}
                />
            </div>
        </div>
    );
};

export default Slide6;