import styled from 'styled-components/native';
import {
  UNDERLINE_BORDER_STANDARD_NATIVE,
  UNDERLINE_BORDER_ACTIVE_NATIVE,
} from '../../utils/styles-photo';

export default styled.Image`
  ${UNDERLINE_BORDER_STANDARD_NATIVE}
  /*
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  */
  border-radius: 30;
  height: 60;
  margin: 5;
  width: 60;

  &:active {
    ${UNDERLINE_BORDER_ACTIVE_NATIVE}
    /* opacity: 0.5; */
  }

  &:hover {
    ${UNDERLINE_BORDER_ACTIVE_NATIVE}
  }
`;
