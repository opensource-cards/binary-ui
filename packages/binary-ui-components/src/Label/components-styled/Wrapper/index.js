import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight}px;
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : 1)};
  pointer-events: ${props => (props.isDisabled ? 'none' : 'auto')};
  width: 100%;
`;
