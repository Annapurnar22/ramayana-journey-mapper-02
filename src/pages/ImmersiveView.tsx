
import React from 'react';
import ImmersiveHero from '@/components/ImmersiveHero';
import JourneySteps from '@/components/JourneySteps';
import ImmersiveCallToAction from '@/components/ImmersiveCallToAction';
import RamaQualities from '@/components/RamaQualities';
import { Link } from 'react-router-dom';

const ImmersiveView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-sky-50">
      <ImmersiveHero />
      <JourneySteps />
      <RamaQualities />
      
      {/* Explore Culture & Arts Section */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Culture & Arts</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Discover the rich artistic heritage and cultural expressions inspired by the Ramayana across India and beyond.
          </p>
          <Link 
            to="/culture-arts"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 shadow-lg transition inline-block"
          >
            Explore Culture & Arts →
          </Link>
        </div>
      </section>
      
      <ImmersiveCallToAction />
    </div>
  );
};

export default ImmersiveView;
