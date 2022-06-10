import { useState, useEffect } from "react";

const useObserver = (ref: React.MutableRefObject<any>): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const refCopy = ref;
    const callback = (entries: any): void => {
      const [entry] = entries;
      if (!isVisible) setIsVisible(entry.isIntersecting);
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      callback,
      options
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (refCopy.current) observer.unobserve(refCopy.current);
    };
  }, [ref, isVisible]);

  return isVisible;
};

export default useObserver;
