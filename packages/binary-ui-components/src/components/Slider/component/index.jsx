import autobind from 'autobind-decorator';
import React from 'react';
import { CardsIconMinus, CardsIconAdd } from 'binary-ui-icons';

import ListItemContents from '../../ListItemContents';
import SliderContainer from '../components-styled/SliderContainer'
import SliderHandler from '../components-styled/SliderHandler'
import SliderScale from '../components-styled/SliderScale'
import SliderScaleIcon from '../components-styled/SliderScaleIcon'

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  isChecked: false,
};

export default class Slider extends React.Component {

  @autobind
  onClick() {
    const { isChecked, onChange } = this.props;
    if (onChange) {
      const isCheckedNew = !isChecked;
      onChange(isCheckedNew);
    }
  }

  render() {
    const { isChecked } = this.props;
    return (
      <ListItemContents isEdit={false} >
        <SliderContainer>
          <SliderScaleIcon IconComponent={CardsIconMinus} />
          <SliderScale>
            <SliderHandler />
          </SliderScale>
          <SliderScaleIcon IconComponent={CardsIconAdd} />
        </SliderContainer>
      </ListItemContents>
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
