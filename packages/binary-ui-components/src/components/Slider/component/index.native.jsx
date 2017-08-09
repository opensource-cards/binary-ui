import PropTypes from 'prop-types';
import React from 'react';
import SliderComponent from 'react-native-slider';
import SliderContainer from '../components-styled/SliderContainer';
import SliderScaleIcon from '../components-styled/SliderScaleIcon';

const propTypes = {
  position: PropTypes.number.isRequired,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
  onPositionChange: PropTypes.func.isRequired,
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
    <SliderComponent
      style={{
        flex: 9,
      }}
      trackStyle={{
        height: 1,
      }}
      minimumTrackTintColor="#b3b3b3"
      thumbStyle={{
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#000',
      }}
      value={position}
      onValueChange={onPositionChange}
    />
    <SliderScaleIcon>
      {renderIconRight ? renderIconRight() : null}
    </SliderScaleIcon>
  </SliderContainer>
);

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;

export default Slider;
