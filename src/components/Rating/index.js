import React from 'react';

import { RatingContainer, Title, RatingText, ImprovementTaxes } from './style';

const Rating = ({ title, rating, improvementTaxes, color }) => {
  return (
    <RatingContainer>
      <Title>{title}</Title>
      <RatingText>{rating}</RatingText>(
      <ImprovementTaxes color={color}>{improvementTaxes}</ImprovementTaxes>)
    </RatingContainer>
  );
};

export default Rating;
