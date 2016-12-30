import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M256,65.5c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-105.14 85.36,-190.5 190.5,-190.5Zm0,25c91.342,0 165.5,74.158 165.5,165.5c0,91.342 -74.158,165.5 -165.5,165.5c-91.342,0 -165.5,-74.158 -165.5,-165.5c0,-91.342 74.158,-165.5 165.5,-165.5Zm79.735,177.988l-159.47,0c-6.892,0 -12.488,-5.596 -12.488,-12.488c0,-6.892 5.596,-12.488 12.488,-12.488l159.47,0c6.892,0 12.488,5.596 12.488,12.488c0,6.892 -5.596,12.488 -12.488,12.488Z" />
    </Group>
  )
);
