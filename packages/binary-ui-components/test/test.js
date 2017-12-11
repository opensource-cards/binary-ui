import { expect } from 'chai';
import { isLeftMouseButton } from '../src/utils/events';

describe('itils', () => {
  describe('events', () => {
    describe('isLeftMouseButton', () => {
      it('should return true if left mouse button clicked', () =>
        expect(isLeftMouseButton({ button: 0 })).to.be.true
      );
    });
  });
});
