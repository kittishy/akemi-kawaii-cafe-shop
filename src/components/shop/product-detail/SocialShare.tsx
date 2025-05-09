
import React from 'react';
// Import fallbacks instead of react-icons
import { FaTwitter, FaFacebook, FaWhatsapp, FaLink } from '../../../utils/icon-fallbacks';

interface SocialShareProps {
  url?: string;
  title?: string;
  image?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  url = window.location.href,
  title = document.title,
  image
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  return (
    <div className="flex items-center space-x-2 mt-4">
      <button
        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, '_blank')}
        className="p-2 bg-blue-400 text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on Twitter"
      >
        <FaTwitter />
      </button>
      <button
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank')}
        className="p-2 bg-blue-600 text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on Facebook"
      >
        <FaFacebook />
      </button>
      <button
        onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`, '_blank')}
        className="p-2 bg-green-500 text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp />
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(url);
        }}
        className="p-2 bg-gray-500 text-white rounded-full hover:bg-opacity-80"
        aria-label="Copy link"
      >
        <FaLink />
      </button>
    </div>
  );
};

export default SocialShare;
