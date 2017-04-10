import React from 'react';
import SurfaceWrapper from '../../components-styled/SurfaceWrapper';
import SurfaceRenderer from '../SurfaceRenderer';

export default (IconContentComponent) => {
  const propTypes = {
    color: React.PropTypes.string,
    size: React.PropTypes.number,
  };

  const defaultProps = {
    color: undefined,
    size: 20,
  };

  const CardsIconHOCComponent = ({ color, size, ...props }) => (
    <SurfaceWrapper size={size} {...props} >
      <SurfaceRenderer color={color} size={size} IconContentComponent={IconContentComponent} />
    </SurfaceWrapper>
  );

  CardsIconHOCComponent.propTypes = propTypes;
  CardsIconHOCComponent.defaultProps = defaultProps;

  return CardsIconHOCComponent;
};
