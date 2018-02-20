import { FONT_FAMILY_MAIN_200, FONT_FAMILY_MAIN_600 } from './index.native-and-web';

export * from './index.native-and-web';

export const FONT_SET_BOLD_CSS = `
  color: hsl(0, 0%, 0%);
  font-family: ${FONT_FAMILY_MAIN_600};
  font-size: 13px;
  letter-spacing: 2px;
`;

export const FONT_SET_LIGHT_CSS = `
  color: hsl(0, 0%, 0%);
  font-family: ${FONT_FAMILY_MAIN_200};
  font-size: 18px;
`;

export const INPUT_RESET_CSS = `
  border: none;
  box-sizing: border-box;
  outline: 0;
`;

export const EASING_CURVE_FEEDBACK = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
export const EASING_CURVE_COMPONENT_STATE = 'cubic-bezier(0.420, 0.000, 0.580, 1.000)';
export const EASING_CURVE_VIEW_STATE = 'cubic-bezier(0.190, 1.000, 0.220, 1.000)';

export const TRANSITION_FEEDBACK = `0.1s ${EASING_CURVE_FEEDBACK}`;
export const TRANSITION_FEEDBACK_OPACITY = `opacity ${TRANSITION_FEEDBACK}`;

export const TRANSITION_COMPONENT_STATE = `0.25s ${EASING_CURVE_COMPONENT_STATE}`;
export const TRANSITION_COMPONENT_STATE_OPACITY = `opacity ${TRANSITION_COMPONENT_STATE}`;

export const TRANSITION_VIEW_STATE = `0.5s ${EASING_CURVE_VIEW_STATE}`;
export const TRANSITION_VIEW_STATE_OPACITY = `opacity ${TRANSITION_VIEW_STATE}`;
export const TRANSITION_VIEW_STATE_TRANSFORM = `transform ${TRANSITION_VIEW_STATE}`;
