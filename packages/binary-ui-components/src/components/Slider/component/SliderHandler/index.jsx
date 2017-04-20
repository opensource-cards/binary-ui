import React from 'react';
import SliderHandler from '../../components-styled/SliderHandler';
import validatePosition from '../../utils/position-validation';
import getPosition from '../../utils/position';
import { LIST_ITEM_HALF_HEIGHT } from '../../../../utils/styles.universal';

const propTypes = {
  containerLeft: React.PropTypes.number.isRequired,
  containerWidth: React.PropTypes.number.isRequired,
  dragging: React.PropTypes.bool.isRequired,
  position: React.PropTypes.number.isRequired,
  onDraggingChanged: React.PropTypes.func.isRequired,
  onPositionChanged: React.PropTypes.func.isRequired,
};

const defaultProps = {};

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.onGestureResponderStart = this.onGestureResponderStart.bind(this);
    this.onMouseResponderMove = this.onMouseResponderMove.bind(this);
    this.onTouchResponderMove = this.onTouchResponderMove.bind(this);
    this.onGestureResponderEnd = this.onGestureResponderEnd.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseResponderMove, true);
    window.addEventListener('touchmove', this.onTouchResponderMove, true);
    window.addEventListener('mouseup', this.onGestureResponderEnd);
    window.addEventListener('touchend', this.onGestureResponderEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseResponderMove, true);
    window.removeEventListener('touchmove', this.onTouchResponderMove, true);
    window.removeEventListener('mouseup', this.onGestureResponderEnd);
    window.removeEventListener('touchend', this.onGestureResponderEnd);
  }

  onGestureResponderStart(e) {
    // prevent selecting text
    e.preventDefault();
    // parents don't need to know about this event
    e.stopPropagation();
    this.props.onDraggingChanged(true);
  }

  onMouseResponderMove(e) {
    if (!this.props.dragging) {
      return;
    }
    // prevent selecting text
    e.preventDefault();
    // prevent any other movement
    e.stopImmediatePropagation();
    const { containerLeft, containerWidth, onPositionChanged } = this.props;
    const position = getPosition(
      containerLeft,
      e.clientX,
      containerWidth,
    );
    validatePosition(position, onPositionChanged);
  }

  onTouchResponderMove(e) {
    if (!this.props.dragging) {
      return;
    }
    // prevent selecting text
    e.preventDefault();
    // prevent any other movement
    e.stopImmediatePropagation();
    const { containerLeft, containerWidth, onPositionChanged } = this.props;
    const position = getPosition(
      containerLeft,
      e.changedTouches[0].clientX,
      containerWidth,
    );
    validatePosition(position, onPositionChanged);
  }

  onGestureResponderEnd() {
    this.props.onDraggingChanged(false);
  }

  render() {
    const { containerWidth, position } = this.props;
    const halfSize = LIST_ITEM_HALF_HEIGHT / 2;
    const transformX = Math.round(position * containerWidth) - halfSize;
    const transformY = - LIST_ITEM_HALF_HEIGHT / 2;
    return (
      <SliderHandler
        style={{
          transform: `translate3d(${transformX}px, ${transformY}px, 0)`,
        }}
        onMouseDown={this.onGestureResponderStart}
        onTouchStart={this.onGestureResponderStart}
      />
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
