import { BINARY_COLOR_GRAY_30, FONT_FAMILY_MAIN } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']),
  targetId: PropTypes.string.isRequired,
};

const defaultProps = {
  placement: 'bottom-right',
};

const Tooltip = ({ label }) => (
  <View>
    <View
      style={{
        alignItems: 'center',
        backgroundColor: BINARY_COLOR_GRAY_30,
        borderRadius: 5,
        elevation: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        width: 100,
      }}
    >
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
    <View
      style={{
        width: 5,
        height: 5,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 0,
        borderLeftWidth: 5,
        borderTopColor: BINARY_COLOR_GRAY_30,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        marginLeft: 20,
      }}
    />
  </View>
);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
