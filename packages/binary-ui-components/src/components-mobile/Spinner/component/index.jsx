import React from 'react';
import ART from 'react-art-svg-renderer';
import LogoSvg from './index.native-and-web';
import { DURATION_MSEC } from '../config';

const { Group, Shape, Surface } = ART;

const propTypes = {};

const defaultProps = {};

const LogoSvgWeb = (props) => (
  <LogoSvg
    duration={DURATION_MSEC}
    Group={Group}
    Shape={Shape}
    Surface={Surface}
    {...props}
  />
);

LogoSvgWeb.propTypes = propTypes;
LogoSvgWeb.defaultProps = defaultProps;

export default LogoSvgWeb;
