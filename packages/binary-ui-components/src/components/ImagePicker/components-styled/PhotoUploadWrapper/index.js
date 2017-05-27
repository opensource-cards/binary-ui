import styled from 'styled-components';
import {
  UNDERLINE_BORDER_STANDARD_WEB,
  UNDERLINE_BORDER_ACTIVE_WEB,
} from '../../utils/styles-photo';

export default styled.div`
  ${UNDERLINE_BORDER_STANDARD_WEB}
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.noImageUrl});
  border-radius: 30px;
  height: 60px;
  margin: 5px;
  width: 60px;
  background-size: cover;
  &:active {
    ${UNDERLINE_BORDER_ACTIVE_WEB}
    /* opacity: 0.5; */
  }
`;
