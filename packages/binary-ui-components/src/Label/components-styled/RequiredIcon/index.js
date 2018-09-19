import styled from 'styled-components';

export default styled.div`
  color: ${props => props.theme.colorRed50};
  font-family: ${props => (props.isBold ? props.theme.fontFamily400 : props.theme.fontFamily200)};
  font-size: 16px;
  font-weight: ${props => (props.isBold ? props.theme.fontWeight400 : props.theme.fontWeight200)};
  line-height: ${props => props.theme.sizeListItemHeight}px;
`;
