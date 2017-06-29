import styled from 'styled-components';
import {
  UNDERLINE_BORDER_STANDARD,
  UNDERLINE_BORDER_ACTIVE,
} from '../../utils/styles-photo';

export default styled.div`
  ${UNDERLINE_BORDER_STANDARD}
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.imageUploadUrl});
  border-radius: 30px;
  height: 60px;
  margin: 5px;
  width: 60px;
  background-size: cover;
  &:active {
    ${UNDERLINE_BORDER_ACTIVE}
  }
`;
