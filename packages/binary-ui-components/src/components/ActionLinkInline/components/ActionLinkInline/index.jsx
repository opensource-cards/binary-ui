import autobind from 'autobind-decorator';
import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import React from 'react';
import LinkExt from '../LinkExt';
import ActionLinkInlineWrapper from '../../components-styled/ActionLinkInlineWrapper';
import ActionableIconWrapper from '../../components-styled/ActionableIconWrapper';
import ActionableIcon from '../../../ActionableIcon';
import ActionableText from '../../../ActionableText';

const propTypes = {
  children: React.PropTypes.any,
  isDisabled: React.PropTypes.bool,
  style: React.PropTypes.object,
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
      IconComponentLeft,
      IconComponentRight,
      ...props,
    } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionLinkInlineWrapper>
        <LinkExt
          onSetActiveStatus={this.onSetActiveStatus}
          onSetHoverStatus={this.onSetHoverStatus}
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
        </LinkExt>
      </ActionLinkInlineWrapper>
    );
  }
}

ActionLinkInline.propTypes = propTypes;
ActionLinkInline.defaultProps = defaultProps;
