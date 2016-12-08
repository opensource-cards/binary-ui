import autobind from 'autobind-decorator';
import React from 'react';
import IconStyledWrapper from '../components-styled/IconStyledWrapper';

const propTypes = {
  isActive: React.PropTypes.bool,
  isHover: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

const defaultProps = {};

export default class ActionableListItemIcon extends React.Component {

  @autobind
  onClick(e) {
    e.stopPropagation();
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  }

  render() {
    const { ...props } = this.props;
    return (
      <IconStyledWrapper
        color="#7F7F7F"
        size={18}
        onClick={this.onClick}
        {...props}
      />
    );
  }
}

ActionableListItemIcon.propTypes = propTypes;
ActionableListItemIcon.defaultProps = defaultProps;
