
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Maximize2, Minimize2 } from 'lucide-react';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! 🙏 Welcome to Footsteps of Rama! Whether you're here for spiritual learning or planning a pilgrimage, I'm here to assist you.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const starterQuestions = [
    "How do I use this website?",
    "Tell me about Chitrakoot",
    "What happened at Ayodhya?",
    "How long was Rama's exile?",
    "Can I visit these places?",
    "I'm new to Ramayana"
  ];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Navigation & Website Help
    if (lowerMessage.includes('how do i use') || lowerMessage.includes('how to use') || lowerMessage.includes('navigate')) {
      return "Great question! Here's how to explore:\n\n📍 Interactive Map: Click on location markers to learn about each place\n⏰ Timeline: Follow the chronological journey from Ayodhya to Lanka\n🔍 Search: Use the search bar to find specific locations\n📱 Mobile: Swipe and tap to navigate easily on your phone\n\nWould you like me to guide you to a specific section?";
    }
    
    if (lowerMessage.includes('where is the map') || lowerMessage.includes("can't find the map") || lowerMessage.includes('find map')) {
      return "The interactive map is right on our homepage! Look for the large map showing India with colored route markers. If you don't see it, try refreshing the page or clicking 'Home' in the navigation menu. The map shows Rama's complete journey with clickable locations.";
    }
    
    if (lowerMessage.includes('how do i search') || lowerMessage.includes('search for locations')) {
      return "You can search in two ways:\n\n🔍 Use the search bar at the top of the page\n📍 Click directly on location markers on the map\n📋 Browse by regions using the menu\n\nTry searching for popular places like 'Chitrakoot' or 'Panchvati'!";
    }
    
    // Location-Specific Queries
    if (lowerMessage.includes('chitrakoot')) {
      return "Chitrakoot is a sacred location where Rama, Sita, and Lakshmana spent peaceful years during their exile. It's located on the border of Uttar Pradesh and Madhya Pradesh. Here they lived in hermitages and interacted with sages. Click on the Chitrakoot marker on our map to see beautiful illustrations and learn about the events that took place there!";
    }
    
    if (lowerMessage.includes('panchvati')) {
      return "Panchvati is a crucial location in Rama's journey, located in present-day Nashik, Maharashtra. This is where Surpanakha encountered Rama and Lakshmana, leading to significant events. It's also where Sita was abducted by Ravana. Explore the Panchvati section on our map to discover the full story and its cultural significance!";
    }
    
    if (lowerMessage.includes('ayodhya') || lowerMessage.includes('what happened at ayodhya')) {
      return "Ayodhya is where Rama's journey began - his birthplace and the kingdom he left behind. The exile started when Rama honored his father Dasharatha's promise to Kaikeyi. Our timeline feature shows the events leading to the exile. Click on Ayodhya on the map to see the emotional departure and the promise to return after 14 years.";
    }
    
    if (lowerMessage.includes('lanka')) {
      return "Lanka represents the climax of Rama's journey - where he rescued Sita from Ravana. Our map shows the route to Lanka and the great battle that took place there. This marked the end of the exile and the beginning of their return journey. Explore the Lanka section to learn about the epic battle and victory of good over evil!";
    }
    
    // Journey & Story Queries
    if (lowerMessage.includes('how long') || lowerMessage.includes('14 years') || lowerMessage.includes('exile duration')) {
      return "Rama's exile lasted exactly 14 years, as promised to Kaikeyi. Our timeline feature breaks this down into different phases - from the initial departure from Ayodhya to the final return. You can explore each year and the significant events that occurred. Would you like to see the timeline view of the complete journey?";
    }
    
    if (lowerMessage.includes('who went with') || lowerMessage.includes('companions') || lowerMessage.includes('sita') || lowerMessage.includes('lakshmana')) {
      return "Rama was accompanied by his devoted wife Sita and his loyal brother Lakshmana throughout the 14-year exile. Later, Hanuman and the vanaras (monkeys) joined them in the quest to rescue Sita. Each character has their own story - explore our character profiles to learn more about their roles in the journey!";
    }
    
    if (lowerMessage.includes('route') || lowerMessage.includes('path') || lowerMessage.includes('journey')) {
      return "Rama's route went from Ayodhya → Chitrakoot → Dandakaranya → Panchvati → and finally to Lanka. The return journey retraced many of these steps. Our interactive map shows the complete route with all major stops, rest places, and significant events. You can follow the journey chronologically or explore specific regions!";
    }
    
    // Cultural & Religious Queries
    if (lowerMessage.includes('why important') || lowerMessage.includes('significance') || lowerMessage.includes('meaning')) {
      return "Rama's journey represents the triumph of dharma (righteousness) over adharma (evil). It teaches us about duty, loyalty, sacrifice, and devotion. The exile shows how to face life's challenges with grace and determination. Many of these locations are still pilgrimage sites today, connecting ancient wisdom to modern spiritual practice.";
    }
    
    if (lowerMessage.includes('can i visit') || lowerMessage.includes('pilgrimage') || lowerMessage.includes('travel')) {
      return "Absolutely! Many locations from Rama's journey are popular pilgrimage destinations today. Places like Ayodhya, Chitrakoot, Nashik (Panchvati), and others have temples and sites dedicated to these events. Our website includes modern travel information and pilgrimage guides for those interested in following Rama's footsteps physically!";
    }
    
    if (lowerMessage.includes('what can i learn') || lowerMessage.includes('learn here')) {
      return "You can discover:\n\n📖 The complete story of Rama's exile with cultural context\n🗺️ Geographic connections between ancient and modern India\n🙏 Spiritual and philosophical lessons from the journey\n🎨 Beautiful illustrations and visual storytelling\n✈️ Information for planning your own pilgrimage\n🏛️ Historical and archaeological insights";
    }
    
    // Technical Support
    if (lowerMessage.includes('slow') || lowerMessage.includes('not working') || lowerMessage.includes('problem')) {
      return "I'm sorry you're experiencing technical difficulties! Try these quick fixes:\n\n🔄 Refresh the page (F5 or pull down on mobile)\n🌐 Check your internet connection\n🗑️ Clear your browser cache\n🔄 Try a different browser\n\nIf problems persist, you can still browse using the menu navigation. Is there a specific location you'd like to learn about while we resolve this?";
    }
    
    if (lowerMessage.includes('share') || lowerMessage.includes('how do i share')) {
      return "You can easily share Footsteps of Rama:\n\n📋 Copy the website URL and send to friends\n📱 Use social media share buttons (if available)\n📸 Screenshot interesting map sections\n🔖 Bookmark specific locations for later\n💬 Tell others about this resource for learning about Rama's journey!";
    }
    
    // General Support
    if (lowerMessage.includes('new to ramayana') || lowerMessage.includes("i'm new")) {
      return "Welcome to the beautiful world of Ramayana! This epic tells the story of Prince Rama's 14-year exile and his quest to rescue Sita. Don't worry if you're new - our website is designed to guide you through the journey step by step. Start with Ayodhya to understand how the exile began, then follow the map markers in order. Each location has beginner-friendly explanations!";
    }
    
    // Greetings & Welcome Messages
    if (lowerMessage.includes('namaste') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Welcome back! I'm here to guide you through Lord Rama's sacred journey. Feel free to ask me about any location, event, or how to use our website features!";
    }
    
    return "Thank you for your question! I'm here to help you explore Lord Rama's sacred journey. Whether you're interested in specific locations, the cultural significance, or how to navigate our website, I'm ready to assist. Is there anything else about Rama's journey I can help you explore? 🙏";
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

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInputText('');
  };

  const handleQuestionClick = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      isUser: true,
      timestamp: new Date()
    };

    const aiResponse: Message = {
      id: messages.length + 2,
      text: getAIResponse(question),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const chatWidth = isExpanded ? 'w-96' : 'w-80';
  const chatHeight = isExpanded ? 'h-[600px]' : 'h-96';

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 rounded-full shadow-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300 z-50 animate-pulse hover:animate-none flex items-center gap-2"
        style={{ boxShadow: '0 8px 25px rgba(251, 146, 60, 0.4)' }}
      >
        <MessageCircle size={24} />
        <span className="hidden sm:block font-medium">Saransh AI</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 ${chatWidth} ${chatHeight} bg-white rounded-2xl shadow-2xl border-2 border-orange-200 z-50 animate-scale-in`}>
          <Card className="h-full flex flex-col rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <CardTitle className="text-lg font-bold">Saransh AI</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-white hover:text-orange-200 transition-colors p-1 rounded-full hover:bg-orange-700/30"
                  >
                    {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-orange-200 transition-colors p-1 rounded-full hover:bg-orange-700/30"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <p className="text-orange-100 text-xs">Your guide to Rama's journey</p>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Container with proper scrolling */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-orange-50/30 to-white"
                style={{ maxHeight: isExpanded ? '450px' : '240px' }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line ${
                        message.isUser
                          ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-br-md'
                          : 'bg-white text-gray-800 border border-orange-100 rounded-bl-md'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Starter Questions - Always visible */}
              <div className="p-3 border-t border-orange-100 bg-orange-50/50">
                <p className="text-xs text-gray-500 text-center mb-2">Quick questions:</p>
                <div className="grid grid-cols-1 gap-1 max-h-24 overflow-y-auto">
                  {starterQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="text-left p-2 text-xs bg-white hover:bg-orange-100 rounded-lg transition-colors border border-orange-200 truncate"
                      title={question}
                    >
                      {question}
                    </button>
                  ))}
                </div>
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
