import MinusAlt from 'binary-ui-icons/binary/MinusAlt';
import NewAlt from 'binary-ui-icons/binary/NewAlt';
import React from 'react';
import SliderHandler from './SliderHandler';
import SliderContainer from '../components-styled/SliderContainer';
import SliderScale from '../components-styled/SliderScale';
import SliderScaleIcon from '../components-styled/SliderScaleIcon';
import getPosition from '../utils/position';

const propTypes = {
  position: React.PropTypes.number.isRequired,
  onPositionChange: React.PropTypes.func.isRequired,
  renderIconLeft: React.PropTypes.func,
  renderIconRight: React.PropTypes.func,
};

const defaultProps = {
  renderIconLeft: () => (<MinusAlt />),
  renderIconRight: () => (<NewAlt />),
};

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDomInitialized: false,
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
    this.setState(() => ({
      isDomInitialized: true,
    }));
  }

  renderSliderHandler() {
    const { isDomInitialized } = this.state;
    if (!isDomInitialized) {
      return null;
    }
    const { position, onPositionChange } = this.props;
    const barDomBoundingClientRect = this.barDom.getBoundingClientRect();
    return (
      <SliderHandler
        containerLeft={barDomBoundingClientRect.left}
        containerWidth={barDomBoundingClientRect.width}
        dragging={this.state.dragging}
        position={position}
        onDraggingChanged={this.onDraggingChanged}
        onPositionChanged={onPositionChange}
      />
    );
  }

  render() {
    const { renderIconLeft, renderIconRight } = this.props;
    return (
      <SliderContainer>
        <SliderScaleIcon>
          {renderIconLeft ? renderIconLeft() : null}
        </SliderScaleIcon>
        <SliderScale innerRef={this.onSetBarDom} >
          {this.renderSliderHandler()}
        </SliderScale>
        <SliderScaleIcon>
          {renderIconRight ? renderIconLeft() : null}
        </SliderScaleIcon>
      </SliderContainer>
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
