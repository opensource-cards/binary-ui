import styled from 'styled-components';

export default styled.div`
  color: inherit;
  font-family: ${props => props.theme.fontFamily400};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeight400};
  overflow: hidden;
  padding: 6px 5px 5px 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
`;
