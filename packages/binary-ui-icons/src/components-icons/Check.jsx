import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M256,65.2C150.69,65.2,65.2,150.69,65.2,256S150.69,446.8,256,446.8,446.8,361.31,446.8,256,361.31,65.2,256,65.2Zm81.52,147.72L233.66,316.78a12.64,12.64,0,0,1-17.8,0L174.48,275.4a12.52,12.52,0,1,1,17.7-17.7l32.58,32.58,95.06-95.06a12.52,12.52,0,0,1,17.7,17.7Z"
      />
    </Group>
  )
);
