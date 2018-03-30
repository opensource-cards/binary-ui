import styled from 'styled-components';

export default styled.textarea`
  border: none;
  box-sizing: border-box;
  outline: 0;

  background-color: transparent;
  border-radius: 0;
  cursor: text;
  height: ${props => props.styleHeight}px;
  padding: 10px;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;

  color: hsl(0, 0%, 0%);
  font-family: ${props => props.theme.fontFamily200};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeight200};
  letter-spacing: 0;
`;
