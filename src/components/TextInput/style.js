import Styled from 'styled-components';

export const TextInputContainer = Styled.div`
  width: 70%;
  display: flex; 
  flex-wrap: wrap;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: normal;
  white-space: pre-wrap;
  text-align: left;
  word-spacing: normal;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1.8rem;
  margin-top: 50px;
  color: black;
  outline: none;
}
`;

export const Character = Styled.span`
${(props) => props.blink && `-webkit-animation: blink .5s infinite;`}
${(props) => props.hasError && `color: var(--taxes-decreases-color)`}
${(props) => props.typed && `color: var(--input-not-focus-color)`}

`;
