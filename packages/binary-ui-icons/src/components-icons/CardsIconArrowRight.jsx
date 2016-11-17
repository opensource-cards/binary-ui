import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M160,115.4l20.7,-19.4l171.3,160l-171.3,160l-20.7,-19.3l150.5,-140.7l-150.5,-140.6Z"
      />
    </Group>
  )
);
