import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import ActionableIcon from '../ActionableIcon';

const ICON_STYLE = { paddingRight: 10 };

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

export default class ActionListItemIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      isDisabled,
      renderIcon,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return (
      <View
        {...props}
        style={ICON_STYLE}
      >
        <ActionableIcon
          color={BINARY_COLOR_GRAY_40}
          isActive={isActive}
          isDisabled={isDisabled}
          size={18}
          renderIcon={renderIcon}
        />
      </View>
    );
  }
}

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;
