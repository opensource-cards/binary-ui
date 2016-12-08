import autobind from 'autobind-decorator';
import React from 'react';
import ActionableListItemIconExt from '../ActionableListItemIconExt';

const propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  isDisabled: React.PropTypes.bool,
};

const defaultProps = {};

export default class ActionListItemIcon extends React.Component {

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
      <ActionableListItemIconExt
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

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;
