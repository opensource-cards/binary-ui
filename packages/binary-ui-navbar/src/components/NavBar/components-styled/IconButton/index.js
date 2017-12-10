import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import { NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';
import { STACK_HEADER_HEIGHT } from '../../../../constants';

export default styled(ActionIcon)`
  ${NO_SELECT_CSS}
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  height: ${STACK_HEADER_HEIGHT}px;
  justify-content: center;
  width: 50px;
`;
