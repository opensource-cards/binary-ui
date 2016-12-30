import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M256,65.5c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-105.14 85.36,-190.5 190.5,-190.5Zm12.5,169c0,-6.899 -5.601,-12.5 -12.5,-12.5c-6.899,0 -12.5,5.601 -12.5,12.5l0,82c0,6.899 5.601,12.5 12.5,12.5c6.899,0 12.5,-5.601 12.5,-12.5l0,-82Zm-12.5,-51.5c6.899,0 12.5,5.601 12.5,12.5c0,6.899 -5.601,12.5 -12.5,12.5c-6.899,0 -12.5,-5.601 -12.5,-12.5c0,-6.899 5.601,-12.5 12.5,-12.5Z"
      />
    </Group>
  )
);
