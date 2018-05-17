import React from 'react';
import PropTypes from 'prop-types';
import Card from './components-styled/Card';
import CardsContainer from './components-styled/CardsContainer';
import mod from '../../utils/mod';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  height: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  gerIsVisible: PropTypes.func.isRequired,
  onTransitionEnd: PropTypes.func.isRequired,
};

const defaultProps = {};

const Cards = ({
  children,
  height,
  selectedIndex,
  width,
  gerIsVisible,
  onTransitionEnd,
}) => (
  <CardsContainer style={{ height, width }} >
    {[selectedIndex - 1, selectedIndex, selectedIndex + 1].map((itemIndex, index) => (
      <Card
        index={index}
        key={`key-${itemIndex}`}
        styleHeight={height}
        styleWidth={width}
        onTransitionEnd={itemIndex === selectedIndex ? onTransitionEnd : undefined}
      >
        {gerIsVisible(itemIndex) ? children[mod(itemIndex, children.length)] : null}
      </Card>
    ))}
  </CardsContainer>
);

Cards.defaultProps = defaultProps;
Cards.propTypes = propTypes;

export default Cards;
