import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../../ActionableIcon';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionButtonStyled from '../components-styled/ActionButtonStyled';
import ActionButtonWrapper from '../components-styled/ActionButtonWrapper';
import { isLeftButton } from '../../../utils/events';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onSubmit: PropTypes.func,
  onTouchStart: PropTypes.func,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  onClick: undefined,
  onMouseDown: undefined,
  onSubmit: undefined,
  onTouchStart: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

export default class ActionButton extends React.Component {

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

  renderIcon(renderIcon) {
    const { isDisabled } = this.props;
    const { isActive } = this.state;
    return (
      <ActionableIconWrapper>
        <ActionableIcon
          color={BINARY_COLOR_BLUE_40}
          isActive={isActive}
          isDisabled={isDisabled}
          renderIcon={renderIcon}
        />
      </ActionableIconWrapper>
    );
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      children,
      isDisabled,
      onClick,
      onMouseDown,
      onSubmit,
      onTouchStart,
      renderIconLeft,
      renderIconRight,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <ActionButtonStyled
        isDisabled={isDisabled}
        onClick={!isDisabled && onClick}
        onSubmit={!isDisabled && onSubmit}
        onMouseDown={!isDisabled && this.onMouseDown}
        onTouchStart={!isDisabled && this.onTouchStart}
        {...props}
      >
        <ActionButtonWrapper>
          {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
          {children}
          {renderIconRight ? this.renderIcon(renderIconRight) : null}
        </ActionButtonWrapper>
      </ActionButtonStyled>
    );
  }
}

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;
