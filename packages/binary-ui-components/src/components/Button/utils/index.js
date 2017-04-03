import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import ButtonTypes from '../constants/button-component-types';

export function getArrowClass(type) {
  switch (type) {
    case ButtonTypes.RIGHT:
      return ArrowRight;
    case ButtonTypes.DOWN:
      return ArrowDown;
    default:
      return ArrowDown;
  }
}
