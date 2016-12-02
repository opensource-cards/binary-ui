import React from 'react';
import SurfaceWrapper from '../../components-styled/SurfaceWrapper';
import SurfaceRenderer from '../SurfaceRenderer';

export default function (IconContentComponent) {
  const propTypes = {
    color: React.PropTypes.string,
    size: React.PropTypes.number,
  };

  const defaultProps = {
    size: 20,
  };

  const CardsIconHOCComponent = ({ color, size, ...surfaceProps }) => (
    <SurfaceWrapper size={size} {...surfaceProps} >
      <SurfaceRenderer color={color} size={size} IconContentComponent={IconContentComponent} />
    </SurfaceWrapper>
  );

  CardsIconHOCComponent.propTypes = propTypes;
  CardsIconHOCComponent.defaultProps = defaultProps;

  return CardsIconHOCComponent;
}
