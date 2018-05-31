import styled from 'styled-components';

export default styled.select`
  appearance: none;
  background: transparent;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: hsl(0, 0%, 0%);
  font-family: ${props => props.theme.fontFamily200};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight200};
  height: ${props => props.theme.sizeListItemHeight}px;
  line-height: ${props => props.theme.sizeListItemHeight}px;
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : '1')};
  outline: 0;
  overflow: hidden;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 35px;
  padding-top: 0;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
`;
