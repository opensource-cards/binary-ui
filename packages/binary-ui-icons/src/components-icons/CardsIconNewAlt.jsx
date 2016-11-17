import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7
        c-105.1,0-190.7-85.5-190.7-190.7S150.9,65.3,256,65.3S446.7,150.9,446.7,256S361.1,446.7,256,446.7z"
      />
      <Shape
        d="M264.1,128l-16.8,0l0,119.9l-119.3,0l0,16.8l119.3,0l0,119.3l16.8,0l0,-119.3l119.9,0l0,-16.8l-119.9,0l0,-119.9Z"
      />
    </Group>
  )
);
