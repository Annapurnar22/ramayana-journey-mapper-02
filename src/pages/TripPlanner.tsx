import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Star, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TripPlanner = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'sacred-express',
      name: 'Sacred Express Package',
      duration: '11 Days / 10 Nights',
      price: 'Starting from ₹45,000',
      image: '/lovable-uploads/3dea6da3-667a-48e5-918e-0ad63d53fea1.png',
      description: 'A comprehensive journey covering all major Ramayana sites across India',
      highlights: ['Ayodhya - Birthplace of Lord Rama', 'Chitrakoot - Forest Retreat', 'Nashik - Panchavati', 'Hampi - Kishkindha', 'Rameshwaram - Bridge to Lanka'],
      itinerary: [
        'Day 1-2: Delhi to Ayodhya - Ram Janmabhoomi, Hanuman Garhi',
        'Day 3-4: Ayodhya to Chitrakoot - Ramghat, Kamadgiri, Sphatik Shila',
        'Day 5-6: Chitrakoot to Nashik - Panchavati, Sita Gufa, Kalaram Temple',
        'Day 7-8: Nashik to Hampi - Kishkindha, Hanuman Temple, Sugriva Cave',
        'Day 9-10: Hampi to Rameshwaram - Ramanathaswamy Temple, Dhanushkodi',
        'Day 11: Return to Chennai/Madurai'
      ],
      link: 'https://tripindia.co.in/indiatourpackage/Ramayana-Circuit-Tour/429'
    },
    {
      id: 'irctc-ramayana',
      name: 'IRCTC Ramayana Trail',
      duration: '16 Days / 15 Nights',
      price: '₹62,370 per person (Double Occupancy)',
      image: '/lovable-uploads/7afb03c4-2d80-42b2-8347-b5e0cbaae195.png',
      description: 'Official IRCTC Bharat Gaurav train journey through Ramayana circuit',
      highlights: ['Luxury train travel', 'All meals included', 'Guided tours', 'AC accommodation', 'Cultural programs'],
      itinerary: [
        'Day 1: Delhi - Departure from Safdarjung Railway Station',
        'Day 2-3: Ayodhya - Ram Janmabhoomi, Kanak Bhawan, Hanuman Garhi',
        'Day 4-5: Sitamarhi - Janaki Temple, Punaura Dham',
        'Day 6-7: Janakpur (Nepal) - Janaki Mandir, Ram Mandir',
        'Day 8-9: Chitrakoot - Ramghat, Kamadgiri Parikrama',
        'Day 10-11: Nashik-Trimbakeshwar - Panchavati, Kalaram Temple',
        'Day 12-13: Hampi - Kishkindha, Hanuman Temple, Virupaksha Temple',
        'Day 14-15: Rameshwaram - Ramanathaswamy Temple, Dhanushkodi',
        'Day 16: Return to Delhi'
      ],
      link: 'https://blog.irctctourism.com/shri-ramayana-yatra-tour-package-irctc-tourism/'
    },
    {
      id: 'localized-tours',
      name: 'Localized Tours Package',
      duration: '4 Days / 3 Nights',
      price: 'Starting from ₹15,000',
      image: '/lovable-uploads/4df5f935-42b4-4fcf-95fe-aaf5dcd629c7.png',
      description: 'Regional Ramayana circuit covering Bihar and surrounding areas',
      highlights: ['Patna - Darbhanga circuit', 'Sita Marhi - Birthplace of Sita', 'Local cultural experiences', 'Heritage sites'],
      itinerary: [
        'Day 1: Arrival in Patna - Patna Museum, Golghar, Gandhi Maidan',
        'Day 2: Patna to Darbhanga - Ahilya Sthan, Darbhanga Palace',
        'Day 3: Darbhanga to Sitamarhi - Janaki Temple, Punaura Dham, Haleshwar Sthan',
        'Day 4: Sitamarhi to Patna - Departure'
      ],
      link: 'https://www.triptotemples.com/ramayana-circuit/patna-darbhanga-sita-marhi-ramayana-tour'
    },
    {
      id: 'ayodhya-nandigram',
      name: 'Ayodhya-Nandigram Package',
      duration: '3 Days / 2 Nights',
      price: 'Starting from ₹12,000',
      image: '/lovable-uploads/05a6b985-b11d-4a28-9c2a-dbbf1d243e08.png',
      description: 'Solo pilgrimage package focusing on Ayodhya and Nandigram',
      highlights: ['Ram Janmabhoomi Temple', 'Nandigram - Bharata\'s residence', 'Hanuman Garhi', 'Kanak Bhawan'],
      itinerary: [
        'Day 1: Arrival in Ayodhya - Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan',
        'Day 2: Ayodhya full day - Treta Ke Thakur, Nageshwarnath Temple, Guptar Ghat',
        'Day 3: Ayodhya to Nandigram - Bharata Kund, Nandigram Temple, Departure'
      ],
      link: 'https://www.triptotemples.com/ramayana-circuit/ayodhya-nandigram-pilgrimage-tour'
    }
  ];

  const testimonials = [
    {
      name: 'Aakriti P',
      rating: 5,
      comment: 'The Ramayana trail was a life-changing spiritual journey. Every location resonated with the epic stories I grew up hearing. The guide was knowledgeable and the arrangements were excellent.'
    },
    {
      name: 'Pradyumna K',
      rating: 5,
      comment: 'Incredible experience visiting all the sacred places from Ayodhya to Rameshwaram. The IRCTC package was well-organized and comfortable. Highly recommend for spiritual seekers.'
    },
    {
      name: 'Madhavi N',
      rating: 5,
      comment: 'The localized package was perfect for our family. Kids loved learning about the stories at each location. Great value for money and wonderful memories created.'
    }
  ];

  const showItinerary = (packageId: string) => {
    setSelectedPackage(selectedPackage === packageId ? null : packageId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-sky-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
            Plan Your Sacred Journey
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose from our carefully curated pilgrimage packages to experience the divine journey of Lord Rama
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-orange-600 text-white">
                    {pkg.duration}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-orange-900">{pkg.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {pkg.description}
                </CardDescription>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-semibold text-green-600">{pkg.price}</span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Package Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <MapPin size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={() => showItinerary(pkg.id)}
                      variant="outline" 
                      className="flex-1"
                    >
                      {selectedPackage === pkg.id ? 'Hide Details' : 'View Details'}
                    </Button>
                    <Button 
                      onClick={() => window.open(pkg.link, '_blank')}
                      className="flex-1 bg-orange-600 hover:bg-orange-700"
                    >
                      Book Now <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>

                  {selectedPackage === pkg.id && (
                    <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Clock size={16} />
                        Detailed Itinerary:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {pkg.itinerary.map((day, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs font-medium flex-shrink-0">
                              {day.split(':')[0]}
                            </span>
                            <span>{day.split(':').slice(1).join(':').trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">
            Traveler Experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-800 font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-100 to-sky-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">
            Ready to Begin Your Sacred Journey?
          </h3>
          <p className="text-gray-700 mb-6">
            Contact our travel experts to customize your pilgrimage experience
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
            <Users size={20} className="mr-2" />
            Contact Travel Expert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
