import React from 'react';
import { ART } from 'react-native';
import LogoSvg from './index.native-and-web';
import { DURATION_MSEC } from '../config';

const { Group, Shape, Surface } = ART;

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
