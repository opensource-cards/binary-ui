import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M480,207H308.6L256,47.9L203.4,207H32l140.2,97.9L117.6,464L256,365.4L394.4,464l-54.7-159.1L480,207z M362.6,421.2
        l-106.6-76l-106.6,76L192,298.7L84,224h131l41-123.3L297,224h131l-108,74.6L362.6,421.2z"
      />
    </Group>
  )
);
