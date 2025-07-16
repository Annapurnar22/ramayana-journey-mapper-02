import { Link } from "react-router-dom";
import { MessageCircle, Settings, Car, UserCheck } from "lucide-react";
export const HeroSection = () => {
  return <>
      {/* Main Hero Section */}
      <section className="relative h-[600px] min-h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center" style={{
      backgroundImage: "url('/lovable-uploads/d1ed6b19-c923-4841-a86f-b3f0008ddd42.png')"
    }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="z-10 relative px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-5 animate-fade-in">
            Footsteps of Rama
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white mb-8 animate-fade-in drop-shadow">
            We aim to inspire a newfound appreciation for India's rich cultural legacy among the contemporary audiences, through immersive storytelling experiences combining art, culture & heritage, travel & history.
          </p>
          <div className="flex justify-center gap-5 animate-fade-in flex-wrap mb-8">
            <Link to="/immersive" className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-7 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-orange-700 shadow-lg transition hover-scale text-lg">Experience the Epic</Link>
            <Link to="/map" className="bg-orange-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-orange-700 shadow-lg transition hover-scale text-lg">The Ramayana Trail</Link>
            <Link to="/trip-planner" className="bg-sky-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-sky-700 shadow-lg transition hover-scale text-lg">Plan your Travel</Link>
          </div>
          
          <p className="text-sm text-white font-medium">Learn. Travel. Experience. <span className="inline-block ml-1 animate-pulse text-orange-300">✨</span></p>
          
          {/* Feature Cards Section */}
          

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link to="/culture-arts" className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition text-orange-800 font-medium">
              Culture & Arts
            </Link>
            <Link to="/resources" className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition text-orange-800 font-medium">Explore the Epic</Link>
            <Link to="/immersive" className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition text-orange-800 font-medium">Immersive View</Link>
          </div>
        </div>
      </section>

      {/* What is the Ramayana Section */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What is the Ramayana?</h2>
              <p className="text-lg text-purple-600 mb-4 font-medium">The epic tale of Rama and Sita</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ramayana is one of the two major Sanskrit epics of ancient India and an important text of Hinduism, the other being the Mahabharata. The epic is ascribed to Maharishi Valmiki, which narrates the life of Rama, a legendary prince of Ayodhya city in the kingdom of Kosala, in North India. The epic follows his fourteen-year exile to the forest urged by his father King Dasharatha, on the request of Rama's stepmother Kaikeyi; his travels across forests in the Indian subcontinent with his wife Sita and brother Lakshmana, the kidnapping of Sita by Ravana – the king of Lanka, that resulted in war; and Rama's eventual return to Ayodhya to be crowned king amidst jubilation and celebration. Rama is considered to be an ideal prince and an embodiment of all virtues and his wife Sita the epitome of conjugal love and fidelity.
              </p>
              <div className="flex gap-4">
                <Link to="/map" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 shadow-lg transition flex items-center gap-2">
                  🗺️ Explore Interactive Map
                </Link>
                <Link to="/immersive" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 shadow-lg transition">
                  Experience Immersive View
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/90d612b4-5cda-477d-8076-7b6b2a8e2cd6.png" alt="Ramayana Characters" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </>;
};