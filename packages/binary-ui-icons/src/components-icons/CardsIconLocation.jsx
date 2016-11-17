import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M256,32c-79.529,0-144,64.471-144,144c0,112,144,304,144,304s144-192,144-304C400,96.471,335.529,32,256,32z M256,222.9
        c-25.9,0-46.9-21-46.9-46.9s21-46.9,46.9-46.9s46.9,21,46.9,46.9S281.9,222.9,256,222.9z"
      />
    </Group>
  )
);
