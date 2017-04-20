import React from 'react';
import SliderHandler from '../SliderHandler';
import SliderScale from '../../components-styled/SliderScale';
import { HOLD_TIME } from '../../utils/config';
import getPosition from '../../utils/position';

const propTypes = {
  position: React.PropTypes.number.isRequired,
  onPositionChange: React.PropTypes.func.isRequired,
};

const defaultProps = {};

export default class BarWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.cache = {
      holdTimer: null,
      holdHandler: null,
    };
    this.state = {
      dragging: false,
      isDomInitialized: false,
    };
    this.onDraggingChanged = this.onDraggingChanged.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onSetBarDom = this.onSetBarDom.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('touchend', this.onTouchEnd);
    window.addEventListener('touchcancel', this.onTouchCancel);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('touchcancel', this.onTouchCancel);
  }

  onMouseDown(e) {
    const targetBoundingClientRect = e.target.getBoundingClientRect();
    const clientX = e.clientX;
    this.setOnHoldTimerInitIfNeed(e, this.getOnHoldHandler(clientX, targetBoundingClientRect));
  }

  onTouchStart(e) {
    const targetBoundingClientRect = e.target.getBoundingClientRect();
    const clientX = e.touches[0].clientX;
    this.setOnHoldTimerInitIfNeed(e, this.getOnHoldHandler(clientX, targetBoundingClientRect));
  }

  onMouseUp() {
    this.setCancelTimer();
  }

  onTouchEnd() {
    this.setCancelTimer();
  }

  onTouchCancel() {
    this.setCancelTimer();
  }

  onDraggingChanged(dragging) {
    this.setState({
      dragging,
    });
  }

  onSetBarDom(barDom) {
    this.barDom = barDom;
    this.setState(() => ({
      isDomInitialized: true,
    }));
  }

  getOnHoldHandler(clientX, targetBoundingClientRect) {
    return () => {
      const { onPositionChange } = this.props;
      const newPosition = getPosition(
        targetBoundingClientRect.left,
        clientX,
        targetBoundingClientRect.width,
      );
      onPositionChange(newPosition);
      this.onDraggingChanged(true);
    };
  }

  setOnHoldTimerInitIfNeed(e, holdHandler) {
    const holdTimer = this.cache.holdTimer;
    // allow only left button
    if (
      (holdTimer === null || holdTimer === undefined) &&
      (e.button === 0 || e.button === undefined)
    ) {
      this.cache.holdHandler = holdHandler;
      this.cache.holdTimer = setTimeout(this.cache.holdHandler, HOLD_TIME, e);
    }
  }

  setCancelTimer() {
    clearTimeout(this.cache.holdTimer);
    this.cache.holdTimer = null;
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
