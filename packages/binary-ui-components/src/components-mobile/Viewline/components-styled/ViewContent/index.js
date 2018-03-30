import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  height: ${props => props.theme.sizeListItemHeight}px;
  outline: 0;
  overflow: hidden;
  text-overflow: hidden;
  white-space: no-wrap;
  width: 100%;
`;
