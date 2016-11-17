import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M264,144l0,162l-16,0l0,-162l-152,0l0,304l320,0l0,-304l-152,0Z" 
      />
      <Shape
        d="M264,63.4l54.8,54.7l11.6,-11.6l-74.4,-74.5l-74.5,74.5l11.7,11.6l54.8,-54.7l0,80.6l16,0l0,-80.6Z"
      />
    </Group>
  )
);
