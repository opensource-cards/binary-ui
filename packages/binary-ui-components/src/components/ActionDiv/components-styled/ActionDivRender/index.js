import styled from 'styled-components';
import { CARDS_ICON_CSS } from '../../../../utils/styles';
import { CARDS_ICON_DISABLED_CSS } from '../../../../utils/styles.universal';
import { OPACITY_ACTIVE, OPACITY_TRANSITION } from '../../../../utils/styles-api';

export default styled.div`
  ${CARDS_ICON_CSS}
  cursor: default;
  opacity: 1;
  transition: ${OPACITY_TRANSITION};
  ${props => (
    props.isDisabled
      ? CARDS_ICON_DISABLED_CSS
      : `&:active { opacity: ${OPACITY_ACTIVE}; }`
  )}
`;
