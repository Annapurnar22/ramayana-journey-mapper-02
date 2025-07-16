
import { Play, Headphones, Book, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResourceItem = ({ title, url, desc }: { title: string; url: string; desc: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white border border-orange-100 rounded-lg shadow hover:bg-orange-50 transition p-5 mb-4"
  >
    <h3 className="font-bold text-orange-700 text-lg">{title}</h3>
    <div className="text-slate-700 text-sm">{desc}</div>
    <span className="text-sky-700 underline text-xs flex items-center gap-1 mt-2">
      <ExternalLink size={12} />
      {url}
    </span>
  </a>
);

const Resources = () => (
  <main className="pt-24 pb-10 min-h-screen bg-gradient-to-b from-orange-50 to-sky-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-orange-900 mb-4">Learning Resources</h1>
        <p className="text-xl text-orange-800 mb-8">Authentic Ramayana sources, audio-visual content, and learning materials.</p>
      </div>

      {/* Audio-Visual Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
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
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center relative">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Play size={24} fill="white" />
                </div>
                <p className="text-sm">Ramayana Video Series</p>
              </div>
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

      {/* Learning Resources */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center gap-2">
          <Book size={24} />
          Scripture Resources
        </h2>
        <ResourceItem 
          title="Valmiki Ramayan [Full Text]" 
          url="https://www.valmikiramayan.net/" 
          desc="The complete ancient scripture, verse by verse, with translation." 
        />
        <ResourceItem 
          title="Google Arts & Culture: The Ramayana" 
          url="https://artsandculture.google.com/story/8gWB7ABpntvssA?hl=en" 
          desc="Immersive storytelling and beautiful artwork following Rama's story and places." 
        />
        <ResourceItem 
          title="Wikipedia: Ramayana" 
          url="https://en.wikipedia.org/wiki/Ramayana" 
          desc="Encyclopedic background, summary, and history of the epic." 
        />
        <ResourceItem 
          title="YouTube: Ramayana (Doordarshan)" 
          url="https://www.youtube.com/playlist?list=PLby6o4EeN2iOyyucsZDwqLWaseS0Vw2F9" 
          desc="Watch the landmark televised adaptation (Hindi, Eng subs)." 
        />
      </div>
    </div>
  </main>
);

export default Resources;
