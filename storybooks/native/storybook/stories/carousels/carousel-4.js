import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import IconArrowLeft from 'binary-ui-icons/binary/ArrowLeft';
import IconArrowRight from 'binary-ui-icons/binary/ArrowRight';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';

import BinaryUICarousel from 'binary-ui-carousel';

const { width } = Dimensions.get('window');

const colors = ['#AA3939', '#AA6C39', '#226666', '#2D882D'];

function getStyle(color) {
  return {
    width: '100%',
    height: '100%',
    backgroundColor: color,
  };
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2,
    };
  }

  render() {
    return (
      <BinaryUICarousel
        containerHeight={200}
        containerWidth={width}
        selectedIndex={this.state.selectedIndex}
        onChangeIndex={(page) => { this.setState({ selectedIndex: page }); }}
        renderButtonLeft={props => (
          <ActionIcon title="Left" renderIcon={rest => (<IconArrowLeft {...rest} size={18} />)} {...props} />
        )}
        renderButtonRight={props => (
          <ActionIcon title="Left" renderIcon={rest => (<IconArrowRight {...rest} size={18} />)} {...props} />
        )}
      >
        {colors.map((color, index) => (
          <View key={color} style={getStyle(color)}>
            <Text>{index}</Text>
          </View>
        ))}
      </BinaryUICarousel>
    );
  }
}
