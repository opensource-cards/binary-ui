import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../ActionableIcon';
import { isLeftButton } from '../../utils/events';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  color: undefined,
  isDisabled: false,
  size: undefined,
  onMouseDown: undefined,
  onTouchStart: undefined,
};

export default class ActionIcon extends React.Component {

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
    if (isLeftButton(e)) {
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
      color,
      isDisabled,
      size,
      renderIcon,
      onMouseDown,
      onTouchStart,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return (
      <div
        onMouseDown={!isDisabled && this.onMouseDown}
        onTouchStart={!isDisabled && this.onTouchStart}
        {...props}
      >
        <ActionableIcon
          color={color}
          isActive={isActive}
          isDisabled={isDisabled}
          size={size}
          renderIcon={renderIcon}
        />
      </div>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;
