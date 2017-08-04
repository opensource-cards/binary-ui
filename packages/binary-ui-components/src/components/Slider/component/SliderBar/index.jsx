import PropTypes from 'prop-types';
import React from 'react';
import SliderHandler from '../SliderHandler';
import SliderScale from '../../components-styled/SliderScale';
import { HOLD_TIME, TOLERANCE } from '../../utils/config';
import getPosition from '../../utils/position';

const propTypes = {
  position: PropTypes.number.isRequired,
  onPositionChange: PropTypes.func.isRequired,
};

const defaultProps = {};

export default class BarWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.cache = {
      holdTimer: null,
      holdHandler: null,
      holdPositionX: null,
      holdPositionY: null,
    };
    this.state = {
      dragging: false,
      holding: false,
      isDomInitialized: false,
    };
    this.onDraggingChanged = this.onDraggingChanged.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
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
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('touchmove', this.onTouchMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('touchcancel', this.onTouchCancel);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchmove', this.onTouchMove);
  }

  onMouseMove(e) {
    this.checkHolding(e, false);
  }

  onTouchMove(e) {
    this.checkHolding(e, true);
  }

  onMouseDown(e) {
    const targetBoundingClientRect = e.target.getBoundingClientRect();
    const { clientX, clientY } = e;
    this.cache.holdPositionX = clientX;
    this.cache.holdPositionY = clientY;
    this.setState(() => ({
      holding: true,
    }));
    this.setOnHoldTimerInitIfNeed(e, this.getOnHoldHandler(clientX, targetBoundingClientRect));
  }

  onTouchStart(e) {
    const targetBoundingClientRect = e.target.getBoundingClientRect();
    const { clientX, clientY } = e.touches[0];
    this.cache.holdPositionX = clientX;
    this.cache.holdPositionY = clientY;
    this.setState(() => ({
      holding: true,
    }));
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
    this.setState(() => ({
      dragging,
    }));
  }

  onSetBarDom(barDom) {
    this.barDom = barDom;
    this.setState(() => ({
      isDomInitialized: true,
    }));
  }

  getOnHoldHandler(clientX, targetBoundingClientRect) {
    return () => {
      if (this.state.holding) {
        const { onPositionChange } = this.props;
        const newPosition = getPosition(
          targetBoundingClientRect.left,
          clientX,
          targetBoundingClientRect.width,
        );
        onPositionChange(newPosition);
        this.onDraggingChanged(true);
      }
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
    this.cache.holdPositionX = null;
    this.cache.holdPositionY = null;
  }

  checkHolding(e, isTouch) {
    if (this.state.holding) {
      const clientX = isTouch ? e.touches[0].clientX : e.clientX;
      const clientY = isTouch ? e.touches[0].clientY : e.clientY;
      const diffX = Math.abs(this.cache.holdPositionX - clientX);
      const diffY = Math.abs(this.cache.holdPositionY - clientY);

      if ((diffX !== 0 && diffX > TOLERANCE) || (diffY !== 0 && diffY > TOLERANCE)) {
        this.setState(() => ({
          holding: false,
        }));
      }
    }
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
