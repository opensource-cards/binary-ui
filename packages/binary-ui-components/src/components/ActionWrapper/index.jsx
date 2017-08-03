import PropTypes from 'prop-types';
import React from 'react';
import { isLeftMouseButton } from '../../utils/events';

const propTypes = {
  children: PropTypes.any.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onSubmit: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onClick: undefined,
  onMouseDown: undefined,
  onSubmit: undefined,
  onTouchStart: undefined,
};

export default class ActionWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTapUp = () => { this.setActive(false); };
    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onClick(e) {
    const { isDisabled, onClick } = this.props;
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  }

  onMouseDown(e) {
    const { isDisabled, onMouseDown } = this.props;
    if (isDisabled) {
      return;
    }
    if (isLeftMouseButton(e)) {
      this.setActive(true);
    }
    if (onMouseDown) {
      onMouseDown(e);
    }
  }

  onSubmit(e) {
    const { isDisabled, onSubmit } = this.props;
    if (isDisabled) {
      return;
    }
    if (onSubmit) {
      onSubmit(e);
    }
  }

  onTouchStart(e) {
    const { isDisabled, onTouchStart } = this.props;
    if (isDisabled) {
      return;
    }
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
      children,
      isDisabled,
      onClick,
      onMouseDown,
      onTouchStart,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return React.cloneElement(children, {
      ...children.props,
      isActive,
      onClick: this.onClick,
      onMouseDown: this.onMouseDown,
      onSubmit: this.onSubmit,
      onTouchStart: this.onTouchStart,
      ...props,
    });
  }
}

ActionWrapper.propTypes = propTypes;
ActionWrapper.defaultProps = defaultProps;
