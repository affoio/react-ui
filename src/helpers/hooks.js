import { useEffect, useState } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('focus', listener, true);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
      document.removeEventListener('focus', listener);
    };
  }, [ref, handler]);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
};
