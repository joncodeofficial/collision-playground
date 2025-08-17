/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export const useStart = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
