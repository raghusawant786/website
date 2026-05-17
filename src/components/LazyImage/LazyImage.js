import React, { useState, useEffect, useRef } from 'react';
import styles from './LazyImage.module.css';

/**
 * LazyImage Component
 * Provides native lazy loading with intersection observer fallback
 * Supports blur-up effect and placeholder while loading
 */
const LazyImage = ({
  src,
  alt = 'Image',
  width = '100%',
  height = 'auto',
  className = '',
  onClick = null,
  onError = null,
  title = '',
  placeholderBg = '#f0f0f0',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Intersection Observer for older browsers or initial detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const shouldLoadImage = isInView || isLoaded;

  return (
    <div
      className={`${styles.lazyImageWrapper} ${className}`}
      style={{
        width,
        height,
        backgroundColor: !isLoaded ? placeholderBg : 'transparent',
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
      title={title}
    >
      {shouldLoadImage && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={onError}
          className={`${styles.image} ${isLoaded ? styles.loaded : styles.loading}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      {!isLoaded && isInView && (
        <div className={styles.skeleton} aria-label="Loading image..." />
      )}
    </div>
  );
};

export default LazyImage;
