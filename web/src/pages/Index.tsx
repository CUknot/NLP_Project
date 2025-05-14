
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, Shield, Zap, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <span className="inline-block py-1 px-3 bg-secondary rounded-full text-sm font-medium text-primary animate-fade-in">
                Next.js + Golang Fiber
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Modern real-time <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  chat application
                </span>
              </h1>
              
              <p className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Experience fluid, real-time conversations with our elegantly designed chat platform. 
                Built with speed and simplicity as core principles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button 
                  onClick={() => navigate('/chat')}
                  className="btn-primary"
                >
                  Start Chatting <ArrowRight size={18} className="ml-2" />
                </button>
                
                <button 
                  onClick={() => navigate('/faq')}
                  className="btn-secondary"
                >
                  Top 10 Questions <HelpCircle size={18} className="ml-2" />
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl blur-3xl opacity-50"></div>
                <div className="glass-panel rounded-3xl p-4 relative animate-float">
                  <div className="bg-background dark:bg-secondary/20 rounded-2xl overflow-hidden shadow-soft w-[300px] md:w-[380px]">
                    <div className="p-4 border-b border-border">
                      <h3 className="text-lg font-medium">FiberChat</h3>
                    </div>
                    
                    <div className="h-[300px] md:h-[380px] p-4 overflow-auto">
                      <div className="flex mb-4 justify-start">
                        <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                          <p>Hey there! How are you today?</p>
                          <div className="text-xs mt-1 opacity-70">10:24 AM</div>
                        </div>
                      </div>
                      
                      <div className="flex mb-4 justify-end">
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                          <p>I'm doing great! Just checking out this new chat app. It looks amazing!</p>
                          <div className="text-xs mt-1 opacity-70 text-right">10:26 AM</div>
                        </div>
                      </div>
                      
                      <div className="flex mb-4 justify-start">
                        <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                          <p>Yes, it's built with Next.js and Golang Fiber. Super fast and responsive!</p>
                          <div className="text-xs mt-1 opacity-70">10:27 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 bg-secondary rounded-full text-sm font-medium text-primary mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why choose FiberChat?</h2>
            <p className="text-muted-foreground">
              Our chat application brings together beautiful design and powerful technology
              to create an exceptional messaging experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-secondary/20 rounded-xl p-6 shadow-soft border border-border/50 hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Zap size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Powered by Golang Fiber backend, messages are delivered instantly with minimal latency.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white dark:bg-secondary/20 rounded-xl p-6 shadow-soft border border-border/50 hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Messaging</h3>
              <p className="text-muted-foreground">
                End-to-end encryption keeps your conversations private and secure at all times.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white dark:bg-secondary/20 rounded-xl p-6 shadow-soft border border-border/50 hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <MessageCircle size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intuitive Interface</h3>
              <p className="text-muted-foreground">
                Beautiful, minimalist design makes chatting a delightful experience on any device.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-tr from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgxMjgsIDEyOCwgMTI4LCAwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start chatting?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of users already enjoying the smooth, intuitive chatting experience of FiberChat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/chat')}
                  className="btn-primary"
                >
                  Get Started Now <ArrowRight size={18} className="ml-2" />
                </button>
                <button 
                  onClick={() => navigate('/faq')}
                  className="btn-secondary"
                >
                  View FAQ <HelpCircle size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
