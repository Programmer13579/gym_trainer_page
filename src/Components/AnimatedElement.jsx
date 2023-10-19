import { useEffect } from 'react';

export const checkAndAnimateOnLoad = (elementRef) => {
  const element = elementRef.current;
  const elementPosition = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementPosition - windowHeight <= 0) {
    element.classList.add('animation_aparecer');
  }
};

export const useScrollEffect = (elementRef) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition - windowHeight <= 0) {
        element.classList.add('animation_aparecer');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);
};