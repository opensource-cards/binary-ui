import React from 'react';
import LogoSvg from './index.native-and-web';

/* eslint-disable global-require */
// NOTE: window variable should not be defined on a server!
const ReactArt = (typeof window === 'undefined')
  ? undefined
  : (() => require('react-art'))();
/* eslint-enable */

const propTypes = {};

const defaultProps = {};

export default class LogoSvgWeb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAllowRendering: false,
    };
  }

  componentDidMount() {
    if (this.state.isAllowRendering === false) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState(() => ({
        isAllowRendering: true,
      }));
      /* eslint-enable react/no-did-mount-set-state */
    }
  }

  render() {
    if (this.state.isAllowRendering === false) {
      return null;
    }
    const { Group, Shape, Surface } = ReactArt;
    return (
      <LogoSvg
        Group={Group}
        Shape={Shape}
        Surface={Surface}
        {...this.props}
      />
    );
  }
}

LogoSvgWeb.propTypes = propTypes;
LogoSvgWeb.defaultProps = defaultProps;
