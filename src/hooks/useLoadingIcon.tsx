import { useEffect, useState } from 'react';

export const useLoading = (cbFunc: Function, delay: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      cbFunc();
    }, delay);
    return () => {
      clearTimeout(timer);
      setIsLoading(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isLoading,
  };
};
