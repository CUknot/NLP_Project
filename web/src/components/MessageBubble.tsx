
import { cn } from '@/lib/utils';
import { marked } from 'marked'; // Import the marked library

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.sender === 'user';

  // Format timestamp to show only hours and minutes
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(message.timestamp);

  // Function to render Markdown - using synchronous version
  const renderMarkdown = (markdown: string): string => {
    try {
      // Using marked.parse with sync option to ensure it returns a string
      return marked.parse(markdown, { async: false }) as string;
    } catch (error) {
      console.error('Error parsing Markdown:', error);
      return markdown; // Fallback to plain text in case of error
    }
  };

  return (
    <div
      className={cn(
        'flex mb-4 animate-fade-in',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-soft',
          isUser
            ? 'bg-primary text-primary-foreground rounded-tr-none'
            : 'bg-secondary text-secondary-foreground rounded-tl-none'
        )}
      >
        {message.sender === 'other' && message.text.startsWith('<div') ? (
          <div dangerouslySetInnerHTML={{ __html: message.text }} className="text-sm md:text-base" />
        ) : (
          <div
            className="text-sm md:text-base prose prose-sm md:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }}
          />
        )}
        <div
          className={cn(
            'text-xs mt-1 opacity-70 flex',
            isUser ? 'justify-end' : 'justify-start'
          )}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
