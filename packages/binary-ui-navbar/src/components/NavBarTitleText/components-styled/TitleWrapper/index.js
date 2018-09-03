import styled from 'styled-components';

// Transition applies if title is clickable.
export default styled.div`
  font-family: ${props => props.theme.fontFamily500};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight500};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
