
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return <>
      {/* Main Hero Section */}
      <section className="relative h-[600px] min-h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center" style={{
      backgroundImage: "url('/lovable-uploads/a65db0f4-8243-46ec-bad1-7bc36093a337.png')"
    }}>
        <div className="z-10 relative px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-2" style={{fontFamily: 'DM Serif Display, serif', color: '#4A9B9B'}}>
            Footsteps of
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-orange-600 mb-8" style={{fontFamily: 'League Spartan, sans-serif'}}>
            RAMA
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            We aim to inspire a newfound appreciation for India's rich cultural legacy among the contemporary audiences, through immersive storytelling experiences combining art, culture & heritage, travel & history.
          </p>
          
          <p className="text-sm text-gray-600 font-medium">Learn. Travel. Experience. <span className="inline-block ml-1 animate-pulse text-orange-300">✨</span></p>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-orange-700 mb-2">Let's begin our journey!!</h2>
            <p className="text-gray-600">Choose your path to explore the epic of Ramayana</p>
          </div>
          
          <div className="flex justify-center gap-5 animate-fade-in flex-wrap mb-8">
            <Link to="/immersive" className="bg-purple-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-purple-700 shadow-lg transition hover-scale text-lg">Experience the Epic</Link>
            <Link to="/map" className="bg-orange-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-orange-700 shadow-lg transition hover-scale text-lg">The Ramayana Trail</Link>
            <Link to="/trip-planner" className="bg-sky-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-sky-700 shadow-lg transition hover-scale text-lg">Plan your Travel</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/culture-arts" className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition text-orange-800 font-semibold text-center border border-orange-100">
              Culture & Arts
            </Link>
            <Link to="/immersive" className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition text-orange-800 font-semibold text-center border border-orange-100">
              Explore the Epic
            </Link>
            <Link to="/immersive" className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition text-orange-800 font-semibold text-center border border-orange-100">
              Immersive View
            </Link>
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
