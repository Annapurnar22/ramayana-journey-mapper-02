
import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const RamaQualities = () => {
  const qualities = [
    {
      title: "Righteousness (Dharma)",
      description: "At the heart of Lord Rama's character is his unwavering commitment to dharma. Throughout his life, he prioritized righteousness over personal interest.",
      example: "When he was exiled from his kingdom at the behest of his father's promise to Kaikeyi, he didn't argue. Instead, he embraced his destiny, stating, \"For the sake of my father's honor, I shall renounce my own desires.\"",
      sanskrit: "दशरथनान् न कर्तव्यं राम इष्टम च धर्मपथः।",
      translation: "King Dasharatha's words should not go unheeded; Rama must follow the path of righteousness.",
      image: "/lovable-uploads/70a6977f-5608-4fc8-86c2-940eb2d9db91.png"
    },
    {
      title: "Compassionate Leadership",
      description: "Rama was not just a leader; he was a compassionate one. He listened to his subjects' grievances and put their interests above his.",
      example: "Think of him as a modern-day CEO who believes in employee well-being. His affection for his people is an extension of his dharma. Remember that time he helped the squirrel while building the bridge to Lanka? This small act of kindness speaks volumes about his empathy.",
      sanskrit: "",
      translation: "",
      image: "/lovable-uploads/116df90e-6047-4185-ada9-d66ed631f23c.png"
    },
    {
      title: "Integrity and Honor",
      description: "Integrity was the bedrock of Rama's traits. His word was his bond, and he upheld truth to the highest degree.",
      example: "How many leaders do we know today who would sacrifice their happiness for their promise?",
      sanskrit: "सत्यं वद धर्मं चर।",
      translation: "Speak the truth and live righteously.",
      image: "/lovable-uploads/e8504c01-be3d-4f06-b83c-52744d60d96b.png"
    },
    {
      title: "Selflessness",
      description: "Rama's life teaches us profound lessons about selflessness. He placed the needs of others before his own, whether it was in his relationship with Sita or his dedication to his father.",
      example: "During his exile, he comforted Sita, who was troubled by their separation, always reminding her of their greater goal.",
      sanskrit: "",
      translation: "",
      image: "/lovable-uploads/bcb86edc-94bf-4172-96be-a1389a465ac6.png"
    },
    {
      title: "Bravery and Valor",
      description: "Rama is celebrated for his bravery in facing Ravana, the demon king, symbolizing the eternal battle between good and evil.",
      example: "Just like a lion standing tall against a pack of wolves, Rama never backed down from challenges, charging fearlessly into battles.",
      sanskrit: "रामो विप्राणां सदा कल्याणसंचारिन्।",
      translation: "Rama is always a bringer of well-being for the noble ones.",
      image: "/lovable-uploads/866c3562-325f-47d6-aec1-b48171acaee2.png"
    },
    {
      title: "Wisdom & Forgiveness",
      description: "Rama's decisions were always guided by wisdom. His ability to think strategically, especially during conflicts, set him apart. Lord Rama epitomized forgiveness, even towards those who wronged him.",
      example: "His unwavering loyalty to Sita and his followers showcases his commitment. This quality is crucial in forging lasting relationships.",
      sanskrit: "",
      translation: "",
      image: "/lovable-uploads/93c86ff3-6ca2-48c9-a36f-98ba31efef41.png"
    }
  ];

  return (
    <section id="rama-qualities" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            Shree Ram's Magnificent Qualities
          </h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Discover the timeless virtues that make Lord Rama an eternal inspiration for humanity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img 
                  src={quality.image} 
                  alt={quality.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <CardTitle className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {quality.title}
                </CardTitle>
              </div>
              
              <CardContent className="p-6">
                <CardDescription className="text-orange-800 mb-4 text-sm leading-relaxed">
                  {quality.description}
                </CardDescription>
                
                <div className="mb-4">
                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    {quality.example}
                  </p>
                </div>

                {quality.sanskrit && (
                  <div className="border-t border-orange-200 pt-4">
                    <p className="text-orange-900 font-medium text-sm mb-2 font-sanskrit">
                      {quality.sanskrit}
                    </p>
                    <p className="text-slate-600 text-xs italic">
                      "{quality.translation}"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RamaQualities;
