import PropTypes from 'prop-types';
import React from 'react';
import Cards from '../Cards';
import CarouselContainer from './components-styled/CarouselContainer';
import IndicatorContainer from './components-styled/IndicatorContainer';
import PlaceholderContainer from './components-styled/PlaceholderContainer';
import getButtons from './utils/buttons';
import Indicator from '../Indicator';
import { INDICATOR_CONTAINER_HEIGHT } from '../../constants';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  containerHeight: PropTypes.number.isRequired,
  containerWidth: PropTypes.number.isRequired,
  isLoop: PropTypes.bool,
  isPlaceholder: PropTypes.bool,
  selectedIndex: PropTypes.number,
  onChangeIndex: PropTypes.func.isRequired,
  onSwipeEnd: PropTypes.func,
  onSwipeStart: PropTypes.func,
  renderButtonLeft: PropTypes.func.isRequired,
  renderButtonRight: PropTypes.func.isRequired,
  renderPlaceholder: PropTypes.func,
};

const defaultProps = {
  isLoop: false,
  isPlaceholder: false,
  selectedIndex: undefined,
  onSwipeEnd: undefined,
  onSwipeStart: undefined,
  renderPlaceholder: () => null,
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnimatingLeft: false,
      isAnimatingRight: false,
      isSelectedIndexChanged: false,
    };
    this.gerIsVisible = this.gerIsVisible.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { selectedIndex } = this.props;
    if (selectedIndex !== nextProps.selectedIndex) {
      this.setState(() => ({
        isSelectedIndexChanged: true,
      }));
    }
  }

  onBack() {
    const { onChangeIndex, selectedIndex } = this.props;
    const { isAnimatingLeft, isAnimatingRight } = this.state;
    if (isAnimatingLeft === true || isAnimatingRight === true) {
      return;
    }
    this.setState(() => ({
      isAnimatingLeft: true,
    }), () => {
      onChangeIndex(selectedIndex - 1);
    });
  }

  onNext() {
    const { onChangeIndex, selectedIndex } = this.props;
    const { isAnimatingLeft, isAnimatingRight } = this.state;
    if (isAnimatingLeft === true || isAnimatingRight === true) {
      return;
    }
    this.setState(() => ({
      isAnimatingRight: true,
    }), () => {
      onChangeIndex(selectedIndex + 1);
    });
  }

  onTransitionEnd() {
    this.setState(() => ({
      isAnimatingLeft: false,
      isAnimatingRight: false,
      isSelectedIndexChanged: false,
    }));
  }

  getButtonWidth() {
    const { containerWidth } = this.props;
    return containerWidth / 4;
  }

  getButtonStyle() {
    return {
      height: INDICATOR_CONTAINER_HEIGHT,
      width: this.getButtonWidth(),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  }

  getLeftButtonProps(onClick) {
    const { isLoop, selectedIndex } = this.props;
    const isActivated = this.isCarouselActivated();
    return getButtons(
      !isActivated || (!isLoop && selectedIndex === 0),
      this.getButtonStyle(),
      onClick,
    );
  }

  getRightButtonProps(onClick) {
    const {
      children,
      isLoop,
      selectedIndex,
    } = this.props;
    const isActivated = this.isCarouselActivated();
    return getButtons(
      !isActivated || (!isLoop && children.length - 1 === selectedIndex),
      this.getButtonStyle(),
      onClick,
    );
  }

  isCarouselActivated() {
    const { children, isPlaceholder, selectedIndex } = this.props;
    if (isPlaceholder) {
      return false;
    }
    if (children.length === 0) {
      return false;
    }
    if (selectedIndex === undefined) {
      return false;
    }
    return true;
  }

  isCurrentOrPrev(itemIndex) {
    const { selectedIndex } = this.props;
    if (itemIndex === selectedIndex - 1) {
      return true;
    }
    if (itemIndex === selectedIndex) {
      return true;
    }
    return false;
  }

  isCurrentOrNext(itemIndex) {
    const { selectedIndex } = this.props;
    if (itemIndex === selectedIndex) {
      return true;
    }
    if (itemIndex === selectedIndex + 1) {
      return true;
    }
    return false;
  }

  gerIsVisible(itemIndex, dx = 0) {
    const { selectedIndex } = this.props;
    const { isAnimatingLeft, isAnimatingRight, isSelectedIndexChanged } = this.state;
    if (isAnimatingLeft) {
      if (isSelectedIndexChanged) {
        return this.isCurrentOrNext(itemIndex);
      }
      return this.isCurrentOrPrev(itemIndex);
    }
    if (isAnimatingRight) {
      if (isSelectedIndexChanged) {
        return this.isCurrentOrPrev(itemIndex);
      }
      return this.isCurrentOrNext(itemIndex);
    }
    if (dx > 0) {
      return this.isCurrentOrPrev(itemIndex);
    }
    if (dx < 0) {
      return this.isCurrentOrNext(itemIndex);
    }
    return itemIndex === selectedIndex;
  }

  render() {
    const {
      children,
      containerHeight,
      containerWidth,
      isLoop,
      selectedIndex,
      onSwipeEnd,
      onSwipeStart,
      renderButtonLeft,
      renderButtonRight,
      renderPlaceholder,
    } = this.props;
    const isActivated = this.isCarouselActivated();
    return (
      <CarouselContainer
        style={{ height: containerHeight + INDICATOR_CONTAINER_HEIGHT, width: containerWidth }}
      >
        {isActivated ? (
          <Cards
            height={containerHeight}
            isLoop={isLoop}
            selectedIndex={selectedIndex}
            width={containerWidth}
            gerIsVisible={this.gerIsVisible}
            onBack={this.onBack}
            onNext={this.onNext}
            onSwipeEnd={onSwipeEnd}
            onSwipeStart={onSwipeStart}
            onTransitionEnd={this.onTransitionEnd}
          >
            {children}
          </Cards>
        ) : (
          <PlaceholderContainer
            style={{ height: containerHeight, width: containerWidth }}
          >
            {renderPlaceholder()}
          </PlaceholderContainer>
        )}
        <IndicatorContainer styleWidth={containerWidth} >
          {renderButtonLeft(this.getLeftButtonProps(this.onBack))}
          <Indicator
            isActivated={isActivated}
            length={children.length}
            selectedIndex={selectedIndex}
            width={containerWidth / 2}
          />
          {renderButtonRight(this.getRightButtonProps(this.onNext))}
        </IndicatorContainer>
      </CarouselContainer>
    );
  }
}

Carousel.defaultProps = defaultProps;
Carousel.propTypes = propTypes;

export default Carousel;
