import { CardsIconMinusAlt, CardsIconNewAlt } from 'binary-ui-icons';
import React from 'react';
import SliderHandler from '../SliderHandler';
import SliderContainer from '../../components-styled/SliderContainer';
import SliderScale from '../../components-styled/SliderScale';
import SliderScaleIcon from '../../components-styled/SliderScaleIcon';
import getPosition from '../../utils/position';

const propTypes = {
  position: React.PropTypes.number.isRequired,
  renderIconLeft: React.PropTypes.func,
  renderIconRight: React.PropTypes.func,
  onPositionChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  renderIconLeft: () => (<CardsIconMinusAlt />),
  renderIconRight: () => (<CardsIconNewAlt />),
};

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
    };
    this.onDraggingChanged = this.onDraggingChanged.bind(this);
    this.onTapStart = this.onTapStart.bind(this);
    this.onSetBarDom = this.onSetBarDom.bind(this);
  }

  onDraggingChanged(dragging) {
    this.setState({
      dragging,
    });
  }

  onTapStart(e) {
    const { onPositionChange } = this.props;
    const targetBoundingClientRect = e.target.getBoundingClientRect();
    const newPosition = getPosition(
      targetBoundingClientRect.left,
      e.clientX,
      targetBoundingClientRect.width,
    );
    onPositionChange(newPosition);
    this.onDraggingChanged(true);
  }

  onSetBarDom(barDom) {
    this.barDom = barDom;
  }

  render() {
    const { position, renderIconLeft, renderIconRight, onPositionChange } = this.props;
    return (
      <SliderContainer>
        <SliderScaleIcon>
          {renderIconLeft()}
        </SliderScaleIcon>
        <SliderScale innerRef={this.onSetBarDom} >
          <SliderHandler
            barDom={this.barDom}
            dragging={this.state.dragging}
            position={position}
            onDraggingChanged={this.onDraggingChanged}
            onPositionChanged={onPositionChange}
          />
        </SliderScale>
        <SliderScaleIcon>
          {renderIconRight()}
        </SliderScaleIcon>
      </SliderContainer>
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
