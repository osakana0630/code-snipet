import { useEffect, useState } from "react";

export default function App() {
  const loadingTexts = ['loading', 'loading2', 'loading3'];
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setLoadingTextIndex((prevIndex) => prevIndex + 1);
    }, 100);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <p>{loadingTexts[loadingTextIndex % loadingTexts.length]}</p>
}

