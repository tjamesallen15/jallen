import { useEffect, useRef, useState } from "react";

export const useDebounce = (message: string, delay: number) => {
  const [debounceMessage, setDebounceMessage] = useState("");
  const debounceTimer = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebounceMessage(message);
    }, delay);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [message, delay]);

  return { debounceMessage };
};
