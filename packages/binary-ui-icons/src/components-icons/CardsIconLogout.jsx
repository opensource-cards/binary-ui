import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M268.5,83.5c0,-6.899 -5.601,-12.5 -12.5,-12.5c-6.899,0 -12.5,5.601 -12.5,12.5l0,198c0,6.899 5.601,12.5 12.5,12.5c6.899,0 12.5,-5.601 12.5,-12.5l0,-198Z"
      />
      <Shape
        d="M355.902,124.053c-3.509,-2.219 -5.841,-6.134 -5.841,-10.589c0,-6.91 5.61,-12.52 12.52,-12.52c3.071,0 5.885,1.108 8.065,2.946c46.062,34.785 75.854,89.996 75.854,152.11c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-62.406 30.073,-117.843 76.504,-152.599l0.01,0.011c2.085,-1.55 4.667,-2.468 7.462,-2.468c6.91,0 12.52,5.61 12.52,12.52c0,4.503 -2.382,8.454 -5.954,10.66c-39.814,30.235 -65.542,78.075 -65.542,131.876c0,91.342 74.158,165.5 165.5,165.5c91.342,0 165.5,-74.158 165.5,-165.5c0,-53.79 -25.717,-101.622 -65.517,-131.858c-0.032,-0.024 -0.059,-0.054 -0.081,-0.089Z"
      />
    </Group>
  )
);
