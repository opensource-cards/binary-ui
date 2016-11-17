import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M446.5,269.4H267.9v177.1h-25.3V269.4H65.5v-25.3h177.1V65.5h25.3v178.6h178.6V269.4z"
      />
    </Group>
  )
);
