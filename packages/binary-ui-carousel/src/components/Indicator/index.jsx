import PropTypes from 'prop-types';
import React from 'react';
import IndicatorFull from './components-styled/IndicatorFull';
import IndicatorSelected from './components-styled/IndicatorSelected';
import mod from '../../utils/mod';

const propTypes = {
  isActivated: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number,
  width: PropTypes.number.isRequired,
};

const defaultProps = {
  selectedIndex: undefined,
};

const Indicator = ({
  isActivated,
  length,
  selectedIndex,
  width,
}) => (
  <IndicatorFull styleWidth={width} >
    {isActivated ? (
      <IndicatorSelected
        length={length}
        selectedIndex={mod(selectedIndex, length)}
        styleWidth={width / length}
      />
    ) : null}
  </IndicatorFull>
);

Indicator.defaultProps = defaultProps;
Indicator.propTypes = propTypes;

export default Indicator;
