import styled from 'styled-components';

export default styled.View`
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight}px;
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : 1)};
  width: 100%;
`;
