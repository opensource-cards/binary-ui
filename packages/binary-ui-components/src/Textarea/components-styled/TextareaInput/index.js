import styled from 'styled-components';

export default styled.textarea`
  background-color: transparent;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: hsl(0, 0%, 0%);
  cursor: text;
  font-family: ${props => props.theme.fontFamily200};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight200};
  min-height: ${props => props.styleHeight}px;
  outline: 0;
  overflow-y: ${props => (props.isAutoSize ? 'hidden' : 'auto')};
  padding: 10px;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;
