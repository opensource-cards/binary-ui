import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View, Text } from 'react-native';
import { BINARY_COLOR_GRAY_30, FONT_FAMILY_MAIN } from 'binary-ui-styles';

storiesOf('binary-ui-components', module)
  .add('Tooltip', () => (
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
          shadowOffset: {width: 0, height: 1},
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
          Tooltip text
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
  ));
