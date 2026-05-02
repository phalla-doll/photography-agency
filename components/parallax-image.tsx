'use client';

import { useRef, ReactNode } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  children?: ReactNode;
  parallaxOffset?: number; // percentage
}

export function ParallaxImage({ 
  src, 
  alt, 
  containerClassName = "", 
  imageClassName = "", 
  children,
  parallaxOffset = 8,
  ...props 
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxOffset}%`, `${parallaxOffset}%`]);
  
  // Calculate the required scale to prevent edge exposure
  // If offset is 8%, we need the image to extend at least 8% on each side.
  // 1 + (0.08 * 2) = 1.16 scale minimum. We'll use 1.2.
  const scale = 1 + (parallaxOffset * 2) / 100 + 0.04;

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div 
        style={{ y, scale }} 
        className="absolute inset-0 origin-center"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${imageClassName}`}
          referrerPolicy="no-referrer"
          {...props}
        />
      </motion.div>
      {!!children && <div className="absolute inset-0 pointer-events-none">{children}</div>}
    </div>
  );
}
