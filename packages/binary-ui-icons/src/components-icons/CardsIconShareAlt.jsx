import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M288,144l0,16l112,0l0,272l-288,0l0,-272l112,0l0,-16l-128,0l0,304l320,0l0,-304l-128,0Z"
      />
      <Shape
        d="M193.1,118.1l-11.6,-11.6l74.5,-74.5l74.5,74.5l-11.6,11.6l-54.7,-54.7l0,243l-16.4,0l0,-243l-54.7,54.7Z"
      />
    </Group>
  )
);
