import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  padding-right: ${props => (props.isRequired ? '10px' : '0px')};
`;
