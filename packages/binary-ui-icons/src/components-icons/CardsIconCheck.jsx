import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M223.9,329.7
        c-2.4,2.4-5.8,4.4-8.8,4.4s-6.4-2.1-8.9-4.5l-56-56l17.8-17.8l47.2,47.2l124.8-125.7l17.5,18.1L223.9,329.7z"
      />
    </Group>
  )
);
