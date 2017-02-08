import { ActionIcon } from 'binary-ui-components';
import { CardsIconArrowLeft, CardsIconArrowRight } from 'binary-ui-icons';
import ReactMgr from 'binary-ui-carousel';
import React from 'react';

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
      mgr3: 2,
    };
  }

  render() {
    return (
      <ReactMgr
        containerHeight={200}
        containerWidth={300}
        margin={10}
        pageWidth={240}
        renderButtonLeft={props => (
          <ActionIcon title="Left" IconComponent={CardsIconArrowLeft} {...props} />
        )}
        renderButtonRight={props => (
          <ActionIcon title="Left" IconComponent={CardsIconArrowRight} {...props} />
        )}
        selectedIndex={this.state.mgr3}
        onChangeIndex={(page) => { this.setState({ mgr3: page }); }}
      >
        {colors.map((color, index) => (
          <div key={color} style={getStyle(color)}>{index}</div>
        ))}
      </ReactMgr>
    );
  }
}
