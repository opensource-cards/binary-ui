import React from 'react';
import { actionAreaBlockHOC } from 'react-action-hoc';
import ActionableIcon from '../../../ActionableIcon';

export default actionAreaBlockHOC(
  (props) => (<ActionableIcon {...props} />)
);
