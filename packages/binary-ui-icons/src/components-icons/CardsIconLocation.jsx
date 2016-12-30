import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M390.009,191.495c1.255,-63.162 -51.057,-133.775 -134.013,-134.014c-78.689,-0.826 -135.017,65.607 -134.014,134.014c1.064,39.843 9.12,49.137 21.014,73.5c9.383,19.22 99.938,178.282 98,178.5c10.048,15.165 19.338,14.246 28,0l99,-176.5c13.465,-25.227 19.975,-37.321 22.013,-75.5Zm-134.013,-57.5c31.735,0 57.5,25.764 57.5,57.5c0,31.735 -25.765,57.5 -57.5,57.5c-31.736,0 -57.5,-25.765 -57.5,-57.5c0,-31.736 25.764,-57.5 57.5,-57.5Z"
      />
    </Group>
  )
);
