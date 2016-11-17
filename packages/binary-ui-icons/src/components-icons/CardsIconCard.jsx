import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M64,133.4v245.1h384V133.4H64z M145,308.2c-8.8,0-16-7.2-16-16s7.2-16,16-16s16,7.2,16,16S153.8,308.2,145,308.2z
        M145,236.4c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C161,229.2,153.8,236.4,145,236.4z M385,300.2H193v-16h192V300.2z
        M385,228.4H193v-16h192V228.4z"
      />
    </Group>
  )
);
