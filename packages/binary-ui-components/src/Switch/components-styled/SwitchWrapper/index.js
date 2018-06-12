import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  cursor: ${props => (props.isDisabled ? 'default' : 'pointer')};
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight}px;
  padding-left: 10px;
  width: 100%;
`;
