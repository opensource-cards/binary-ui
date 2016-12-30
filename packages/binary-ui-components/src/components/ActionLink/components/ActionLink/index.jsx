import autobind from 'autobind-decorator';
import React from 'react';
import ActionableIconWrapper from '../../components-styled/ActionableIconWrapper';
import ActionLinkRender from '../../components-styled/ActionLinkRender';
import ActionableIcon from '../../../ActionableIcon';
import ActionableText from '../../../ActionableText';

const propTypes = {
  children: React.PropTypes.any,
  isDisabled: React.PropTypes.bool,
  style: React.PropTypes.object,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onTapDown: React.PropTypes.func,
  IconComponentLeft: React.PropTypes.func,
  IconComponentRight: React.PropTypes.func,
};

const defaultProps = {};

export default class ActionLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isHover: false,
    };
    this.onTapUp = () => { this.onSetActiveStatus(false); };
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onTapUp);
    window.addEventListener('touchend', this.onTapUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onTapUp);
    window.removeEventListener('touchend', this.onTapUp);
  }

  @autobind
  onSetActiveStatus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  @autobind
  onSetHoverStatus(isHover) {
    this.setState({
      isHover,
    });
  }

  renderIconComponent(IconComponent) {
    const { isDisabled } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionableIconWrapper>
        <ActionableIcon
          isActive={isActive}
          isHover={isHover}
          isDisabled={isDisabled}
          IconComponent={IconComponent}
        />
      </ActionableIconWrapper>
    );
  }

  render() {
    const {
      children,
      isDisabled,
      onMouseEnter,
      onMouseLeave,
      onTapDown,
      IconComponentLeft,
      IconComponentRight,
      ...props,
    } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionLinkRender
        onMouseDown={(e) => { this.onSetActiveStatus(true); if (onTapDown) { onTapDown(e); } }}
        onTouchStart={(e) => { this.onSetActiveStatus(true); if (onTapDown) { onTapDown(e); } }}
        onMouseEnter={(e) => { this.onSetHoverStatus(true); if (onMouseEnter) { onMouseEnter(e); } }}
        onMouseLeave={(e) => { this.onSetHoverStatus(false); if (onMouseLeave) { onMouseLeave(e); } }}
        {...props}
      >
        {IconComponentLeft && this.renderIconComponent(IconComponentLeft)}
        <ActionableText
          isActive={isActive}
          isHover={isHover}
          isDisabled={isDisabled}
        >
          {children}
        </ActionableText>
        {IconComponentRight && this.renderIconComponent(IconComponentRight)}
      </ActionLinkRender>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;
