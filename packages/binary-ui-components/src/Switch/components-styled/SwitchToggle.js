import styled from 'styled-components';

export default styled.div`
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : 1)};
  margin-right: 10px;
  width: ${props => props.theme.sizeListItemHeight}px;
`;
