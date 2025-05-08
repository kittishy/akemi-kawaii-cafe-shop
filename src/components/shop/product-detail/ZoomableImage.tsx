import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ZoomableImageProps {
  src: string;
  alt: string;
  magnification?: number; // Fator de ampliação do zoom
  showLens?: boolean; // Mostrar lente de aumento ou não
}

export function ZoomableImage({
  src,
  alt,
  magnification = 2.5,
  showLens = true,
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !imageRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calcular posição relativa do mouse dentro da imagem (0-1)
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    
    // Limitar valores entre 0 e 1
    const boundedX = Math.max(0, Math.min(1, relativeX));
    const boundedY = Math.max(0, Math.min(1, relativeY));
    
    // Definir posição para o zoom
    setPosition({ 
      x: boundedX, 
      y: boundedY 
    });
    
    // Calcular posição da lente
    if (showLens) {
      const lensSize = 80; // Tamanho da lente em pixels
      setLensPosition({
        x: Math.max(0, Math.min(width - lensSize, e.clientX - left - lensSize / 2)),
        y: Math.max(0, Math.min(height - lensSize, e.clientY - top - lensSize / 2))
      });
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsZoomed(true);
    }
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleTouchStart = () => {
    if (isMobile) {
      setIsZoomed(!isZoomed);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-2xl bg-muted"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {/* Imagem original */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-300"
      />
      
      {/* Lente de aumento (visível apenas em desktop) */}
      {isZoomed && showLens && !isMobile && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="absolute pointer-events-none border-2 border-primary bg-white/10 rounded-full z-10"
          style={{
            width: '80px',
            height: '80px',
            left: `${lensPosition.x}px`,
            top: `${lensPosition.y}px`,
          }}
        />
      )}
      
      {/* Modal de zoom (desktop) ou tela cheia (mobile) */}
      {isZoomed && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${isMobile ? 'fixed inset-0 z-50 bg-black flex items-center justify-center' : 'absolute inset-0 pointer-events-none z-20'}`}
          onClick={isMobile ? () => setIsZoomed(false) : undefined}
        >
          {isMobile ? (
            // Versão mobile: imagem em tela cheia com pinch-to-zoom nativo
            <div className="relative w-full h-full max-w-4xl max-h-screen overflow-auto">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full"
                onClick={() => setIsZoomed(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          ) : (
            // Versão desktop: zoom na posição do mouse
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
                backgroundSize: `${magnification * 100}%`,
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}
        </motion.div>
      )}
    </div>
  );
}