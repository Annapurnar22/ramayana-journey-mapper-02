
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const ImmersiveHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-orange-100 via-orange-50 to-sky-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/9cae8878-a498-4c3b-8468-a87567e36796.png')] bg-center bg-cover opacity-30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-orange-900 mb-6 animate-fade-in">
          The Ramayana
        </h1>
        <p className="text-xl md:text-2xl text-orange-800 mb-8 animate-fade-in font-medium">
          Presenting Footsteps of Rama, a captivating exploration of the great epic
        </p>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-12 animate-fade-in">
          We aim to inspire a newfound appreciation for India's rich cultural legacy among the contemporary audiences, through immersive storytelling experiences combining art, culture & heritage, travel & history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button 
            onClick={() => document.getElementById('journey-start')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 shadow-lg transition hover-scale text-lg flex items-center gap-2 justify-center"
          >
            Begin the Journey <ArrowRight size={20} />
          </button>
          <Link 
            to="/map" 
            className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-sky-700 shadow-lg transition hover-scale text-lg flex items-center gap-2 justify-center"
          >
            <MapPin size={20} /> View Interactive Map
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveHero;
