import React from 'react';
import IndicatorRender from '../../components-styled/IndicatorRender';
import IndicatorSelected from '../../components-styled/IndicatorSelected';
import { INDICATOR_CONTAINER_HEIGHT } from '../../constants';

const propTypes = {
  count: React.PropTypes.number.isRequired,
  index: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
};

const defaultProps = {};

const Indicator = ({ index, count, width }) => {
  const indicatorHeight = INDICATOR_CONTAINER_HEIGHT / 10;
  const indicatorWidth = width / count;
  return (
    <IndicatorRender
      style={{
        height: indicatorHeight,
        top: (INDICATOR_CONTAINER_HEIGHT - indicatorHeight) / 2,
        width,
      }}
    >
      <IndicatorSelected
        style={{
          height: indicatorHeight,
          transform: `translate3d(${indicatorWidth * index}px, 0, 0)`,
          WebkiTransform: `translate3d(${indicatorWidth * index}px, 0, 0)`,
          width: indicatorWidth,
        }}
      />
    </IndicatorRender>
  );
};

Indicator.defaultProps = defaultProps;
Indicator.propTypes = propTypes;

export default Indicator;
