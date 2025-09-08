import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scrolling for section navigation
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(targetId || '');
        
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // PowerPoint-style slide animations with intersection observer
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Add slide direction based on section index
          const sectionIndex = Array.from(document.querySelectorAll('section[id]')).indexOf(target);
          const isEven = sectionIndex % 2 === 0;
          
          // Main section slide animation
          setTimeout(() => {
            target.classList.add('slide-visible');
          }, 100);
          
          // Animate child elements with staggered delays
          const slideElements = target.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .slide-scale, .slide-children');
          slideElements.forEach((element, elementIndex) => {
            setTimeout(() => {
              element.classList.add('slide-visible');
            }, 200 + (elementIndex * 150));
          });
          
          // Add background slide effect
          if (isEven) {
            target.classList.add('bg-slide-left');
          } else {
            target.classList.add('bg-slide-right');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: '-5% 0px -5% 0px'
    });

    // Initialize sections with slide classes
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section, index) => {
      const isEven = index % 2 === 0;
      
      // Add section slide class based on alternating pattern
      section.classList.add('section-slide');
      if (!isEven) {
        section.classList.add('slide-from-right');
      }
      
      observer.observe(section);
    });

    // Add event listener for smooth scroll
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      observer.disconnect();
    };
  }, []);
};

export default useSmoothScroll;