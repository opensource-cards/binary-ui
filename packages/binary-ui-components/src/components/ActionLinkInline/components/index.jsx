import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import React from 'react';
import ActionListItemIconRender from '../components-styled/ActionListItemIconRender';
import ActionLinkInlineWrapper from '../components-styled/ActionLinkInlineWrapper';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionableIcon from '../../ActionableIcon';
import ActionableText from '../../ActionableText';
import { isLeftButton } from '../../../utils/events';

const propTypes = {
  children: React.PropTypes.any,
  isDisabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onTapDown: React.PropTypes.func,
  renderIconLeft: React.PropTypes.func,
  renderIconRight: React.PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  onClick: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  onTapDown: undefined,
};

export default class ActionLinkInline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isHover: false,
    };
    this.onTapUp = () => { this.onSetActive(false); };
    this.onSetActive = this.onSetActive.bind(this);
    this.onSetHover = this.onSetHover.bind(this);
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
    this.setState({
      isActive,
    });
  }

  onSetHover(isHover) {
    this.setState({
      isHover,
    });
  }

  renderIcon(renderIcon) {
    const { isDisabled } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionableIconWrapper>
        <ActionableIcon
          color={BINARY_COLOR_BLUE_40}
          isActive={isActive}
          isHover={isHover}
          isDisabled={isDisabled}
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
      onMouseEnter,
      onMouseLeave,
      onTapDown,
      renderIconLeft,
      renderIconRight,
      ...props,
    } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionLinkInlineWrapper>
        <ActionListItemIconRender
          isDisabled={isDisabled}
          onClick={isDisabled ? (e) => { e.preventDefault(); } : (e) => { if (onClick) { onClick(e); } }}
          onMouseDown={!isDisabled && ((e) => { if (isLeftButton(e)) { this.onSetActive(true); } if (onTapDown) { onTapDown(e); } })}
          onTouchStart={!isDisabled && ((e) => { this.onSetActive(true); if (onTapDown) { onTapDown(e); } })}
          onMouseEnter={!isDisabled && ((e) => { this.onSetHover(true); if (onMouseEnter) { onMouseEnter(e); } })}
          onMouseLeave={!isDisabled && ((e) => { this.onSetHover(false); if (onMouseLeave) { onMouseLeave(e); } })}
          {...props}
        >
          {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
          <ActionableText
            color={BINARY_COLOR_BLUE_40}
            isActive={isActive}
            isDisabled={isDisabled}
            isHover={isHover}
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
