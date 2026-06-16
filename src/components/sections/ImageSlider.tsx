'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-slider">
      {images.map((src, i) => (
        <div key={src} className={`hero-slider__slide ${i === index ? 'hero-slider__slide--active' : ''}`}>
          <Image
            src={src}
            alt={`${alt} - Slide ${i + 1}`}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="hero-slider__image"
          />
        </div>
      ))}
      <div className="hero-slider__overlay">
        <div className="hero-slider__status">
          <span>Live care coordination</span>
          <strong>{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</strong>
        </div>
        <div className="hero-slider__dots" aria-label="Hero banner slides">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={i === index ? 'hero-slider__dot hero-slider__dot--active' : 'hero-slider__dot'}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
            />
          ))}
        </div>
        <span key={index} className="hero-slider__progress" />
      </div>
    </div>
  );
}
