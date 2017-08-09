import styled from 'styled-components';

export default styled.div`
  border: 1px solid lightgray;
  box-sizing: border-box;
  box-shadow: 0 0px 3px rgba(0,0,0,0.1);
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.imageUploadUrl});
  border-radius: 30px;
  height: 60px;
  margin: 5px;
  width: 60px;
  background-size: cover;
  &:active {
    opacity: 0.5;
  }
`;
