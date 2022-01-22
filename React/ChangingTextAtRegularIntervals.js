import { useEffect, useState } from "react";

const useSwitchText = () => {
  const texts = ['text', 'text2', 'text3'];
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTextIndex((prevIndex) => prevIndex + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []

  return texts[textIndex % texts.length]
  
}
