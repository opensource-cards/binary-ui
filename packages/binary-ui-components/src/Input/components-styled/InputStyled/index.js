import styled from 'styled-components';

export default styled.input`
  appearance: none;
  border-radius: 0;
  color: hsl(0, 0%, 0%);
  cursor: ${props => (props.isDisabled ? 'default' : 'text')};
  border: none;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => (props.isBold ? props.theme.fontFamily400 : props.theme.fontFamily200)};
  font-size: 16px;
  font-weight: ${props => (props.isBold ? props.theme.fontWeight400 : props.theme.fontWeight200)};
  height: ${props => props.theme.sizeListItemHeight - 1}px;
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : '1')};
  outline: 0;
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
`;
