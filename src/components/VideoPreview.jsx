import { useEffect, useRef } from 'react';

export default function VideoPreview({ src, poster, className, label }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const playVideo = () => {
      video.play().catch((error) => {
        if (error.name !== 'NotAllowedError' && error.name !== 'AbortError') {
          console.error(`Unable to play preview video "${label}".`, error);
        }
      });
    };

    if (!('IntersectionObserver' in window)) {
      playVideo();
      return () => video.pause();
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        playVideo();
      } else {
        video.pause();
      }
    }, { rootMargin: '100px 0px' });

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [label]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className={className}
      aria-label={label}
    />
  );
}
