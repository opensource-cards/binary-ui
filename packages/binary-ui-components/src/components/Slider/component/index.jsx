import React from 'react';
import SliderBar from './SliderBar';
import SliderContainer from '../components-styled/SliderContainer';
import SliderScaleIcon from '../components-styled/SliderScaleIcon';

const propTypes = {
  position: React.PropTypes.number.isRequired,
  onPositionChange: React.PropTypes.func.isRequired,
  renderIconLeft: React.PropTypes.func,
  renderIconRight: React.PropTypes.func,
};

const defaultProps = {
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

const Slider = ({ position, renderIconLeft, renderIconRight, onPositionChange }) => (
  <SliderContainer>
    <SliderScaleIcon>
      {renderIconLeft ? renderIconLeft() : null}
    </SliderScaleIcon>
    <SliderBar position={position} onPositionChange={onPositionChange} />
    <SliderScaleIcon>
      {renderIconRight ? renderIconRight() : null}
    </SliderScaleIcon>
  </SliderContainer>
);

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;

export default Slider;
