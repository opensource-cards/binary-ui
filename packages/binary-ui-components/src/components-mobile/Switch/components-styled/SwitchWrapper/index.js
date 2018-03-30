import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: #FFFFFF;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight}px;
  padding-left: 10px;
  width: 100%;
`;
