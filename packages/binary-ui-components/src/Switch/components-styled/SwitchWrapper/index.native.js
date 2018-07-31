import styled from 'styled-components';

export default styled.View`
  align-items: center;
  background-color: #ffffff;
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight}px;
  justify-content: space-between;
  width: 100%;
`;
