import React, { useState } from 'react';

import { TextInputContainer, Character } from './style';

const TextInput = ({ text }) => {
  const [errorIndexes, setErrorIndexes] = useState(new Set());
  const [targetIndex, setTargetIndex] = useState(0);
  const [successIndex, setSuccessIndex] = useState(new Set());

  const typing = (event) => {
    if (
      event.key === text[targetIndex] ||
      (text[targetIndex] === '␣' && event.key === ' ')
    ) {
      setTargetIndex(targetIndex + 1);
      if (!errorIndexes.has(targetIndex))
        setSuccessIndex(new Set([...successIndex, targetIndex]));
    } else if (
      text[targetIndex] !== event.key ||
      (text[targetIndex] === '␣' && event.key !== ' ')
    ) {
      setErrorIndexes(new Set([...errorIndexes, targetIndex]));
    }
  };

  return (
    <TextInputContainer
      tabIndex={0}
      onKeyDown={(event) => {
        typing(event);
      }}
    >
      {[...text].map((character, index) =>
        index === targetIndex ? (
          <Character blink key={`${index}`}>
            {character}
          </Character>
        ) : (
          <Character
            hasError={errorIndexes.has(index)}
            typed={successIndex.has(index)}
            key={`${index}`}
          >
            {character}
          </Character>
        )
      )}
    </TextInputContainer>
  );
};

export default TextInput;
