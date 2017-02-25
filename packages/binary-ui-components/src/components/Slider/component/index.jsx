import { CardsIconMinusAlt, CardsIconNewAlt } from 'binary-ui-icons';
import React from 'react';
import SliderContainer from '../components-styled/SliderContainer';
import SliderHandler from '../components-styled/SliderHandler';
import SliderScale from '../components-styled/SliderScale';
import SliderScaleIcon from '../components-styled/SliderScaleIcon';

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

const defaultProps = {};

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() { }

  render() {
    return (
      <SliderContainer>
        <SliderScaleIcon IconComponent={CardsIconMinusAlt} />
        <SliderScale>
          <SliderHandler />
        </SliderScale>
        <SliderScaleIcon IconComponent={CardsIconNewAlt} />
      </SliderContainer>
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
