import React, { useCallback, useEffect } from 'react';
import { UseIntersectProps } from './model';

const useIntersect = <T extends HTMLElement | null>(props: UseIntersectProps<T>) => {
  const { targetRef, intersectHandler, options } = props;

  const intersectCallback = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        intersectHandler();
      }
    },
    [intersectHandler]
  );

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(intersectCallback, options);
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef, options, intersectHandler]);

  return;
};

export default useIntersect;
