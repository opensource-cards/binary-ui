import React from 'react';
import cardsIconHOC from '../hoc';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M65.5,256a190.5,190.5 0 1,0 381,0a190.5,190.5 0 1,0 -381,0"
      />
    </Group>
  )
);
