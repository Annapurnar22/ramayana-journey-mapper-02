
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
      text: "Hi! I'm Saransh AI. How can I help you explore the Footsteps of Rama today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm here to help you with your Ramayana journey. You can ask me about places to visit, travel packages, or learn about the epic story.";
    }
    
    if (lowerMessage.includes('map') || lowerMessage.includes('location')) {
      return "You can explore our Interactive Map Journey to see all the sacred places from Ayodhya to Lanka. Visit the Map Journey section to trace Rama's path.";
    }
    
    if (lowerMessage.includes('package') || lowerMessage.includes('tour') || lowerMessage.includes('travel')) {
      return "We offer various pilgrimage packages including the Sacred Express Package, IRCTC Ramayana Circuit Tour, and Localized Tours. Check out our Trip Planner section for detailed itineraries.";
    }
    
    if (lowerMessage.includes('story') || lowerMessage.includes('kanda') || lowerMessage.includes('book')) {
      return "The Ramayana is divided into six Kandas: Bala Kanda (Youth), Ayodhya Kanda (Exile), Aranya Kanda (Forest), Kishkindha Kanda (Monkey Kingdom), Sundara Kanda (Beauty), and Yuddha Kanda (War). Visit our Immersive View to explore each book.";
    }
    
    if (lowerMessage.includes('audio') || lowerMessage.includes('video') || lowerMessage.includes('resources')) {
      return "Our Resources section has audio narrations and video content about the Ramayana. You can listen to the complete audiobook and watch video series there.";
    }
    
    return "Thank you for your question! You can explore different sections of our website: Immersive View for the story, Map Journey for locations, Trip Planner for travel packages, and Resources for learning materials. Let me know if you need any additional help!";
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
        className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50">
          <Card className="h-full flex flex-col">
            <CardHeader className="bg-orange-600 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Saransh AI</CardTitle>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200"
                >
                  <X size={20} />
                </button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg text-sm ${
                        message.isUser
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input Area */}
              <div className="p-4 border-t flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Ramayana..."
                  className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-orange-600 hover:bg-orange-700"
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
