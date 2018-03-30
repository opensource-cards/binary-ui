import styled from 'styled-components';

export default styled.select`
  border: none;
  box-sizing: border-box;
  outline: 0;

  appearance: none;
  background: transparent;
  border-radius: 0;
  height: ${props => props.theme.sizeListItemHeight}px;
  line-height: ${props => props.theme.sizeListItemHeight}px;
  overflow: hidden;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 35px;
  padding-top: 0;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;

  color: hsl(0, 0%, 0%);
  font-family: ${props => props.theme.fontFamily200};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeight200};
  letter-spacing: 0;
`;
