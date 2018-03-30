import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  height: ${props => props.theme.sizeListItemHeight}px;
  line-height: ${props => props.theme.sizeListItemHeight}px;
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : '1')};
  outline: 0;
  overflow: hidden;
  pointer-events: ${props => (props.isDisabled ? 'none' : 'auto')};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  color: hsl(0, 0%, 0%);
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  letter-spacing: ${props => (props.isBold ? '2px' : 'normal')};
`;
