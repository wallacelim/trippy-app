import { useState } from 'react';

export const useDrawerRadio = initialVisibility => {
  const [visible, setVisible] = useState(initialVisibility);
  return {
    visible,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  };
};
