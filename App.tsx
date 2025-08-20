import React, { useState, useEffect, useRef, useCallback } from 'react';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import { PreviousIcon, NextIcon, MuteIcon, UnmuteIcon } from './components/IconComponents';

const TOTAL_SLIDES = 9;

const App: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Start at 0 for initial screen
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleNextSlide = useCallback(() => {
        setCurrentSlide(prev => {
            if (prev < TOTAL_SLIDES) {
                return prev + 1;
            }
            return prev;
        });
    }, []);

    const handlePreviousSlide = useCallback(() => {
        setCurrentSlide(prev => Math.max(1, prev - 1));
    }, []);

    const toggleMute = useCallback(() => {
        setIsMuted(prev => !prev);
    }, []);
    
    useEffect(() => {
        if (isPlaying && currentSlide > 0 && currentSlide <= TOTAL_SLIDES) {
            if (audioRef.current) {
                audioRef.current.src = `/audio/${currentSlide}.mp3`;
                audioRef.current.play().catch(error => console.error("Audio play failed:", error));
            }
        } else if (audioRef.current) {
            audioRef.current.pause();
        }
    }, [currentSlide, isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const startPresentation = () => {
        setIsPlaying(true);
        setCurrentSlide(1);
    };

    const slides = [
        <div />, // Placeholder for initial screen
        <Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />, 
        <Slide6 />, <Slide7 />, <Slide8 />, <Slide9 />
    ];
    
    if (currentSlide === 0) {
        return (
            <main className="flex h-screen w-full flex-col items-center justify-center bg-slate-900 text-white p-4 overflow-hidden">
                <div className="text-center animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-black text-cyan-400 mb-4">Habeas Data</h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
                        Una experiencia web inmersiva y dinámica sobre el derecho fundamental a la protección de datos.
                    </p>
                    <button 
                        onClick={startPresentation}
                        className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-full shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        Comenzar presentación
                    </button>

                    <p className="text-xs text-slate-500 mt-8">
                        Nota: Esta experiencia utiliza audio. Asegúrate de tener el sonido activado. La presentación avanzará automáticamente.
                    </p>

                    <p className="text-xlg md:text-xl text-slate-300 max-w-3xl animate-slide-up mt-5" style={{ animationDelay: '600ms' }}>
                    Mateo Vergara, David Leal & Jhonatan Mendez
                    </p>

                </div>
            </main>
        );
    }

    return (
        <>
            <main className="relative h-screen w-full flex items-center justify-center bg-slate-900 text-white p-8 overflow-hidden">
                {slides.map((slide, index) => (
                     index > 0 && (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        >
                           {slide}
                        </div>
                     )
                ))}
            </main>

            {currentSlide > 0 && (
                 <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
                    <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm p-2 rounded-full shadow-2xl border border-slate-700">
                        <button
                            onClick={handlePreviousSlide}
                            disabled={currentSlide === 1}
                            aria-label="Previous Slide"
                            className="text-white p-3 rounded-full hover:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors"
                        >
                            <PreviousIcon className="w-6 h-6" />
                        </button>
                         <button
                            onClick={toggleMute}
                            aria-label={isMuted ? "Unmute" : "Mute"}
                            className="text-white p-3 rounded-full hover:bg-slate-700 transition-colors"
                        >
                            {isMuted ? <MuteIcon className="w-6 h-6" /> : <UnmuteIcon className="w-6 h-6" />}
                        </button>
                        <button
                            onClick={handleNextSlide}
                            disabled={currentSlide === TOTAL_SLIDES}
                            aria-label="Next Slide"
                            className="text-white p-3 rounded-full hover:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors"
                        >
                            <NextIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}

            <audio ref={audioRef} onEnded={handleNextSlide}>
                Your browser does not support the audio element.
            </audio>
        </>
    );
};

export default App;
