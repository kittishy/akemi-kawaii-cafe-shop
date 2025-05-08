import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, Instagram, Link, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FaWhatsapp, FaPinterest } from 'react-icons/fa';

interface SocialShareProps {
  url: string;
  title: string;
  image?: string;
}

export function SocialShare({ url, title, image }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedImage = image ? encodeURIComponent(image) : '';

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={18} />,
      url: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`,
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      name: 'Pinterest',
      icon: <FaPinterest size={18} />,
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`,
      color: 'bg-red-600 hover:bg-red-700',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={18} />,
      url: `https://www.instagram.com/?url=${encodedUrl}`,
      color: 'bg-pink-600 hover:bg-pink-700',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar link:', err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 mt-4"
    >
      <span className="text-sm text-muted-foreground flex items-center gap-1">
        <Share2 size={16} />
        Compartilhar:
      </span>
      
      <div className="flex gap-2">
        <TooltipProvider>
          {shareLinks.map((link) => (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className={`w-8 h-8 rounded-full text-white ${link.color}`}
                  onClick={() => window.open(link.url, '_blank')}
                  aria-label={`Compartilhar no ${link.name}`}
                >
                  {link.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Compartilhar no {link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className={`w-8 h-8 rounded-full ${copied ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}
                onClick={copyToClipboard}
                aria-label="Copiar link"
              >
                {copied ? <Check size={18} /> : <Link size={18} />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? 'Link copiado!' : 'Copiar link'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
}