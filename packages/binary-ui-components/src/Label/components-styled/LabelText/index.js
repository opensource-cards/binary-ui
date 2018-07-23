import styled from 'styled-components';

export default styled.div`
  color: hsl(0, 0%, 0%);
  display: inline-block;
  font-family: ${props => (props.isBold ? props.theme.fontFamily400 : props.theme.fontFamily200)};
  font-size: 16px;
  font-weight: ${props => (props.isBold ? props.theme.fontWeight400 : props.theme.fontWeight200)};
  height: ${props => props.theme.sizeListItemHeight}px;
  line-height: ${props => props.theme.sizeListItemHeight}px;
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : 1)};
  outline: 0;
  overflow: hidden;
  pointer-events: ${props => (props.isDisabled ? 'none' : 'auto')};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
