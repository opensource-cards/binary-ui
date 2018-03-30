import { TRANSITION_COMPONENT_STATE_OPACITY } from 'binary-ui-styles';
import styled from 'styled-components';
import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_WIDTH, TOOLTIP_ARROW_SHIFT } from '../config';

export default styled.div`
  background-color: ${props => props.theme.colorGray40};
  border-radius: 6px;
  box-shadow: 0px 0px 3px 0px rgba(128, 128, 128, 0.5);
  color: #fff;
  cursor: default;
  font-family: ${props => props.theme.fontFamily400};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight400};
  padding: 5px 10px;
  position: absolute;
  text-align: center;
  transition: ${TRANSITION_COMPONENT_STATE_OPACITY};
  user-select: none;
  white-space: nowrap;
  width: auto;
  z-index: 999;
  -webkit-font-smoothing: antialiased;
  ${props => (props.isVisible ? 'opacity: 1;' : 'opacity: 0;pointer-events: none;')}
  ${props => {
    switch (props.placement) {
      case 'bottom-left':
      case 'top-left': {
        return `
          right: ${-TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH}px;
          top: ${TOOLTIP_ARROW_HEIGHT}px;
        `;
      }
      case 'bottom-right':
      case 'top-right': {
        return `
          left: ${-TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH}px;
          top: ${TOOLTIP_ARROW_HEIGHT}px;
        `;
      }
      default:
        return undefined;
    }
  }}
  &::after {
    border-width: ${TOOLTIP_ARROW_WIDTH}px;
    border-style: solid;
    content: '';
    margin-left: -${TOOLTIP_ARROW_HEIGHT}px;
    position: absolute;
    ${props => {
      switch (props.placement) {
        case 'bottom-left':
          return `
            border-color: transparent transparent ${props.theme.colorGray40} transparent;
            bottom: 100%;
            right: ${TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH}px;
          `;
        case 'bottom-right':
          return `
            border-color: transparent transparent ${props.theme.colorGray40} transparent;
            bottom: 100%;
            left: ${TOOLTIP_ARROW_SHIFT}px;
          `;
        case 'top-left':
          return `
            border-color: ${props.theme.colorGray40} transparent transparent transparent;
            bottom: -${TOOLTIP_ARROW_HEIGHT * 2}px;
            right: ${TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH}px;
          `;
        case 'top-right':
          return `
            border-color: ${props.theme.colorGray40} transparent transparent transparent;
            bottom: -${TOOLTIP_ARROW_HEIGHT * 2}px;
            left: ${TOOLTIP_ARROW_SHIFT}px;
          `;
        default:
          return undefined;
      }
    }}
  }
`;
