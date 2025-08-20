
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
import { PlayIcon, PauseIcon, PreviousIcon, NextIcon } from './components/IconComponents';


const TOTAL_SLIDES = 9;

const App: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Start at 0 for initial screen
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleNextSlide = useCallback(() => {
        setCurrentSlide(prev => {
            if (prev < TOTAL_SLIDES) {
                return prev + 1;
            }
            setIsPlaying(false); // Stop playing at the end
            return prev;
        });
    }, []);
    
    const handlePreviousSlide = useCallback(() => {
        setCurrentSlide(prev => {
            if (prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    }, []);

    const togglePlayPause = useCallback(() => {
        setIsPlaying(prev => {
            const newIsPlaying = !prev;
            if (audioRef.current) {
                if (newIsPlaying) {
                    audioRef.current.play().catch(error => console.error("Audio play failed:", error));
                } else {
                    audioRef.current.pause();
                }
            }
            return newIsPlaying;
        });
    }, []);


    useEffect(() => {
        if (currentSlide > 0 && currentSlide <= TOTAL_SLIDES) {
            if (audioRef.current) {
                audioRef.current.src = `/audio/${currentSlide}.mp3`;
                if (isPlaying) {
                    audioRef.current.play().catch(error => console.error("Audio play failed:", error));
                }
            }
        }
    }, [currentSlide, isPlaying]);

    const startPresentation = () => {
        setCurrentSlide(1);
        setIsPlaying(true);
    };

    const slides = [
        <div />, // Placeholder for initial screen
        <Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />, 
        <Slide6 />, <Slide7 />, <Slide8 />, <Slide9 />
    ];
    
    if (currentSlide === 0) {
        return (
            <main className="flex h-screen w-full flex-col items-center justify-center bg-slate-900 text-white p-4 sm:p-8 overflow-hidden">
                <div className="text-center animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-black text-cyan-400 mb-4">Habeas Data</h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
                       Una experiencia web inmersiva y dinámica sobre el derecho fundamental a la protección de datos.
                    </p>
                    <button 
                        onClick={startPresentation}
                        className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-full shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        Comenzar
                    </button>

                    <p className="font-bold mt-5">
                    Por Mateo Vergara, David Leal y Jhonatan Mendez
                    </p>

                    <p className="text-xs text-slate-500 mt-8">
                        Nota: Esta experiencia usa audio. Asegúrate de tenerlo activado. Puedes controlar la presentación con los botones de navegación.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <>
            <main className="relative h-screen w-full flex items-center justify-center bg-slate-900 text-white p-4 sm:p-6 md:p-8 overflow-hidden">
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

            <div className="fixed bottom-0 left-0 right-0 bg-slate-900/50 backdrop-blur-sm z-50">
                <div className="max-w-md mx-auto p-4 flex justify-between items-center">
                    <button
                        onClick={handlePreviousSlide}
                        disabled={currentSlide <= 1}
                        className="text-white p-2 rounded-full hover:bg-slate-700 transition-colors disabled:text-slate-600 disabled:cursor-not-allowed"
                        aria-label="Previous Slide"
                    >
                        <PreviousIcon className="w-8 h-8" />
                    </button>
                    <button
                        onClick={togglePlayPause}
                        className="text-cyan-400 p-2 rounded-full hover:bg-slate-700 transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? <PauseIcon className="w-12 h-12" /> : <PlayIcon className="w-12 h-12" />}
                    </button>
                    <button
                        onClick={handleNextSlide}
                        disabled={currentSlide >= TOTAL_SLIDES}
                        className="text-white p-2 rounded-full hover:bg-slate-700 transition-colors disabled:text-slate-600 disabled:cursor-not-allowed"
                        aria-label="Next Slide"
                    >
                        <NextIcon className="w-8 h-8" />
                    </button>
                </div>
            </div>

            <audio ref={audioRef} onEnded={() => isPlaying && handleNextSlide()}>
                Your browser does not support the audio element.
            </audio>
        </>
    );
};

export default App;
