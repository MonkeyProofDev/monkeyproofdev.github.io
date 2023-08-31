import React, { useState, useEffect } from 'react';

type TypewriterProps = {
    prefix: string[],
    text: string
  }

const Typewriter = ({text,prefix}:TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const typingSpeed = 50; // Adjust this value to control typing speed
const prefixShow: string | null = getRandomItemFromArray(prefix); 

  useEffect(() => {
    console.log(text);

    let currentIndex = -1;
    setDisplayText("");
    const typingInterval = setInterval(() => {
        

      setDisplayText((prevText) => {
        currentIndex++;
        return `${prevText}${text.charAt(currentIndex)}`;
      });

      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <>{prefixShow}&nbsp;{displayText}_<div id="cursor"></div></>;
};

function getRandomItemFromArray(array: string[]): string | null {
  if (array.length === 0) {
    return null; // Return null if the array is empty
  }

  const randomIndex: number = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default Typewriter;
