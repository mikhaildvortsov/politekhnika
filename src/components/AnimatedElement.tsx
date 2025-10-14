import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  animationType?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  animationType = 'fade-up',
  delay = 0,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    const hiddenClasses: Record<string, string> = {
      'fade-up': 'opacity-0 translate-y-10',
      'fade-down': 'opacity-0 -translate-y-10',
      'fade-left': 'opacity-0 translate-x-10',
      'fade-right': 'opacity-0 -translate-x-10',
      'scale': 'opacity-0 scale-95',
      'fade': 'opacity-0',
    };

    const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

    return `${baseClasses} ${isVisible ? visibleClasses : hiddenClasses[animationType] || hiddenClasses['fade-up']}`;
  };

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedElement;



