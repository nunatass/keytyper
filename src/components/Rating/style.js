import Styled from 'styled-components';

export const RatingContainer = Styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: rgba(0, 0, 0, 0.2);
  font-size:1.3rem;
  margin-left:10px;
`;
export const Title = Styled.p`
  color: var(--text-color);
  font-size: 0.9rem;
  margin-left:10px;
`;
export const RatingText = Styled.p`
  color: black;
  font-size: 1rem;
  margin-left:10px;
  margin-right:10px;
  font-weight:600;
`;
export const ImprovementTaxes = Styled.p`
  color: ${(props) => props.color || 'var(--text-color)'};
  font-size: 1.2rem;
  font-weight:500;
`;
