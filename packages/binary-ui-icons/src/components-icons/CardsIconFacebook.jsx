import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M427.2,63.5H84.8c-11.7,0-21.2,9.5-21.2,21.2v342.4c0,11.7,9.5,21.2,21.2,21.2l184.4,0V299.4H219v-58.1h50.2v-42.8
        c0-49.7,30.4-76.8,74.7-76.8c21.2,0,39.5,1.6,44.8,2.3v52l-30.8,0c-24.1,0-28.8,11.5-28.8,28.3v37.1h57.5l-7.5,58.1h-50v149.1h98.1
        c11.7,0,21.2-9.5,21.2-21.2V84.8C448.5,73.1,438.9,63.5,427.2,63.5z"
      />
    </Group>
  )
);
