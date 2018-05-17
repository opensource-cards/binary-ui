import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import IconArrowLeft from 'binary-ui-icons/binary/ArrowLeft';
import IconArrowRight from 'binary-ui-icons/binary/ArrowRight';
import React from 'react';

import BinaryUICarousel from 'binary-ui-carousel';

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
      colors: ['#AA3939', '#AA6C39', '#226666', '#2D882D'],
      isLoading: true,
      selectedIndex: 1,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({
        colors: ['#AA3939', '#AA6C39', '#226666', '#2D882D'],
        isLoading: false,
        selectedIndex: 2,
      }));
    }, 1000);
  }

  render() {
    return (
      <BinaryUICarousel
        containerHeight={200}
        containerWidth={300}
        isPlaceholder={this.state.isLoading}
        selectedIndex={this.state.selectedIndex}
        onChangeIndex={page => {
          this.setState({ selectedIndex: page });
        }}
        renderButtonLeft={props => (
          <ActionIcon
            title="Left"
            renderIcon={rest => <IconArrowLeft {...rest} size={18} />}
            {...props}
          />
        )}
        renderButtonRight={props => (
          <ActionIcon
            title="Left"
            renderIcon={rest => <IconArrowRight {...rest} size={18} />}
            {...props}
          />
        )}
        renderPlaceholder={() => null}
      >
        {this.state.colors.map((color, index) => (
          <div key={color} style={getStyle(color)}>
            {index}
          </div>
        ))}
      </BinaryUICarousel>
    );
  }
}
