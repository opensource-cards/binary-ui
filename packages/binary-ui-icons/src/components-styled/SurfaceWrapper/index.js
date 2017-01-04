import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  height: ${props => props.size}px;
  pointer-events: visibleStroke;
  vertical-align: middle;
  width: ${props => props.size}px;
`;
