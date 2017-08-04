import { expect } from 'chai';
import { getEditStyle } from '../src/utils/styles-api-utils';
import { getActionColorExt } from '../src/utils/styles-api';
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

  describe('Styles-api, getActionColorExt()', () => {
    const color = '#ffffff';
    const colorDisabled = '#D3D3D3';

    it('should return colorDisabled if disabled', () => expect(
        getActionColorExt(color, colorDisabled, true)
      ).to.equal(colorDisabled)
    );

    it('should return color if active', () => expect(
        getActionColorExt(color, colorDisabled, false)
      ).to.equal(color)
    );

    it('should return color if no isActive or isDisabled specified', () => expect(
        getActionColorExt(color, colorDisabled)
      ).to.equal(color)
    );
  });
});
