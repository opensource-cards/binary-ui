import { expect } from 'chai';
import { getEditStyle } from '../src/utils/styles-api-utils';
import { isLeftMouseButton } from '../src/utils/events';

describe('Utils', () => {
  describe('Events, isLeftMouseButton()', () => {
    it('should return true if left mouse button clicked', () =>
      expect(isLeftMouseButton({ button: 0 })).to.be.true
    );
  });

  describe('Styles-api-utils, getEditStyle()', () => {
    const color = '#ffffff';
    const style = getEditStyle(color);
    it('should have correct box-sizing', () => expect(style.boxSizing).to.equal('border-box'));
    it('should contain passed color', () => expect(style.borderBottom).to.contain(color));
  });
});
