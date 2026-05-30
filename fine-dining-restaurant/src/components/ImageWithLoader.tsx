/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClassName?: string; // e.g. "aspect-[4/3]" or "aspect-video"
  objectFit?: 'cover' | 'contain' | 'fill';
}

export default function ImageWithLoader({
  src,
  alt,
  className = '',
  aspectRatioClassName = '',
  objectFit = 'cover',
}: ImageWithLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-neutral-900 ${aspectRatioClassName} ${className}`}>
      {/* Skeleton component layering */}
      <AnimatePresence>
        {(!isLoaded || hasError) && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-950"
          >
            {/* Elegant luxury pulse loader */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            
            <div className="flex flex-col items-center gap-2">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-gold" />
              </motion.div>
              {hasError && <span className="text-xs text-neutral-500 font-serif font-light">Asset Unavailable</span>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual image */}
      {!hasError && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.06 
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 1, 0.5, 1] 
          }}
          className={`w-full h-full object-${objectFit} transition-transform duration-700 hover:scale-[1.03]`}
          referrerPolicy="no-referrer"
        />
      )}

      {/* Styled inline shimmer animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
}
