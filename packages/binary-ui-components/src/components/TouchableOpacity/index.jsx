import { OPACITY_ACTIVE, OPACITY_TRANSITION } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { isLeftMouseButton } from '../../utils/events';

const propTypes = {
  activeOpacity: PropTypes.number,
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  activeOpacity: OPACITY_ACTIVE,
  style: {},
  onMouseDown: undefined,
  onTouchStart: undefined,
};

export default class TouchableOpacity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTapUp = () => { this.setActive(false); };
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onTapUp);
    window.addEventListener('touchend', this.onTapUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onTapUp);
    window.removeEventListener('touchend', this.onTapUp);
  }

  onMouseDown(e) {
    const { onMouseDown } = this.props;
    if (isLeftMouseButton(e)) {
      this.setActive(true);
    }
    if (onMouseDown) {
      onMouseDown(e);
    }
  }

  onTouchStart(e) {
    const { onTouchStart } = this.props;
    this.setActive(true);
    if (onTouchStart) {
      onTouchStart(e);
    }
  }

  setActive(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      activeOpacity,
      children,
      style,
      onMouseDown,
      onTouchStart,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return (
      <div
        style={{
          ...style,
          opacity: isActive ? activeOpacity : 1,
          transition: OPACITY_TRANSITION,
        }}
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        {...props}
      >
        {children}
      </div>
    );
  }
}

TouchableOpacity.propTypes = propTypes;
TouchableOpacity.defaultProps = defaultProps;
