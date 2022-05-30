import { useState, useEffect } from "react";

const useObserver = (ref: React.MutableRefObject<any>): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callback = (entries: any): void => {
    const [entry] = entries;
    if (!isVisible) setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      callback,
      options
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return isVisible;
};

export default useObserver;
