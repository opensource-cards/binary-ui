import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../ActionableIcon';
import { isLeftMouseButton } from '../../utils/events';

const ICON_STYLE = { paddingRight: 10 };

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onMouseDown: undefined,
  onTouchStart: undefined,
};

export default class ActionListItemIcon extends React.Component {

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
      isDisabled,
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
          color={BINARY_COLOR_GRAY_40}
          isActive={isActive}
          isDisabled={isDisabled}
          size={18}
          style={ICON_STYLE}
          renderIcon={renderIcon}
        />
      </div>
    );
  }
}

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;
