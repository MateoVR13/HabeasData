
import React from 'react';
import { ShieldIcon, ChartBarIcon, UserGroupIcon, BalanceScaleIcon } from '../IconComponents';

const ConclusionCard: React.FC<{ icon: React.ReactNode; title: string; text: string, delay: number }> = ({ icon, title, text, delay }) => (
    <div className="bg-slate-800 p-6 rounded-lg text-center animate-fade-in-up" style={{ animationDelay: `${delay}ms`}}>
        <div className="text-cyan-400 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center bg-slate-700 rounded-full">
            {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm md:text-base">{text}</p>
    </div>
);

const Slide9: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in overflow-y-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-10 text-center animate-slide-down">Conclusiones y Próximos Pasos</h1>
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ConclusionCard 
                    icon={<ShieldIcon className="w-8 h-8" />}
                    title="Derecho Esencial"
                    text="Un derecho fundamental autónomo indispensable para la dignidad y la libertad en la era digital."
                    delay={200}
                />
                 <ConclusionCard 
                    icon={<ChartBarIcon className="w-8 h-8" />}
                    title="Evolución Continua"
                    text="Su alcance sigue expandiéndose con los avances tecnológicos y jurisprudenciales."
                    delay={400}
                />
                 <ConclusionCard 
                    icon={<UserGroupIcon className="w-8 h-8" />}
                    title="Control Ciudadano"
                    text="Permite mantener el control sobre la información personal y protegerse de usos indebidos."
                    delay={600}
                />
                 <ConclusionCard 
                    icon={<BalanceScaleIcon className="w-8 h-8" />}
                    title="Relevancia Jurídica"
                    text="Herramienta clave para abogados y profesionales en la gestión y cumplimiento de datos."
                    delay={800}
                />
            </div>
        </div>
    );
};

export default Slide9;
