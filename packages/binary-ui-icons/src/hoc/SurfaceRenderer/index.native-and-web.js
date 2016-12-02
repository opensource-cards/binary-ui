import React from 'react';

const DEFAULT_SIZE = 512;

export default (Group, Shape, Surface) => {
  const propTypes = {
    color: React.PropTypes.string,
    size: React.PropTypes.number.isRequired,
    IconContentComponent: React.PropTypes.func.isRequired,
  };

  const defaultProps = {
    color: '#000000',
  };

  const SurfaceRendererNativeAndWeb = ({ color, size, IconContentComponent }) => {
    const scale = size / DEFAULT_SIZE;
    const ColoredShape = (shapeProps) => (<Shape fill={color} {...shapeProps} />);
    return (
      <Surface height={size} width={size} >
        <Group fill={color} scale={scale} >
          <IconContentComponent Group={Group} Shape={ColoredShape} />
        </Group>
      </Surface>
    );
  };

  SurfaceRendererNativeAndWeb.propTypes = propTypes;
  SurfaceRendererNativeAndWeb.defaultProps = defaultProps;

  return SurfaceRendererNativeAndWeb;
};
