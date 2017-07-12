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
  onClick: PropTypes.func,
  onTapDown: PropTypes.func,
  size: PropTypes.number,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  size: undefined,
  onClick: undefined,
  onTapDown: undefined,
};

export default class ActionLinkInline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTapUp = () => { this.onSetActive(false); };
    this.onSetActive = this.onSetActive.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onTapUp);
    window.addEventListener('touchend', this.onTapUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onTapUp);
    window.removeEventListener('touchend', this.onTapUp);
  }

  onSetActive(isActive) {
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
    const {
      children,
      isDisabled,
      onClick,
      onTapDown,
      renderIconLeft,
      renderIconRight,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <ActionLinkInlineWrapper>
        <ActionListItemIconRender
          isDisabled={isDisabled}
          onClick={isDisabled ? (e) => { e.preventDefault(); } : (e) => { if (onClick) { onClick(e); } }}
          onMouseDown={!isDisabled && ((e) => { if (isLeftButton(e)) { this.onSetActive(true); } if (onTapDown) { onTapDown(e); } })}
          onTouchStart={!isDisabled && ((e) => { this.onSetActive(true); if (onTapDown) { onTapDown(e); } })}
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
