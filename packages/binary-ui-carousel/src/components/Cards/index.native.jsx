import React from 'react';
import { PanResponder } from 'react-native';
import PropTypes from 'prop-types';
import Card from './components-styled/Card';
import CardsContainer from './components-styled/CardsContainer';
import mod from '../../utils/mod';
import { SWIPE_THRESHOLD, TRANSITION_VIEW_STATE_DURATION } from '../../constants';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  height: PropTypes.number.isRequired,
  isLoop: PropTypes.bool.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  gerIsVisible: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onSwipeEnd: PropTypes.func,
  onSwipeStart: PropTypes.func,
  onTransitionEnd: PropTypes.func.isRequired,
};

const defaultProps = {
  onSwipeEnd: undefined,
  onSwipeStart: undefined,
};

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      offset: 0,
      velocity: 0,
    };
    this.isAllowMove = this.isAllowMove.bind(this);
    this.isLeftSwipeDisabled = this.isLeftSwipeDisabled.bind(this);
    this.isRightSwipeDisabled = this.isRightSwipeDisabled.bind(this);
    this.validateSwipe = this.validateSwipe.bind(this);
    this.onGrant = this.onGrant.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onRelease = this.onRelease.bind(this);
    this.onSetResponder = this.onSetResponder.bind(this);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.onSetResponder,
      onMoveShouldSetPanResponder: this.onSetResponder,
      onPanResponderGrant: this.onGrant,
      onPanResponderMove: this.onMove,
      onPanResponderRelease: this.onRelease,
      onPanResponderTerminationRequest: () => false,
      onPanResponderTerminate: this.onRelease,
    });
  }

  onGrant() {
    const { onSwipeStart } = this.props;
    if (onSwipeStart) {
      onSwipeStart();
    }
  }

  onMove(evt, gestureState) {
    if (this.isAllowMove(gestureState.dx)) {
      this.setState(() => ({
        offset: gestureState.dx,
        velocity: gestureState.vx,
        isActive: true,
      }));
    }
  }

  onRelease() {
    const { onSwipeEnd } = this.props;
    if (onSwipeEnd) {
      onSwipeEnd();
    }
    this.validateSwipe();
    this.setState(() => ({
      isActive: false,
    }));
  }

  onSetResponder(evt, gestureState) {
    return Math.abs(gestureState.dx) > SWIPE_THRESHOLD &&
      this.isAllowMove(gestureState.dx);
  }

  isAllowMove(offset) {
    return (Math.sign(offset) > 0 && !this.isLeftSwipeDisabled())
      || (Math.sign(offset) < 0 && !this.isRightSwipeDisabled());
  }

  isLeftSwipeDisabled() {
    const { isLoop, selectedIndex } = this.props;
    return !isLoop && selectedIndex === 0;
  }

  isRightSwipeDisabled() {
    const { isLoop, selectedIndex, children } = this.props;
    return !isLoop && children.length - 1 === selectedIndex;
  }

  validateSwipe() {
    const { width, onBack, onNext } = this.props;
    const { offset, velocity } = this.state;
    const t0 = TRANSITION_VIEW_STATE_DURATION * 1000;
    const acceleration = -velocity / (TRANSITION_VIEW_STATE_DURATION * 1000);
    const x = offset + (velocity * t0) + ((acceleration * t0 * t0) / 2);
    if (Math.abs(x) > width / 2) {
      if (Math.sign(x) > 0 && !this.isLeftSwipeDisabled()) {
        onBack();
        return;
      }
      if (Math.sign(x) < 0 && !this.isRightSwipeDisabled()) {
        onNext();
      }
    }
  }

  render() {
    const {
      children,
      height,
      selectedIndex,
      width,
      gerIsVisible,
      onTransitionEnd,
    } = this.props;
    const { isActive, offset } = this.state;
    return (
      <CardsContainer
        style={{ height, width }}
        {...this.panResponder.panHandlers}
      >
        {[selectedIndex - 1, selectedIndex, selectedIndex + 1].map((itemIndex, index) => (
          <Card
            offset={(offset / width)}
            isActive={isActive}
            index={index}
            key={`key-${itemIndex}`}
            styleHeight={height}
            styleWidth={width}
            onTransitionEnd={itemIndex === selectedIndex ? onTransitionEnd : undefined}
          >
            {gerIsVisible(itemIndex, Math.sign(offset))
              ? children[mod(itemIndex, children.length)]
              : null}
          </Card>
        ))}
      </CardsContainer>
    );
  }
}

Cards.defaultProps = defaultProps;
Cards.propTypes = propTypes;

export default Cards;
