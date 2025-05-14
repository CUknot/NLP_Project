
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MessageBubble, { Message } from '@/components/MessageBubble';
import ChatInput from '@/components/ChatInput';
import axios from 'axios';

// Sample initial messages
const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! Welcome to FiberChat. How can I help you today?',
    sender: 'other',
    timestamp: new Date(Date.now() - 60000 * 15),
  },
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Simulate WebSocket connection
  useEffect(() => {
    console.log('Connecting to WebSocket server...');
    
    // Simulate connection delay
    const connectionTimer = setTimeout(() => {
      setIsConnected(true);
      console.log('Connected to WebSocket server!');
    }, 1000);
    
    return () => {
      clearTimeout(connectionTimer);
      console.log('Disconnected from WebSocket server');
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    const Api_URL = "https://ffcb-35-204-177-248.ngrok-free.app";
    const res = await axios.post(`${Api_URL}/ask`, { query : text });

      // Simple echo response for demo
      const responseMessage: Message = {
        id: `response-${Date.now()}`,
        text: res.data.answer,
        sender: 'other',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsLoading(false);
  };

  const navigateToFAQ = () => {
    navigate('/faq');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white dark:bg-secondary/20 rounded-xl shadow-soft border border-border/50 overflow-hidden">
            {/* Chat header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-secondary/30 dark:bg-secondary/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-medium">FiberChat</h2>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-1.5 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    {isConnected ? 'Connected' : 'Connecting...'}
                  </p>
                </div>
              </div>
              <button 
                onClick={navigateToFAQ}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-colors"
                title="Frequently Asked Questions"
              >
                <HelpCircle size={20} className="text-primary" />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="p-4 h-[500px] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                  <MessageCircle size={48} className="mb-4 opacity-20" />
                  <p>No messages yet</p>
                  <p className="text-sm">Start the conversation</p>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                  ))}
                  {isLoading && (
                    <div className="flex mb-4 animate-fade-in">
                      <div className="max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-soft bg-secondary text-secondary-foreground">
                        <div className="text-sm md:text-base prose prose-sm md:prose-base max-w-none">
                          <p>...</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Scroll to bottom */}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>
            
            {/* Chat input */}
            <div className="p-4 border-t border-border">
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
