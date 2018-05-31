import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight}px;
  width: 100%;
`;
