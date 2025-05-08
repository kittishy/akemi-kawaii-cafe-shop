import React from 'react';
// Try-catch for importing icons to prevent build failures
let FaTwitter, FaFacebook, FaWhatsapp, FaLink;
try {
  // Dynamic import to avoid build issues
  const icons = require('react-icons/fa');
  FaTwitter = icons.FaTwitter;
  FaFacebook = icons.FaFacebook;
  FaWhatsapp = icons.FaWhatsapp;
  FaLink = icons.FaLink;
} catch (error) {
  // Fallback icons as simple components
  const FallbackIcon = ({ className }: { className?: string }) => (
    <div className={`w-5 h-5 ${className || ''}`}></div>
  );
  FaTwitter = FallbackIcon;
  FaFacebook = FallbackIcon;
  FaWhatsapp = FallbackIcon;
  FaLink = FallbackIcon;
}

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex space-x-3 mt-4">
      <button
        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, '_blank')}
        className="p-2 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on Twitter"
      >
        {FaTwitter ? <FaTwitter /> : 'T'}
      </button>
      <button
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank')}
        className="p-2 bg-[#4267B2] text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on Facebook"
      >
        {FaFacebook ? <FaFacebook /> : 'F'}
      </button>
      <button
        onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`, '_blank')}
        className="p-2 bg-[#25D366] text-white rounded-full hover:bg-opacity-80"
        aria-label="Share on WhatsApp"
      >
        {FaWhatsapp ? <FaWhatsapp /> : 'W'}
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
        }}
        className="p-2 bg-gray-500 text-white rounded-full hover:bg-opacity-80"
        aria-label="Copy link"
      >
        {FaLink ? <FaLink /> : 'L'}
      </button>
    </div>
  );
};

export default SocialShare;