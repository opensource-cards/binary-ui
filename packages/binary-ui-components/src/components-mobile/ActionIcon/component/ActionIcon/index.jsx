import PropTypes from 'prop-types';
import React from 'react';
import ActionIconContent from '../ActionIconContent';
import ActionWrapper from '../../../../components/ActionWrapper';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  isDisabled: false,
  size: undefined,
};

// NOTE: do not make functional component to be able to pass ref
export default class ActionIcon extends React.PureComponent {
  render() {
    const { color, isDisabled, size, renderIcon, ...props } = this.props;
    return (
      <ActionWrapper isDisabled={isDisabled} {...props} >
        <ActionIconContent
          color={color}
          isDisabled={isDisabled}
          size={size}
          renderIcon={renderIcon}
        />
      </ActionWrapper>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;
