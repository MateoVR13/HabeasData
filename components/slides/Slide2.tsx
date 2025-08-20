import React from 'react';
import { AccessIcon, RectifyIcon, DeleteIcon, OpposeIcon } from '../IconComponents';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; text: string; delay: number }> = ({ icon, title, text, delay }) => (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
        <div className="flex items-center mb-3">
            <div className="p-2 bg-cyan-500/20 rounded-md mr-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
        </div>
        <p className="text-slate-300">{text}</p>
    </div>
);

const Slide2: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-12 text-center animate-slide-down">¿Qué es el Habeas Data?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full">
                <InfoCard 
                    icon={<AccessIcon className="h-8 w-8 text-cyan-400" />}
                    title="Acceso"
                    text="Derecho a conocer la información personal que ha sido recopilada, procesada o almacenada."
                    delay={200}
                />
                <InfoCard 
                    icon={<RectifyIcon className="h-8 w-8 text-cyan-400" />}
                    title="Rectificación"
                    text="Capacidad de solicitar la corrección de datos inexactos, incompletos o erróneos."
                    delay={400}
                />
                <InfoCard 
                    icon={<DeleteIcon className="h-8 w-8 text-cyan-400" />}
                    title="Eliminación"
                    text="Facultad de pedir la supresión de datos excesivos, irrelevantes o obtenidos ilegalmente."
                    delay={600}
                />
                <InfoCard 
                    icon={<OpposeIcon className="h-8 w-8 text-cyan-400" />}
                    title="Oposición"
                    text="Posibilidad de negarse al tratamiento de datos o a usos que pudieran vulnerar la privacidad."
                    delay={800}
                />
            </div>
            <p className="text-slate-400 mt-12 text-center max-w-4xl text-lg animate-fade-in" style={{ animationDelay: '1000ms' }}>
                Es un derecho fundamental que otorga el poder de controlar su información personal, garantizando su uso correcto.
            </p>
        </div>
    );
};

export default Slide2;