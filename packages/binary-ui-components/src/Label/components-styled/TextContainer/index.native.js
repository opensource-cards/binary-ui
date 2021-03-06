import styled from 'styled-components';

export default styled.View`
  display: flex;
  height: ${props => props.theme.sizeListItemHeight}px;
  justify-content: center;
  max-width: 100%;
  padding-right: ${props => (props.isRequired ? '10px' : '0px')};
`;
