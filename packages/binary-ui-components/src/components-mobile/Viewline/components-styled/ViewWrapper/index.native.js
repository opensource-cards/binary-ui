import styled from 'styled-components';

export default styled.View`
  align-items: center;
  background-color: #ffffff;
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight};
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  ${props => (props.isEdit
    ? `border-bottom-width: 1;border-bottom-color: ${props.theme.colorBackgroundMain};`
    : undefined
  )}
`;
