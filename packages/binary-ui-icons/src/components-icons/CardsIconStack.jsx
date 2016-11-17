import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape d="M132,75.6v360.8h248V75.6H132z M361.2,417.5H150.8V138.8h210.4V417.5z" />
    </Group>
  )
);
