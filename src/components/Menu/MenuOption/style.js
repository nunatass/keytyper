import Styled from 'styled-components';

export const MenuOptionContainer = Styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-top: 8px;

  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const Title = Styled.p`
  color: var(--primary-color);
  font-size: 0.9rem;
  padding: 1rem;
`;
