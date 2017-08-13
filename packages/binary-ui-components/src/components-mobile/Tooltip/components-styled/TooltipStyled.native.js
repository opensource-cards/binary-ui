import { BINARY_COLOR_GRAY_30 } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_SHIFT } from '../config';

export default styled.View.attrs({
  style: () => ({
    shadowOffset: { width: 0, height: 1 },
  }),
})`
  align-items: center;
  background-color: ${BINARY_COLOR_GRAY_30};
  border-radius: 5;
  elevation: 1;
  padding-horizontal: 10;
  padding-vertical: 5;
  position: absolute;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 2;
  ${props => {
    const { parentBoundingRect, targetBoundingRect } = props;
    switch (props.placement) {
      case 'bottom-left': {
        const commonX = parentBoundingRect.px - targetBoundingRect.px + parentBoundingRect.width - targetBoundingRect.width;
        const commonY = targetBoundingRect.py - parentBoundingRect.py;
        const targetCenterX = targetBoundingRect.width / 2;
        return `
          align-self: flex-start;
          right: ${(commonX + targetCenterX - TOOLTIP_ARROW_SHIFT) / 2}px;
          top: ${commonY + targetBoundingRect.height + TOOLTIP_ARROW_HEIGHT}px;
        `;
      }
      case 'bottom-right': {
        const commonX = targetBoundingRect.px - parentBoundingRect.px;
        const commonY = targetBoundingRect.py - parentBoundingRect.py;
        const targetCenterX = targetBoundingRect.width / 2;
        return `
          align-self: flex-end;
          left: ${(commonX + targetCenterX - TOOLTIP_ARROW_SHIFT) / 2}px;
          top: ${commonY + targetBoundingRect.height + TOOLTIP_ARROW_HEIGHT}px;
        `;
      }
      default:
        return undefined;
    }
  }}
`;
