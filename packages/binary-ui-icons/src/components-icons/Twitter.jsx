import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M456.214,131.688c-14.765,6.534 -30.548,10.947 -47.179,12.983c16.971,-10.182 30.038,-26.305 36.148,-45.482c-15.868,9.419 -33.433,16.292 -52.186,19.941c-15.019,-16.038 -36.402,-26.05 -59.992,-26.05c-45.397,0 -82.139,36.826 -82.139,82.223c0,6.449 0.679,12.729 2.122,18.753c-68.308,-3.394 -128.894,-36.148 -169.37,-85.957c-7.043,12.134 -11.116,26.305 -11.116,41.324c0,28.511 14.595,53.713 36.658,68.477c-13.577,-0.339 -26.305,-4.073 -37.336,-10.267c0,0.339 0,0.679 0,1.018c0,39.882 28.341,73.06 65.931,80.612c-6.873,1.867 -14.17,2.885 -21.637,2.885c-5.261,0 -10.438,-0.509 -15.444,-1.527c10.437,32.669 40.815,56.428 76.793,57.107c-28.087,22.062 -63.556,35.214 -102.08,35.214c-6.618,0 -13.152,-0.424 -19.601,-1.188c36.233,23.59 79.424,37.166 125.754,37.166c151.296,0 233.944,-125.33 233.944,-234.028c0,-3.564 -0.085,-7.128 -0.255,-10.607c16.038,-11.625 29.954,-26.05 40.985,-42.597Z"
      />
    </Group>
  )
);