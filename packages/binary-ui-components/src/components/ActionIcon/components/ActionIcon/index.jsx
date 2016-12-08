import autobind from 'autobind-decorator';
import React from 'react';
import ActionableIconExt from '../ActionableIconExt';

const propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  isDisabled: React.PropTypes.bool,
};

const defaultProps = {};

export default class ActionIcon extends React.Component {

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

  render() {
    const { isDisabled, ...props } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionableIconExt
        isActive={isActive}
        isHover={isHover}
        isDisabled={isDisabled}
        onSetActiveStatus={this.onSetActiveStatus}
        onSetHoverStatus={this.onSetHoverStatus}
        {...props}
      />
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;
