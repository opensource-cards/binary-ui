import PropTypes from 'prop-types';
import React from 'react';
import SliderHandler from '../SliderHandler';
import SliderScale from '../../components-styled/SliderScale';
import { HOLD_TIME, TOLERANCE } from '../../utils/config';
import getPosition from '../../utils/position';
import { isLeftMouseButton, isUndefinedButton } from '../../../../utils/events';

const propTypes = {
  innerRef: PropTypes.func,
  position: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  innerRef: () => {},
};

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
    this.onBarRef = this.onBarRef.bind(this);
    this.onDraggingChanged = this.onDraggingChanged.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('touchend', this.onTouchEnd);
    window.addEventListener('touchcancel', this.onTouchCancel);
    window.addEventListener('touchmove', this.onTouchMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('touchcancel', this.onTouchCancel);
    window.removeEventListener('touchmove', this.onTouchMove);
  }

  onBarRef(barRef) {
    const { innerRef } = this.props;
    this.barRef = barRef;
    this.setState(() => ({
      isDomInitialized: true,
    }));
    innerRef(barRef);
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

  getOnHoldHandler(clientX, targetBoundingClientRect) {
    return () => {
      if (this.state.holding) {
        const { onChange } = this.props;
        const newPosition = getPosition(
          targetBoundingClientRect.left,
          clientX,
          targetBoundingClientRect.width,
        );
        onChange(newPosition);
        this.onDraggingChanged(true);
      }
    };
  }

  setOnHoldTimerInitIfNeed(e, holdHandler) {
    const holdTimer = this.cache.holdTimer;
    // allow only left button
    if (
      (holdTimer === null || holdTimer === undefined) &&
      (isLeftMouseButton(e) || isUndefinedButton(e))
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
    if (!this.state.holding) {
      return;
    }
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

  renderSliderHandler(position, onChange) {
    const { dragging, isDomInitialized } = this.state;
    if (!isDomInitialized) {
      return null;
    }
    const barRefBoundingClientRect = this.barRef.getBoundingClientRect();
    return (
      <SliderHandler
        containerLeft={barRefBoundingClientRect.left}
        containerWidth={barRefBoundingClientRect.width}
        dragging={dragging}
        position={position}
        onDraggingChanged={this.onDraggingChanged}
        onPositionChanged={onChange}
      />
    );
  }

  render() {
    const { position, onChange, ...props } = this.props;
    return (
      <SliderScale
        {...props}
        innerRef={this.onBarRef}
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
      >
        {this.renderSliderHandler(position, onChange)}
      </SliderScale>
    );
  }
}

BarWrapper.propTypes = propTypes;
BarWrapper.defaultProps = defaultProps;
