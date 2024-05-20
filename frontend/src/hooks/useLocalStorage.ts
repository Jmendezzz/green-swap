import { useEffect, useState } from 'react';

export function useLocalStorage(initialState: unknown, key: string) {
  const [value, setValue] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

    return [value, setValue];
}
