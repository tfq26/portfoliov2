// src/utils/LazyLoad.jsx
import { lazy, Suspense } from 'react';

const LazyLoad = (importFunc, { fallback = null } = {}) => {
  const LazyComponent = lazy(importFunc);
  
  const LazyWrapper = (props) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );

  LazyWrapper.displayName = 'LazyLoad';
  
  return LazyWrapper;
};

export default LazyLoad;    