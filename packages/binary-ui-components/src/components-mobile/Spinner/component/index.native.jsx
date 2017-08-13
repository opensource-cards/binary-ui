import React from 'react';
import { Group, Shape, Surface } from 'react-native/Libraries/ART/ReactNativeART';
import LogoSvg from './index.native-and-web';
import { DURATION_MSEC } from '../config';

// NOTE: animation is for some reason ~2 times slower than on a web
export default function (props) {
  return (
    <LogoSvg
      duration={DURATION_MSEC / 2}
      Group={Group}
      Shape={Shape}
      Surface={Surface}
      {...props}
    />
  );
}
