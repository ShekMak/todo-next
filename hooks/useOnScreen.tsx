import { useEffect, useState } from 'react'

function useOnScreen(ref: any, rootMargin = '0px') {
    const [isVisible, setIsVisible] = useState<boolean | string>(false);

    useEffect(() => {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
          },
          {
            rootMargin,
            threshold: 0.75,
          }
        )

        const currentElement = ref?.current?.lastElementChild;

        if (currentElement) {
          observer.observe(currentElement);
        }
    
        return () => {
          observer.unobserve(currentElement);
        };
      }else {
        setIsVisible("Navigator doesn't support IntersectionObserver")
      }
    }, [])

    return isVisible;
}

export default useOnScreen