import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape d="M132,75.6v360.8h248V75.6H132z M361.2,417.5H150.8V138.8h210.4V417.5z" />
      <Shape
        d="M301.5,263.2l-35.5,0l0,-35.6l-20,0l0,35.6l-35.5,0l0,19.9l35.5,0l0,35.5l20,0l0,-35.5l35.5,0l0,-19.9Z"
      />
    </Group>
  )
);
