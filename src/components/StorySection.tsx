
const chapters = [
  {
    title: "Bala Kanda - Book of Youth",
    location: "Ayodhya",
    desc: "The divine birth and early life of Lord Rama in the golden city of Ayodhya. His education, training, and marriage to Sita.",
    image: "/lovable-uploads/7c82734e-5e41-45a1-9b1f-f69391bd1b9d.png",
    link: "https://sanskritdocuments.org/sites/valmikiramayan/baala/baala_contents.htm",
  },
  {
    title: "Ayodhya Kanda - Book of Ayodhya", 
    location: "Chitrakoot",
    desc: "The royal exile begins as Rama accepts fourteen years of forest life, departing with Sita and Lakshmana to honor dharma.",
    image: "/lovable-uploads/4abf2371-e85d-4583-bf07-4431d522a300.png",
    link: "https://sanskritdocuments.org/sites/valmikiramayan/ayodhya/ayodhya_contents.htm",
  },
  {
    title: "Aranya Kanda - Book of Forest",
    location: "Panchavati & Dandaka Forest",
    desc: "Life in the deep forests, encounters with sages and demons, culminating in Sita's abduction by Ravana from Panchavati.",
    image: "/lovable-uploads/68fd50a4-6529-4581-baf2-cb5fb73dd123.png",
    link: "https://sanskritdocuments.org/sites/valmikiramayan/aranya/aranya_contents.htm",
  },
  {
    title: "Kishkindha Kanda - Empire of Holy Monkeys",
    location: "Kishkindha",
    desc: "Rama's alliance with the vanara kingdom. Meeting Hanuman, friendship with Sugriva, and organizing the search for Sita.",
    image: "/lovable-uploads/73e072f9-3927-43b8-810d-983f2dded990.png",
    link: "https://sanskritdocuments.org/sites/valmikiramayan/kish/kishkindha_contents.htm",
  },
  {
    title: "Sundara Kanda - Book of Beauty",
    location: "Rameshwaram",
    desc: "Hanuman's heroic leap across the ocean, finding Sita in Lanka, and delivering Rama's message of hope and rescue.",
    image: "/lovable-uploads/fedc676d-63ce-4543-8b54-446f7a4ba7eb.png",
    link: "https://sanskritdocuments.org/sites/valmikiramayan/sundara/sundara_contents.htm",
  },
  {
    title: "Yuddha Kanda - Book of War",
    location: "Suvela, Lanka",
    desc: "The epic war in Lanka, Ravana's defeat, Sita's rescue, and Rama's triumphant return to Ayodhya for his coronation.",
    image: "/lovable-uploads/51ed4b6d-7cce-4eed-959a-e782d392e0e7.png",
    link: "https://sanskritdocuments.org/sites/valmikiramayan/yuddha/yuddha_contents.htm",
  },
];

export const StorySection = () => (
  <section className="max-w-6xl mx-auto my-12 px-4 md:px-0">
    <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6 text-center">Six Sacred Kandas of Valmiki Ramayana</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {chapters.map((ch, idx) => (
        <div
          key={ch.title}
          className="bg-white border border-orange-100 rounded-lg shadow-lg relative flex flex-col group transition hover-scale hover:bg-sky-50"
        >
          <img src={ch.image} alt={ch.location} className="rounded-t-lg w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-200" />
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-extrabold text-xl text-orange-800 mb-1 group-hover:text-sky-900 transition">{ch.title}</h3>
            <p className="text-sm text-slate-700 mb-2">{ch.desc}</p>
            <a href={ch.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-sky-700 font-semibold underline hover:text-orange-700 text-sm">Read more &rarr;</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
