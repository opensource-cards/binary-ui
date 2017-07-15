import { FONT_FAMILY_MAIN } from 'binary-ui-styles/web';
import { BINARY_COLOR_GRAY_30 } from 'binary-ui-styles';
import styled from 'styled-components';

const TOOLTIP_ARROW_HEIGHT = 5;
const TOOLTIP_ARROW_WIDTH = 5;
const TOOLTIP_ARROW_SHIFT = 20;

export default styled.div`
  background-color: ${BINARY_COLOR_GRAY_30};
  border-radius: 6px;
  box-shadow: 0px 0px 3px 0px rgba(128, 128, 128, 0.5);
  color: #fff;
  cursor: default;
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 13px;
  padding: 5px 10px;
  position: absolute;
  text-align: center;
  transition: opacity 300ms ease-out;
  width: auto;
  white-space: nowrap;
  user-select: none;
  z-index: 999;
  -webkit-font-smoothing: antialiased;
  ${props => (props.isVisible ? 'opacity: 1;' : 'opacity: 0;')}
  ${props => {
    // if no parent - do not display tooltip
    if (!props.parentDOM || !props.targetDOM) {
      return 'display: none;';
    }
    const boundingParentRect = props.parentDOM.getBoundingClientRect();
    const boundingTargetRect = props.targetDOM.getBoundingClientRect();
    switch (props.placement) {
      case 'bottom-right': {
        const commonX = boundingTargetRect.left - boundingParentRect.left;
        const commonY = boundingTargetRect.top - boundingParentRect.top;
        const targetCenterX = boundingTargetRect.width / 2;
        return `
          left: ${commonX + targetCenterX - TOOLTIP_ARROW_SHIFT}px;
          top: ${commonY + boundingTargetRect.height + TOOLTIP_ARROW_HEIGHT}px;
        `;
      }
      case 'bottom-left': {
        const commonX = 0;
        const commonY = boundingTargetRect.top - boundingParentRect.top;
        const targetCenterX = boundingTargetRect.width / 2;
        return `
          right: ${commonX + targetCenterX - TOOLTIP_ARROW_SHIFT}px;
          top: ${commonY + boundingTargetRect.height + TOOLTIP_ARROW_HEIGHT}px;
        `;
      }
      default:
        return undefined;
    }
  }}
  &::after {
    border-width: ${TOOLTIP_ARROW_WIDTH}px;
    border-style: solid;
    border-color: transparent transparent ${BINARY_COLOR_GRAY_30} transparent;
    bottom: 100%;
    content: '';
    margin-left: -${TOOLTIP_ARROW_HEIGHT}px;
    position: absolute;
    ${props => {
      // const boundingClientRect = props.targetDOM.getBoundingClientRect();
      switch (props.placement) {
        case 'bottom-left':
          return `right: ${TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH}px;`;
        case 'bottom-right':
          return `left: ${TOOLTIP_ARROW_SHIFT}px;`;
        default:
          return undefined;
      }
    }}
  }
`;
