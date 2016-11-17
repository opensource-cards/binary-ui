import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape d="M241.6,98.751l-142.8,0.249l0.249,142.8l142.8,-0.249l-0.249,-142.8Z" />
      <Shape d="M413.2,98.451l-142.8,0.25l0.249,142.799l142.8,-0.249l-0.249,-142.8Z" />
      <Shape d="M241.899,270.051l-142.8,0.249l0.249,142.8l142.8,-0.25l-0.249,-142.799Z" />
      <Shape d="M413.498,269.751l-142.799,0.249l0.249,142.8l142.8,-0.249l-0.25,-142.8Z" />
    </Group>
  )
);
