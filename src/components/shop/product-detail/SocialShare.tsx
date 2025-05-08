import React from 'react';

interface SocialShareProps {
  url?: string;
  title?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ 
  url = window.location.href, 
  title = "Check out this awesome product!" 
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex space-x-3 mt-4">
      <button
        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, '_blank')}
        className="p-2 bg-blue-400 text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on Twitter"
      >
        T
      </button>
      <button
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank')}
        className="p-2 bg-blue-600 text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on Facebook"
      >
        F
      </button>
      <button
        onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`, '_blank')}
        className="p-2 bg-green-500 text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on WhatsApp"
      >
        W
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
        }}
        className="p-2 bg-gray-500 text-white rounded-full hover:bg-opacity-80"
        aria-label="Copy link"
      >
        L
      </button>
    </div>
  );
};

export default SocialShare;