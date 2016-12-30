import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M46.567,213.26c0.724,-5.43 4.999,-9.923 10.692,-10.684c0.842,-0.112 1.675,-0.138 2.491,-0.084l393.315,0c6.891,0 12.485,5.594 12.485,12.485c0,1.056 -0.132,2.082 -0.379,3.062l-28.028,186.731c-1.023,6.813 -7.398,11.604 -14.228,10.691l-336.568,0c-6.83,0.913 -13.132,-3.889 -14.065,-10.716l-25.601,-187.366c-0.151,-0.777 -0.231,-1.581 -0.231,-2.402c0,-0.583 0.04,-1.156 0.117,-1.717Zm391.944,14.201l-365.251,0l22.276,163.031l318.504,0l24.471,-163.031Zm-251.707,-131.034c0.542,0 1.075,0.035 1.599,0.102c3.979,-0.072 7.926,1.753 10.408,5.236l17.082,23.97l197.321,0c0.196,0 0.39,0.004 0.584,0.013c6.656,0.266 11.979,5.754 11.979,12.475l0,32.761c0,6.89 -5.595,12.484 -12.485,12.484c-6.891,0 -12.485,-5.594 -12.485,-12.484l0,-20.28l-189.584,0c-0.552,0 -1.097,-0.036 -1.631,-0.106c-3.967,0.062 -7.899,-1.763 -10.373,-5.236l-17.079,-23.965l-74.505,0l0,49.587c0,6.89 -5.594,12.484 -12.484,12.484c-6.891,0 -12.485,-5.594 -12.485,-12.484l0,-62.027c0,-1.954 0.45,-3.803 1.251,-5.451c2.017,-4.186 6.301,-7.079 11.255,-7.079l91.632,0Z"
      />
    </Group>
  )
);
