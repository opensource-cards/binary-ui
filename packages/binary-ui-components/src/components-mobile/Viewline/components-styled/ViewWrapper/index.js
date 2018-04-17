import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  cursor: default;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: ${props => props.theme.sizeListItemHeight}px;
  padding-left: 10px;
  ${props =>
    (props.isEdit
      ? `border-bottom: 1px solid ${props.theme.colorBackgroundMain}`
      : undefined)};
`;
