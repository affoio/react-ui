import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, container, onOpen, onClose }) => {
  const appendElementRef = useRef(document.createElement('div'));
  appendElementRef.current.style.zIndex = 999;
  appendElementRef.current.style.position = 'relative';

  useEffect(() => {
    const element = appendElementRef.current;
    container.appendChild(element);
    if (onOpen) onOpen();

    return () => {
      container.removeChild(element);
      if (onClose) onClose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(children, appendElementRef.current);
};

export default Portal;
