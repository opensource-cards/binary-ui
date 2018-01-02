import { Easing } from 'react-native';
import { FONT_FAMILY_MAIN_200, FONT_FAMILY_MAIN_600 } from './index.native-and-web';

export * from './index.native-and-web';

export const FONT_SET_BOLD_CSS = `
  color: hsl(0, 0%, 0%);
  font-family: ${FONT_FAMILY_MAIN_600};
  font-size: 13;
  letter-spacing: 2;
`;

export const FONT_SET_LIGHT_CSS = `
  color: hsl(0, 0%, 0%);
  font-family: ${FONT_FAMILY_MAIN_200};
  font-size: 18;
`;

export const INPUT_RESET_CSS = '';

export const EASING_CURVE_FEEDBACK = Easing.bezier(0.455, 0.030, 0.515, 0.955);
export const EASING_CURVE_COMPONENT_STATE = Easing.bezier(0.420, 0.000, 0.580, 1.000);
export const EASING_CURVE_VIEW_STATE = Easing.bezier(0.190, 1.000, 0.220, 1.000);
