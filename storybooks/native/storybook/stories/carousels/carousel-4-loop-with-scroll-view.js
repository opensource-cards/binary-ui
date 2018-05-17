import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import IconArrowLeft from 'binary-ui-icons/binary/ArrowLeft';
import IconArrowRight from 'binary-ui-icons/binary/ArrowRight';
import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import BinaryUICarousel from '../../lib';

const { width } = Dimensions.get('window');

const colors = ['#AA3939', '#AA6C39', '#226666', '#2D882D'];

function getStyle(color) {
  return {
    backgroundColor: color,
    height: '100%',
    width: '100%',
  };
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mgr1: 2,
      mgr2: 2,
      mgr3: 2,
      mgr4: 2,
      mgr5: 2,
      scrollEnabled: true,
    };
  }

  render() {
    return (
      <ScrollView scrollEnabled={this.state.scrollEnabled}>
        <BinaryUICarousel
          containerHeight={200}
          containerWidth={width}
          isLoop
          key="key-1"
          renderButtonLeft={props => (
            <ActionIcon title="Left" renderIcon={rest => (<IconArrowLeft {...rest} size={18} />)} {...props} />
          )}
          renderButtonRight={props => (
            <ActionIcon title="Left" renderIcon={rest => (<IconArrowRight {...rest} size={18} />)} {...props} />
          )}
          selectedIndex={this.state.mgr1}
          onChangeIndex={(page) => { this.setState({ mgr1: page }); }}
          onSwipeStart={() => {
            this.setState(() => ({
              scrollEnabled: false,
            }));
          }}
          onSwipeEnd={() => {
            this.setState(() => ({
              scrollEnabled: true,
            }));
          }}
        >
          {colors.map((color, index) => (
            <View key={color} style={getStyle(color)}>
              <Text>{index}</Text>
            </View>
          ))}
        </BinaryUICarousel>
        <BinaryUICarousel
          containerHeight={200}
          containerWidth={width}
          isLoop
          key="key-2"
          renderButtonLeft={props => (
            <ActionIcon title="Left" renderIcon={rest => (<IconArrowLeft {...rest} size={18} />)} {...props} />
          )}
          renderButtonRight={props => (
            <ActionIcon title="Left" renderIcon={rest => (<IconArrowRight {...rest} size={18} />)} {...props} />
          )}
          selectedIndex={this.state.mgr2}
          onChangeIndex={(page) => { this.setState({ mgr2: page }); }}
          onSwipeStart={() => {
            this.setState(() => ({
              scrollEnabled: false,
            }));
          }}
          onSwipeEnd={() => {
            this.setState(() => ({
              scrollEnabled: true,
            }));
          }}
        >
          {colors.map((color, index) => (
            <View key={color} style={getStyle(color)}>
              <Text>{index}</Text>
            </View>
          ))}
        </BinaryUICarousel>
        <BinaryUICarousel
          containerHeight={200}
          containerWidth={width}
          isLoop
          key="key-3"
          renderButtonLeft={props => (
            <ActionIcon title="Left" renderIcon={rest => (<IconArrowLeft {...rest} size={18} />)} {...props} />
          )}
          renderButtonRight={props => (
            <ActionIcon title="Left" renderIcon={rest => (<IconArrowRight {...rest} size={18} />)} {...props} />
          )}
          selectedIndex={this.state.mgr3}
          onChangeIndex={(page) => { this.setState({ mgr3: page }); }}
          onSwipeStart={() => {
            this.setState(() => ({
              scrollEnabled: false,
            }));
          }}
          onSwipeEnd={() => {
            this.setState(() => ({
              scrollEnabled: true,
            }));
          }}
        >
          {colors.map((color, index) => (
            <View key={color} style={getStyle(color)}>
              <Text>{index}</Text>
            </View>
          ))}
        </BinaryUICarousel>
        <BinaryUICarousel
          containerHeight={200}
          containerWidth={width}
          isLoop
          key="key-4"
          selectedIndex={this.state.mgr4}
          onChangeIndex={(page) => { this.setState({ mgr4: page }); }}
          onSwipeStart={() => {
            this.setState(() => ({
              scrollEnabled: false,
            }));
          }}
          onSwipeEnd={() => {
            this.setState(() => ({
              scrollEnabled: true,
            }));
          }}
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
        <BinaryUICarousel
          containerHeight={200}
          containerWidth={width}
          isLoop
          key="key-5"
          selectedIndex={this.state.mgr5}
          onChangeIndex={(page) => { this.setState({ mgr5: page }); }}
          onSwipeStart={() => {
            this.setState(() => ({
              scrollEnabled: false,
            }));
          }}
          onSwipeEnd={() => {
            this.setState(() => ({
              scrollEnabled: true,
            }));
          }}
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
      </ScrollView>
    );
  }
}
