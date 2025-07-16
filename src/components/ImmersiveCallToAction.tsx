
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Scroll } from 'lucide-react';

const ImmersiveCallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-100 via-orange-50 to-sky-100">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-orange-900 mb-6">
          Continue Your Exploration
        </h2>
        <p className="text-xl text-orange-800 mb-12">
          Dive deeper into the epic with our interactive tools and resources
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link 
            to="/map" 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition hover-scale group"
          >
            <div className="text-sky-600 mb-4 group-hover:text-sky-700">
              <MapPin size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Interactive Map</h3>
            <p className="text-slate-600">Explore all locations with detailed historical context</p>
          </Link>
          <Link 
            to="/trip-planner" 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition hover-scale group"
          >
            <div className="text-orange-600 mb-4 group-hover:text-orange-700">
              <Clock size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Plan Your Pilgrimage</h3>
            <p className="text-slate-600">Create a personalized journey to these sacred sites</p>
          </Link>
          <Link 
            to="/resources" 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition hover-scale group"
          >
            <div className="text-green-600 mb-4 group-hover:text-green-700">
              <Scroll size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Study Resources</h3>
            <p className="text-slate-600">Access authentic texts, audio, and scholarly materials</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveCallToAction;
