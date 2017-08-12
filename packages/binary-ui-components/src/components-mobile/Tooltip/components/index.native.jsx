import { BINARY_COLOR_GRAY_30, FONT_FAMILY_MAIN } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { findNodeHandle, Text, View } from 'react-native';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']),
  target: PropTypes.object,
};

const defaultProps = {
  placement: 'bottom-right',
  target: undefined,
};

// findNodeHandle(view)
const Tooltip = ({ label, placement, target }) => {
  // if (!target) {
  //   return null;
  // }
  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: placement === 'bottom-left' ? 'flex-start' : 'flex-end',
        backgroundColor: BINARY_COLOR_GRAY_30,
        borderRadius: 5,
        elevation: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      }}
    >
      <View
        style={{
          width: 5,
          height: 5,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderTopWidth: 0,
          borderRightWidth: 5,
          borderBottomWidth: 5,
          borderLeftWidth: 5,
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: BINARY_COLOR_GRAY_30,
          borderLeftColor: 'transparent',
          left: placement === 'bottom-left' ? 20 : undefined,
          right: placement === 'bottom-left' ? undefined : 20,
          position: 'absolute',
          top: -5,
        }}
      />
      <Text
        style={{
          color: '#FFF',
          fontFamily: FONT_FAMILY_MAIN,
          fontSize: 13,
          flex: 0,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
