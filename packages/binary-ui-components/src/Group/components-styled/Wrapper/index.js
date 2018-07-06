import styled from 'styled-components';

export default styled.div`
  background-color: #ffffff;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${props => props.theme.sizeListItemHeight}px;
  max-width: 100%;
  width: 100%;
`;
