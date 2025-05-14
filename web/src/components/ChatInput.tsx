
import { useState, FormEvent, KeyboardEvent } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white dark:bg-secondary rounded-2xl shadow-soft border border-border p-2 flex items-end gap-2"
    >
      <button
        type="button"
        className="p-2.5 rounded-full hover:bg-secondary dark:hover:bg-accent transition-colors"
        aria-label="Attach file"
      >
        <Paperclip size={20} className="text-muted-foreground" />
      </button>
      
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        rows={1}
        className="flex-1 resize-none bg-transparent border-0 focus:ring-0 text-sm md:text-base py-2.5 max-h-32 overflow-auto"
        style={{ height: 'auto' }}
      />
      
      <button
        type="button"
        className="p-2.5 rounded-full hover:bg-secondary dark:hover:bg-accent transition-colors"
        aria-label="Voice message"
      >
        <Mic size={20} className="text-muted-foreground" />
      </button>
      
      <button
        type="submit"
        disabled={!message.trim()}
        className="p-2.5 rounded-full bg-primary text-white disabled:opacity-50 transition-all hover:bg-primary/90 active:translate-y-0.5"
        aria-label="Send message"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;
