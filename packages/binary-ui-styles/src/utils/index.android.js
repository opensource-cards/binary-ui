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
  LIST_ITEM_HEIGHT,
  OPACITY_ACTIVE,
  OPACITY_DISABLED,
} from './index.native-and-web';

export const FONT_FAMILY_MAIN_100 = 'Roboto';
export const FONT_FAMILY_MAIN_200 = 'Roboto';
export const FONT_FAMILY_MAIN_300 = 'Roboto';
export const FONT_FAMILY_MAIN_400 = 'Roboto';
export const FONT_FAMILY_MAIN_500 = 'Roboto';
export const FONT_FAMILY_MAIN_600 = 'Roboto';
export const FONT_FAMILY_MAIN_700 = 'Roboto';
export const FONT_FAMILY_MAIN_800 = 'Roboto';
export const FONT_FAMILY_MAIN_900 = 'Roboto';

export * from './index.native-and-web';

export const EASING_CURVE_FEEDBACK = Easing.bezier(0.455, 0.030, 0.515, 0.955);
export const EASING_CURVE_COMPONENT_STATE = Easing.bezier(0.420, 0.000, 0.580, 1.000);
export const EASING_CURVE_VIEW_STATE = Easing.bezier(0.190, 1.000, 0.220, 1.000);

export const THEME_MAIN = {
  colorBackgroundMain: BINARY_COLOR_SAND_90,
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
  fontWeight500: '500',
  fontWeight600: '600',
  fontWeight700: '700',
  fontWeight800: '800',
  fontWeight900: '900',
  letterSpacingNormal: 0,
  letterSpacing1: 1,
  letterSpacing2: 2,
  letterSpacing3: 3,
  opacityActive: OPACITY_ACTIVE,
  opacityDisabled: OPACITY_DISABLED,
  sizeListItemHeight: LIST_ITEM_HEIGHT,
};
