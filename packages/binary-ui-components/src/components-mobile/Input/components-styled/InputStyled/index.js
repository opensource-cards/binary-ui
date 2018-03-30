import styled from 'styled-components';

export default styled.input`
  border: none;
  box-sizing: border-box;
  outline: 0;

  appearance: none;
  border-radius: 0;
  cursor: text;
  display: inline-block;
  height: ${props => props.theme.sizeListItemHeight - 1}px;
  overflow: hidden;
  padding-bottom: 0;
  padding-left: 10px;
  padding-right: 0;
  padding-top: 0;
  resize: none;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  wrap: soft;
  &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  color: hsl(0, 0%, 0%);
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  letter-spacing: ${props => (props.isBold ? '2px' : 'normal')};
`;
