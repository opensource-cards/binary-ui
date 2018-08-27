import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight}px;
  justify-content: space-between;
  width: 100%;
`;
