import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M255.871,100.5c40.897,-0.071 74.158,33.074 74.229,73.971c0.071,40.897 -33.074,74.158 -73.971,74.229c-40.897,0.071 -74.158,-33.074 -74.229,-73.971c-0.071,-40.897 33.074,-74.158 73.971,-74.229Z"
      />
      <Shape d="M428.1,411.4c-11.6-84.7-84.2-149.9-172.1-149.9S95.5,326.7,83.9,411.4H428.1z" />
    </Group>
  )
);
