import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M304,96l-16,0l0,80l80,0l0,-16l-64,0l0,-64Z"
      />
      <Shape
        d="M325.3,64H160v48h-48v336h240v-48h48V139L325.3,64z M336,432H128V128h32v272h176V432z M384,384H176V80h142.7l65.3,65.6V384z"
      />
    </Group>
  )
);
