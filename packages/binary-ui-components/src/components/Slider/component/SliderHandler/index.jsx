import React from 'react';
import SliderHandler from '../../components-styled/SliderHandler';
import validatePosition from '../../utils/position-validation';
import getPosition from '../../utils/position';
import { LIST_ITEM_HALF_HEIGHT } from '../../../../utils/styles.universal';

const propTypes = {
  barDom: React.PropTypes.object,
  dragging: React.PropTypes.bool.isRequired,
  position: React.PropTypes.number.isRequired,
  onDraggingChanged: React.PropTypes.func.isRequired,
  onPositionChanged: React.PropTypes.func.isRequired,
};

const defaultProps = {
  barDom: undefined,
};

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
    e.preventDefault();
    e.stopPropagation();
    this.props.onDraggingChanged(true);
  }

  onMouseResponderMove(e) {
    if (!this.props.dragging) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
    const { onPositionChanged } = this.props;
    const barDomBoundingClientRect = this.props.barDom.getBoundingClientRect();
    const position = getPosition(
      barDomBoundingClientRect.left,
      e.clientX,
      barDomBoundingClientRect.width,
    );
    validatePosition(position, onPositionChanged);
  }

  onTouchResponderMove(e) {
    if (!this.props.dragging) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
    const { onPositionChanged } = this.props;
    const barDomBoundingClientRect = this.props.barDom.getBoundingClientRect();
    const position = getPosition(
      barDomBoundingClientRect.left,
      e.changedTouches[0].clientX,
      barDomBoundingClientRect.width,
    );
    validatePosition(position, onPositionChanged);
  }

  onGestureResponderEnd() {
    this.props.onDraggingChanged(false);
  }

  render() {
    const { barDom, position } = this.props;
    if (!barDom) {
      return null;
    }
    const barDomBoundingClientRect = barDom.getBoundingClientRect();
    const halfSize = LIST_ITEM_HALF_HEIGHT / 2;
    const transformX = Math.round(position * barDomBoundingClientRect.width) - halfSize;
    const transformY = - LIST_ITEM_HALF_HEIGHT / 2;
    const style = {
      transform: `translate3d(${transformX}px, ${transformY}px, 0)`,
    };
    return (
      <SliderHandler
        style={style}
        onMouseDown={this.onGestureResponderStart}
        onTouchStart={this.onGestureResponderStart}
      />
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
