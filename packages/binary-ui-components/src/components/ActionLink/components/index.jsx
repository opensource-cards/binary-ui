import PropTypes from 'prop-types';
import React from 'react';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionLinkRender from '../components-styled/ActionLinkRender';
import ActionableIcon from '../../ActionableIcon';
import ActionableText from '../../ActionableText';
import { isLeftButton } from '../../../utils/events';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  renderIconLeft: undefined,
  renderIconRight: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onTouchStart: undefined,
};

export default class ActionLink extends React.Component {

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
        <ActionableIcon isActive={isActive} isDisabled={isDisabled} renderIcon={renderIcon} />
      </ActionableIconWrapper>
    );
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      children,
      isDisabled,
      renderIconLeft,
      renderIconRight,
      onClick,
      onMouseDown,
      onTouchStart,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return (
      <ActionLinkRender
        onClick={!isDisabled && onClick}
        onMouseDown={!isDisabled && this.onMouseDown}
        onTouchStart={!isDisabled && this.onTouchStart}
        {...props}
      >
        {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
        <ActionableText isActive={isActive} isDisabled={isDisabled} >
          {children}
        </ActionableText>
        {renderIconRight ? this.renderIcon(renderIconRight) : null}
      </ActionLinkRender>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;
