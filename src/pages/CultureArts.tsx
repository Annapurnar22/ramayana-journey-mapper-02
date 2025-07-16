
import { Palette, Camera, Music, Theater, Brush, Globe, Play, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CultureArts = () => {
  return (
    <main className="pt-24 pb-10 min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 flex items-center justify-center text-center bg-cover bg-center"
           style={{ backgroundImage: "url('/lovable-uploads/571ec64b-7729-4437-a67e-93675fe19bcf.png')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Discover the Rich Cultural Heritage
          </h1>
          <p className="text-xl text-white mb-8">
            Explore artistic traditions inspired by the Ramayana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://ramayana-heritage-arts-echo-90.lovable.app', '_blank')}
              className="bg-orange-600 hover:bg-orange-700 px-8 py-3 text-lg"
            >
              Visit Heritage Arts Gallery
            </Button>
            <Button 
              onClick={() => window.location.href = '/map'}
              className="bg-sky-600 hover:bg-sky-700 px-8 py-3 text-lg"
            >
              Explore Interactive Map
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Audio-Visual Learning Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
          {/* Audio Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Headphones size={24} />
                Audio Journey
              </CardTitle>
              <CardDescription>Listen to the complete Ramayana in narrated format.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-4 mb-3">
                  <Button size="sm" className="rounded-full w-10 h-10">
                    <Play size={16} />
                  </Button>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Ramayana - Full Audiobook</div>
                    <div className="text-xs text-gray-500">29 Episodes • 19 hrs 00 mins</div>
                  </div>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-1/4"></div>
                </div>
                <audio controls className="w-full mt-3">
                  <source src="https://pocketfm.com/show/5e40b9fcbedc4f1b219bd5f89fe32aa3ded432c2" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div className="space-y-2">
                <a 
                  href="https://pocketfm.com/show/5e40b9fcbedc4f1b219bd5f89fe32aa3ded432c2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-purple-100 text-purple-800 p-3 rounded-lg hover:bg-purple-200 transition"
                >
                  <div className="font-semibold">Ramayana - Full Audiobook (PocketFM)</div>
                  <div className="text-sm">Complete narration with 29 episodes</div>
                </a>
                <a 
                  href="https://prabhupadavani.org/audio/amala-bhakta-dasa-narrations/ramayana/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-purple-100 text-purple-800 p-3 rounded-lg hover:bg-purple-200 transition"
                >
                  <div className="font-semibold">Ramayana Audio by Amala Bhakta Dasa</div>
                  <div className="text-sm">Traditional Sanskrit narration</div>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Video Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Play size={24} />
                Visual Highlights
              </CardTitle>
              <CardDescription>Watch Ramayana journey highlights and legends.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/videoseries?list=PLfv3tA5AoEjCvw1-TL_DfEI1evKjEhvDO" 
                  title="Ramayana Video Series"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <a 
                href="https://youtube.com/playlist?list=PLfv3tA5AoEjCvw1-TL_DfEI1evKjEhvDO&feature=shared" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-red-100 text-red-800 p-3 rounded-lg hover:bg-red-200 transition"
              >
                <div className="font-semibold">Complete Ramayana Video Playlist</div>
                <div className="text-sm">YouTube series covering all major episodes</div>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Cultural Traditions Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center gap-2">
            <Music size={24} />
            Cultural Traditions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Musical Heritage</h3>
              <p className="text-gray-700 mb-4">
                Explore the rich musical traditions associated with Ramayana, including classical ragas, 
                devotional songs, and folk music from different regions of India.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Carnatic classical compositions</li>
                <li>Regional folk songs and ballads</li>
                <li>Devotional bhajans and kirtans</li>
                <li>Traditional instrumental music</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Craft Traditions</h3>
              <p className="text-gray-700 mb-4">
                Discover the intricate craftsmanship in sculptures, textiles, and decorative arts 
                that bring Ramayana stories to life through various mediums.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Stone and bronze sculptures</li>
                <li>Textile art and embroidery</li>
                <li>Wood carvings and reliefs</li>
                <li>Metalwork and jewelry</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Art Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Palette size={24} />
                Traditional Paintings
              </CardTitle>
              <CardDescription>Classical depictions of Ramayana scenes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2c333d9f-e7f6-4f51-a3a7-651f633a3c30.png" 
                  alt="Traditional Painting" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Miniature paintings, murals, and frescoes depicting key moments from the epic.
              </p>
              <Button 
                onClick={() => window.open('https://artsandculture.google.com/story/ZAXx-HIJvkGzqA', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 w-full"
              >
                Explore Gallery
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Theater size={24} />
                Online Exhibits
              </CardTitle>
              <CardDescription>Digital exhibitions and collections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b45093b1-389b-4401-abf4-661dbd1c1233.png" 
                  alt="Online Exhibits" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Explore digital exhibitions showcasing Ramayana art and cultural artifacts.
              </p>
              <Button 
                onClick={() => window.open('https://artsandculture.google.com/story/xAUBJLEWux9qzQ', '_blank')}
                className="bg-green-600 hover:bg-green-700 w-full"
              >
                View Exhibits
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Brush size={24} />
                Shadow Puppetry to Narrative Art
              </CardTitle>
              <CardDescription>Traditional storytelling through visual arts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c5db1999-7fb8-479f-a22d-f464aaf1a0e6.png" 
                  alt="Shadow Puppetry" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Discover the evolution from shadow puppetry to contemporary narrative art forms.
              </p>
              <Button 
                onClick={() => window.open('https://artsandculture.google.com/story/qQXB4bGJID5BIg', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 w-full"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default CultureArts;
