import { CardsIconArrowDown, CardsIconArrowRight } from 'binary-ui-icons';
import ButtonTypes from '../constants/button-component-types';

export function getArrowClass(type) {
  switch (type) {
    case ButtonTypes.RIGHT:
      return CardsIconArrowRight;
    case ButtonTypes.DOWN:
      return CardsIconArrowDown;
    default:
      return CardsIconArrowDown;
  }
}
