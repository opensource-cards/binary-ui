import autobind from 'autobind-decorator';
import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import React from 'react';
import ActionListItemIconRender from '../../components-styled/ActionListItemIconRender';
import ActionLinkInlineWrapper from '../../components-styled/ActionLinkInlineWrapper';
import ActionableIconWrapper from '../../components-styled/ActionableIconWrapper';
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

export default class ActionLinkInline extends React.Component {

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
          color={CARDS_BLUE_COLOR}
          IconComponent={IconComponent}
          isActive={isActive}
          isHover={isHover}
          isDisabled={isDisabled}
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
      <ActionLinkInlineWrapper>
        <ActionListItemIconRender
          onMouseDown={(e) => { this.onSetActiveStatus(true); if (onTapDown) { onTapDown(e); } }}
          onTouchStart={(e) => { this.onSetActiveStatus(true); if (onTapDown) { onTapDown(e); } }}
          onMouseEnter={(e) => { this.onSetHoverStatus(true); if (onMouseEnter) { onMouseEnter(e); } }}
          onMouseLeave={(e) => { this.onSetHoverStatus(false); if (onMouseLeave) { onMouseLeave(e); } }}
          {...props}
        >
          {IconComponentLeft && this.renderIconComponent(IconComponentLeft)}
          <ActionableText
            color={CARDS_BLUE_COLOR}
            isActive={isActive}
            isHover={isHover}
            isDisabled={isDisabled}
          >
            {children}
          </ActionableText>
          {IconComponentRight && this.renderIconComponent(IconComponentRight)}
        </ActionListItemIconRender>
      </ActionLinkInlineWrapper>
    );
  }
}

ActionLinkInline.propTypes = propTypes;
ActionLinkInline.defaultProps = defaultProps;
