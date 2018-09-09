import { Easing } from 'react-native';
import {
  BINARY_COLOR_BLUE_30,
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_BLUE_50,
  BINARY_COLOR_BLUE_80,
  BINARY_COLOR_GRAY_40,
  BINARY_COLOR_GRAY_80,
  BINARY_COLOR_GREEN_30,
  BINARY_COLOR_YELLOW_50,
  BINARY_COLOR_RED_40,
  BINARY_COLOR_RED_50,
  BINARY_COLOR_SAND_60,
  BINARY_COLOR_SAND_80,
  BINARY_COLOR_SAND_90,
  BINARY_COLOR_SAND_MAIN,
  LIST_ITEM_HEIGHT,
  OPACITY_ACTIVE,
  OPACITY_DISABLED,
} from './index.native-and-web';

export const FONT_FAMILY_MAIN_100 = 'System';
export const FONT_FAMILY_MAIN_200 = 'System';
export const FONT_FAMILY_MAIN_300 = 'System';
export const FONT_FAMILY_MAIN_400 = 'System';
export const FONT_FAMILY_MAIN_500 = 'System';
export const FONT_FAMILY_MAIN_600 = 'System';
export const FONT_FAMILY_MAIN_700 = 'System';
export const FONT_FAMILY_MAIN_800 = 'System';
export const FONT_FAMILY_MAIN_900 = 'System';

export * from './index.native-and-web';

export const EASING_CURVE_FEEDBACK = Easing.bezier(0.455, 0.030, 0.515, 0.955);
export const EASING_CURVE_COMPONENT_STATE = Easing.bezier(0.420, 0.000, 0.580, 1.000);
export const EASING_CURVE_VIEW_STATE = Easing.bezier(0.190, 1.000, 0.220, 1.000);

export const THEME_MAIN = {
  colorBackgroundMain: BINARY_COLOR_SAND_MAIN,
  colorBlue30: BINARY_COLOR_BLUE_30,
  colorBlue40: BINARY_COLOR_BLUE_40,
  colorBlue50: BINARY_COLOR_BLUE_50,
  colorBlue80: BINARY_COLOR_BLUE_80,
  colorGray40: BINARY_COLOR_GRAY_40,
  colorGray80: BINARY_COLOR_GRAY_80,
  colorGreen30: BINARY_COLOR_GREEN_30,
  colorYellow50: BINARY_COLOR_YELLOW_50,
  colorRed40: BINARY_COLOR_RED_40,
  colorRed50: BINARY_COLOR_RED_50,
  colorSand60: BINARY_COLOR_SAND_60,
  colorSand80: BINARY_COLOR_SAND_80,
  colorSand90: BINARY_COLOR_SAND_90,
  fontFamily100: FONT_FAMILY_MAIN_100,
  fontFamily200: FONT_FAMILY_MAIN_200,
  fontFamily300: FONT_FAMILY_MAIN_300,
  fontFamily400: FONT_FAMILY_MAIN_400,
  fontFamily500: FONT_FAMILY_MAIN_500,
  fontFamily600: FONT_FAMILY_MAIN_600,
  fontFamily700: FONT_FAMILY_MAIN_700,
  fontFamily800: FONT_FAMILY_MAIN_800,
  fontFamily900: FONT_FAMILY_MAIN_900,
  fontWeight100: '100',
  fontWeight200: '200',
  fontWeight300: '300',
  fontWeight400: '400',
  fontWeight500: '600',
  fontWeight600: '800',
  fontWeight700: '800',
  fontWeight800: '900',
  fontWeight900: '900',
  letterSpacingNormal: 0,
  letterSpacing1: 0,
  letterSpacing2: 1,
  letterSpacing3: 2,
  opacityActive: OPACITY_ACTIVE,
  opacityDisabled: OPACITY_DISABLED,
  sizeListItemHeight: LIST_ITEM_HEIGHT,
};
