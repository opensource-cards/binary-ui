import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionListItemIconRender from '../components-styled/ActionListItemIconRender';
import ActionLinkInlineWrapper from '../components-styled/ActionLinkInlineWrapper';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionableIcon from '../../ActionableIcon';
import ActionableText from '../../ActionableText';
import { isLeftButton } from '../../../utils/events';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  size: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onTouchStart: undefined,
};

export default class ActionLinkInline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTapUp = () => { this.setActive(false); };
    this.onClick = this.onClick.bind(this);
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

  onClick(e) {
    const { isDisabled, onClick } = this.props;
    if (isDisabled) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
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
    const { isDisabled, size } = this.props;
    const { isActive } = this.state;
    return (
      <ActionableIconWrapper>
        <ActionableIcon
          color={BINARY_COLOR_BLUE_40}
          isActive={isActive}
          isDisabled={isDisabled}
          size={size}
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
      <ActionLinkInlineWrapper>
        <ActionListItemIconRender
          isDisabled={isDisabled}
          onClick={this.onClick}
          onMouseDown={!isDisabled && this.onMouseDown}
          onTouchStart={!isDisabled && this.onTouchStart}
          {...props}
        >
          {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
          <ActionableText
            color={BINARY_COLOR_BLUE_40}
            isActive={isActive}
            isDisabled={isDisabled}
          >
            {children}
          </ActionableText>
          {renderIconRight ? this.renderIcon(renderIconRight) : null}
        </ActionListItemIconRender>
      </ActionLinkInlineWrapper>
    );
  }
}

ActionLinkInline.propTypes = propTypes;
ActionLinkInline.defaultProps = defaultProps;
