import React from 'react';

import { KeyboardTyperContainer, RatingContainer } from './style';

import Rating from '../Rating';
import TextInput from '../TextInput';

const KeyboardTyper = ({ text }) => {
  const textWithSpaceReplaced = text.replaceAll(' ', '␣');
  return (
    <KeyboardTyperContainer>
      <RatingContainer>
        <Rating
          title={'Speed:'}
          rating={32.2}
          improvementTaxes={+3.66}
          color={'var(--taxes-decreases-color)'}
        />
        <Rating
          title={'Errors:'}
          rating={17.2}
          improvementTaxes={+11.29}
          color={'var(--taxes-decreases-color)'}
        />
        <Rating
          title={'Score:'}
          rating={153}
          improvementTaxes={-571}
          color={'var(--taxes-decreases-color)'}
        />
      </RatingContainer>
      <TextInput text={textWithSpaceReplaced} />
    </KeyboardTyperContainer>
  );
};

export default KeyboardTyper;
