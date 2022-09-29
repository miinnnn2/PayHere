import React from 'react';

export interface UseIntersectProps<T> {
  targetRef: React.RefObject<T>;
  intersectHandler: () => void;
  options?: IntersectionObserverInit;
}
