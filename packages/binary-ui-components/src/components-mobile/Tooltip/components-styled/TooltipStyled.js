import { BINARY_COLOR_GRAY_30, FONT_FAMILY_MAIN_400 } from 'binary-ui-styles';
import styled from 'styled-components';
import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_WIDTH, TOOLTIP_ARROW_SHIFT } from '../config';

export default styled.div`
  background-color: ${BINARY_COLOR_GRAY_30};
  border-radius: 6px;
  box-shadow: 0px 0px 3px 0px rgba(128, 128, 128, 0.5);
  color: #fff;
  cursor: default;
  font-family: ${FONT_FAMILY_MAIN_400};
  font-size: 13px;
  padding: 5px 10px;
  position: absolute;
  text-align: center;
  transition: opacity 0.3s ease-out;
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
            border-color: transparent transparent ${BINARY_COLOR_GRAY_30} transparent;
            bottom: 100%;
            right: ${TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH}px;
            margin-bottom: 0px;
          `;
        case 'bottom-right':
          return `
            border-color: transparent transparent ${BINARY_COLOR_GRAY_30} transparent;
            bottom: 100%;
            left: ${TOOLTIP_ARROW_SHIFT}px;
            margin-bottom: 0px;
          `;
        case 'top-left':
          return `
            border-color: ${BINARY_COLOR_GRAY_30} transparent transparent transparent;
            bottom: -${TOOLTIP_ARROW_HEIGHT * 2}px;
            right: ${TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH}px;
          `;
        case 'top-right':
          return `
            border-color: ${BINARY_COLOR_GRAY_30} transparent transparent transparent;
            bottom: -${TOOLTIP_ARROW_HEIGHT * 2}px;
            left: ${TOOLTIP_ARROW_SHIFT}px;
          `;
        default:
          return undefined;
      }
    }}
  }
`;
