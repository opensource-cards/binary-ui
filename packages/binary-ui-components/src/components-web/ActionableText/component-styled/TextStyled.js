import { NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';
import { OPACITY_TRANSITION } from '../../../utils/styles-api';

export default styled.span`
  ${NO_SELECT_CSS}
  transition: ${OPACITY_TRANSITION};
`;
