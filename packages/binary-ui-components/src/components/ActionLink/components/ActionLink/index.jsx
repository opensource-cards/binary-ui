import autobind from 'autobind-decorator';
import React from 'react';
import LinkExt from '../LinkExt';
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

export default class ActionLink extends React.Component {

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
      IconComponentLeft,
      IconComponentRight,
      ...props,
    } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <LinkExt
        onSetActiveStatus={this.onSetActiveStatus}
        onSetHoverStatus={this.onSetHoverStatus}
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
      </LinkExt>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;
