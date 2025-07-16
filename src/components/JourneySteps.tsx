
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Scroll } from 'lucide-react';

const journeySteps = [
  {
    id: 1,
    title: "Bala Kanda",
    subtitle: "Book of Youth",
    location: "Ayodhya",
    description: "The birth and early life of Rama in the golden city of Ayodhya. From his divine birth to King Dasharatha, his education under Sage Vishvamitra, and his marriage to Sita.",
    details: "This opening book establishes Rama's divine nature and his preparation for kingship. It includes his training in warfare, his encounter with Thataka, and the famous breaking of Shiva's bow to win Sita's hand in marriage.",
    image: "/lovable-uploads/7c82734e-5e41-45a1-9b1f-f69391bd1b9d.png",
    coords: [26.7994, 82.1946],
    learnMoreUrl: "https://sanskritdocuments.org/sites/valmikiramayan/baala/baala_contents.htm"
  },
  {
    id: 2,
    title: "Ayodhya Kanda", 
    subtitle: "Book of Ayodhya",
    location: "Chitrakoot",
    description: "The royal exile begins. Bound by dharma and his father's promise, Rama accepts fourteen years of forest exile, accompanied by Sita and Lakshmana.",
    details: "King Dasharatha's dilemma, Kaikeyi's demand, and Rama's graceful acceptance of exile. The trio departs for the forests, with their first significant stay in the peaceful hills of Chitrakoot among sages.",
    image: "/lovable-uploads/4abf2371-e85d-4583-bf07-4431d522a300.png",
    coords: [25.1960, 80.8733],
    learnMoreUrl: "https://sanskritdocuments.org/sites/valmikiramayan/ayodhya/ayodhya_contents.htm"
  },
  {
    id: 3,
    title: "Aranya Kanda",
    subtitle: "Book of Forest",
    location: "Panchavati (Nashik), Dandaka Forest",
    description: "Life in the deep forests of Dandakaranya. Here the trio encounters sages, demons, and faces the pivotal moment - Sita's abduction by Ravana.",
    details: "The forest years include meetings with great sages, the encounter with Surpanakha, the golden deer deception, and Ravana's treacherous abduction of Sita from their hermitage in Panchavati.",
    image: "/lovable-uploads/68fd50a4-6529-4581-baf2-cb5fb73dd123.png",
    coords: [20.0110, 73.7929],
    learnMoreUrl: "https://sanskritdocuments.org/sites/valmikiramayan/aranya/aranya_contents.htm"
  },
  {
    id: 4,
    title: "Kishkindha Kanda",
    subtitle: "The Empire of Holy Monkeys", 
    location: "Kishkindha",
    description: "In the vanara kingdom, Rama finds powerful allies. The devoted Hanuman and the vanara army under Sugriva join the quest to find Sita.",
    details: "The friendship with Sugriva, Hanuman's first meeting with Rama, the search parties sent in all directions, and the discovery of Sita's location in Lanka through Sampati's revelation.",
    image: "/lovable-uploads/73e072f9-3927-43b8-810d-983f2dded990.png",
    coords: [15.3350, 76.4617],
    learnMoreUrl: "https://sanskritdocuments.org/sites/valmikiramayan/kish/kishkindha_contents.htm"
  },
  {
    id: 5,
    title: "Sundara Kanda",
    subtitle: "Book of Beauty",
    location: "Rameshwaram",
    description: "Hanuman's magnificent leap across the ocean to Lanka. His reconnaissance mission, finding Sita in Ashoka Vatika, and delivering Rama's message.",
    details: "The most beloved section describing Hanuman's heroic journey, his encounter with sea monsters, finding Sita, the burning of Lanka, and his triumphant return with news of Sita's whereabouts.",
    image: "/lovable-uploads/fedc676d-63ce-4543-8b54-446f7a4ba7eb.png",
    coords: [9.2887, 79.3127],
    learnMoreUrl: "https://sanskritdocuments.org/sites/valmikiramayan/sundara/sundara_contents.htm"
  },
  {
    id: 6,
    title: "Yuddha Kanda",
    subtitle: "Book of War",
    location: "Suvela (Lanka)",
    description: "The epic war in Lanka. The construction of the bridge, the great battle between the forces of dharma and adharma, culminating in Ravana's defeat.",
    details: "The vanara army's march to Lanka, the legendary bridge construction, fierce battles with Ravana's demon army, Ravana's death, Sita's rescue, and the triumphant return to Ayodhya for Rama's coronation.",
    image: "/lovable-uploads/51ed4b6d-7cce-4eed-959a-e782d392e0e7.png",
    coords: [8.7500, 80.7500],
    learnMoreUrl: "https://sanskritdocuments.org/sites/valmikiramayan/yuddha/yuddha_contents.htm"
  }
];

const JourneySteps = () => {
  return (
    <section id="journey-start" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">Srimad Valmiki Ramayana</h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto mb-4">
            Six Sacred Kandas (Books) of the Ancient Epic
          </p>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            Journey through the complete structure of Maharshi Valmiki's immortal composition, 
            from Rama's divine birth to his glorious return as the righteous king
          </p>
        </div>

        {journeySteps.map((step, index) => (
          <div key={step.id} className={`mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex items-center gap-12`}>
            <div className="flex-1">
              <div className="relative">
                <img 
                  src={step.image} 
                  alt={step.location}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                  Book {step.id}
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3 text-orange-700">
                <MapPin size={24} />
                <span className="text-xl font-semibold">{step.location}</span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-orange-900 mb-2">
                  {step.title}
                </h3>
                <h4 className="text-xl font-semibold text-orange-700 mb-4">
                  {step.subtitle}
                </h4>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {step.description}
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                {step.details}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/map" 
                  className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-lg hover:bg-sky-200 transition font-medium"
                >
                  <MapPin size={16} />
                  View on Map
                </Link>
                <a 
                  href={step.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg hover:bg-orange-200 transition font-medium"
                >
                  <Scroll size={16} />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySteps;
