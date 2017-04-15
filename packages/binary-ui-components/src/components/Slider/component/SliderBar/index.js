import React from 'react';
import SliderHandler from '../SliderHandler';
import SliderScale from '../../components-styled/SliderScale';
import getPosition from '../../utils/position';

const propTypes = {
  position: React.PropTypes.number.isRequired,
  onPositionChange: React.PropTypes.func.isRequired,
};

const defaultProps = {};

export default class BarWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      isDomInitialized: false,
    };
    this.onDraggingChanged = this.onDraggingChanged.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onSetBarDom = this.onSetBarDom.bind(this);
  }

  onDraggingChanged(dragging) {
    this.setState({
      dragging,
    });
  }

  onMouseDown(e) {
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

  onTouchStart(e) {
    const { onPositionChange } = this.props;
    const targetBoundingClientRect = e.target.getBoundingClientRect();
    const newPosition = getPosition(
      targetBoundingClientRect.left,
      e.touches[0].clientX,
      targetBoundingClientRect.width,
    );
    onPositionChange(newPosition);
    this.onDraggingChanged(true);
  }

  onSetBarDom(barDom) {
    this.barDom = barDom;
    this.setState(() => ({
      isDomInitialized: true,
    }));
  }

  renderSliderHandler(position, onPositionChange) {
    const { dragging, isDomInitialized } = this.state;
    if (!isDomInitialized) {
      return null;
    }
    const barDomBoundingClientRect = this.barDom.getBoundingClientRect();
    return (
      <SliderHandler
        containerLeft={barDomBoundingClientRect.left}
        containerWidth={barDomBoundingClientRect.width}
        dragging={dragging}
        position={position}
        onDraggingChanged={this.onDraggingChanged}
        onPositionChanged={onPositionChange}
      />
    );
  }

  render() {
    const { position, onPositionChange, ...props } = this.props;
    return (
      <SliderScale
        innerRef={this.onSetBarDom}
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        {...props}
      >
        {this.renderSliderHandler(position, onPositionChange)}
      </SliderScale>
    );
  }
}

BarWrapper.propTypes = propTypes;
BarWrapper.defaultProps = defaultProps;
