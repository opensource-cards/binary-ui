import React from 'react';
import { Group, Shape, Surface } from 'react-native/Libraries/ART/ReactNativeART';
import LogoSvg from './index.native-and-web';

export default function (props) {
  return (
    <LogoSvg
      {...props}
      Group={Group}
      Shape={Shape}
      Surface={Surface}
    />
  );
}
