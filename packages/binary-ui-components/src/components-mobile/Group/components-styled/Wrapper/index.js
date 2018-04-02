import styled from 'styled-components';

export default styled.div`
  background-color: #ffffff;
  display: flex;
  height: ${props => props.theme.sizeListItemHeight}px;
  max-width: 100%;
  user-select: none;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
`;
