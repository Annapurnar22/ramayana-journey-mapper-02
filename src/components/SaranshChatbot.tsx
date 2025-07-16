
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const SaranshChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! 🙏 Welcome to Footsteps of Rama! I'm Saransh AI, your digital guide for exploring Lord Rama's sacred journey. You can explore our interactive map, learn about specific locations, follow the timeline of events, and discover cultural significance. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('namaste') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Namaste! 🙏 I'm honored to guide you through Lord Rama's divine journey. You can explore our interactive map to trace the path from Ayodhya to Lanka, learn about sacred locations, or discover the cultural heritage. How may I help you explore this spiritual journey?";
    }
    
    if (lowerMessage.includes('map') || lowerMessage.includes('interactive') || lowerMessage.includes('journey') || lowerMessage.includes('path')) {
      return "Our Interactive Map Journey traces Lord Rama's complete path during his 14-year exile. You'll find 16 sacred locations from Ayodhya to Lanka, each marked with detailed information about events that took place there. Visit the 'Mapping Ramayana Trail' section to explore this divine route and click on markers for historical insights.";
    }
    
    if (lowerMessage.includes('ayodhya')) {
      return "Ayodhya, the birthplace of Lord Rama, is where the epic begins. It's the capital of Kosala kingdom where Rama was born to King Dasharatha. This sacred city is where Rama's exile story starts. You can explore Ayodhya and other locations on our interactive map to learn more about their significance.";
    }
    
    if (lowerMessage.includes('lanka') || lowerMessage.includes('ravana')) {
      return "Lanka, the golden city ruled by Ravana, is where Sita was held captive. This is where the great war took place between Rama's forces and Ravana's army. The victory at Lanka marked the triumph of good over evil. Explore our map to see Lanka's location and learn about this crucial part of the journey.";
    }
    
    if (lowerMessage.includes('chitrakoot') || lowerMessage.includes('panchvati') || lowerMessage.includes('kishkindha')) {
      return "These are sacred locations from Rama's exile journey! Chitrakoot is where Rama, Sita, and Lakshmana spent peaceful years. Panchvati is where Sita was abducted. Kishkindha is where Rama met Hanuman and Sugriva. Each location has deep spiritual significance - explore them on our interactive map for detailed stories.";
    }
    
    if (lowerMessage.includes('sita') || lowerMessage.includes('lakshmana') || lowerMessage.includes('hanuman')) {
      return "The divine characters of Ramayana! Sita represents devotion and purity, Lakshmana embodies loyalty and service, and Hanuman symbolizes strength and devotion. Their journey alongside Rama teaches us about dharma, devotion, and righteousness. Learn more about their roles in our Immersive View section.";
    }
    
    if (lowerMessage.includes('culture') || lowerMessage.includes('art') || lowerMessage.includes('heritage')) {
      return "The Ramayana has inspired countless art forms, music, dance, and cultural traditions across India and beyond. Visit our 'Culture & Arts' section to explore traditional paintings, classical performances, regional variations, and how this epic continues to influence contemporary culture. You'll find audio-visual content and heritage galleries there.";
    }
    
    if (lowerMessage.includes('travel') || lowerMessage.includes('pilgrimage') || lowerMessage.includes('visit') || lowerMessage.includes('tour')) {
      return "Planning a spiritual journey? Our Trip Planner offers various pilgrimage packages to visit the actual locations from Rama's journey. You can choose from the Sacred Express Package, IRCTC Ramayana Circuit Tour, or customize your own spiritual pilgrimage. Discover these sacred places where the divine events actually took place!";
    }
    
    if (lowerMessage.includes('story') || lowerMessage.includes('kanda') || lowerMessage.includes('chapters')) {
      return "The Ramayana is beautifully divided into six Kandas (books): Bala Kanda (Childhood), Ayodhya Kanda (Exile), Aranya Kanda (Forest), Kishkindha Kanda (Monkey Kingdom), Sundara Kanda (Hanuman's Journey), and Yuddha Kanda (War). Each Kanda reveals profound spiritual teachings. Explore our Immersive View to journey through each chapter.";
    }
    
    if (lowerMessage.includes('use') || lowerMessage.includes('navigate') || lowerMessage.includes('website') || lowerMessage.includes('how')) {
      return "I'm here to help you navigate our website! Use the menu to access: 'Immersive View' for the complete story, 'Mapping Ramayana Trail' for the journey map, 'Trip Planner' for pilgrimage packages, and 'Culture & Arts' for heritage content. Each section offers a unique way to experience Lord Rama's divine journey. What would you like to explore first?";
    }
    
    if (lowerMessage.includes('dharma') || lowerMessage.includes('teachings') || lowerMessage.includes('spiritual')) {
      return "The Ramayana is a profound guide to dharma and righteous living. Lord Rama's life exemplifies ideal kingship, devotion to duty, and moral conduct. The epic teaches us about family values, loyalty, courage, and the victory of good over evil. Every location and event in Rama's journey carries deep spiritual significance for seekers of truth.";
    }
    
    return "Thank you for your question! As your guide to Lord Rama's sacred journey, I can help you explore our interactive map, learn about holy locations like Ayodhya and Lanka, discover cultural heritage, plan spiritual pilgrimages, or understand the profound teachings of the Ramayana. What aspect of this divine journey would you like to explore? 🙏";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    const aiResponse: Message = {
      id: messages.length + 2,
      text: getAIResponse(inputText),
      isUser: false,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 rounded-full shadow-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300 z-50 animate-pulse hover:animate-none"
        style={{ boxShadow: '0 8px 25px rgba(251, 146, 60, 0.4)' }}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border-2 border-orange-200 z-50 animate-scale-in">
          <Card className="h-full flex flex-col rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <CardTitle className="text-lg font-bold">Saransh AI</CardTitle>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-orange-200 transition-colors p-1 rounded-full hover:bg-orange-700/30"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-orange-100 text-xs">Your guide to Rama's journey</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-orange-50/30 to-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-2xl text-sm shadow-sm ${
                        message.isUser
                          ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-br-md'
                          : 'bg-white text-gray-800 border border-orange-100 rounded-bl-md'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input Area */}
              <div className="p-4 border-t border-orange-100 bg-orange-50/50 flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Rama's journey..."
                  className="flex-1 border border-orange-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 rounded-xl px-3 shadow-md"
                >
                  <Send size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default SaranshChatbot;
