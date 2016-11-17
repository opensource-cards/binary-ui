import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape d="M132,75.6l0,360.8l248,0l0,-360.8l-248,0Zm229.2,341.9l-210.4,0l0,-278.7l210.4,0l0,278.7Z" />
      <Shape d="M350.408,241.039l-188.199,0.361l0.037,19.7l188.2,-0.361l-0.038,-19.7Z" />
      <Shape d="M350.3,184.539l-188.2,0.361l0.038,19.7l188.2,-0.361l-0.038,-19.7Z" />
      <Shape d="M350.625,354.038l-188.2,0.362l0.038,19.7l188.2,-0.362l-0.038,-19.7Z" />
      <Shape d="M350.517,297.538l-188.2,0.362l0.038,19.7l188.199,-0.362l-0.037,-19.7Z" />
    </Group>
  )
);
