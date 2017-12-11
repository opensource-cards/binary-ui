import { expect } from 'chai';
import { getHighlightEditStyle } from '../src/index.native-and-web';

describe('index.native-and-web', () => {
  describe('getHighlightEditStyle', () => {
    const color = '#ffffff';
    it('isEditable, isValid, !isTypingHighlight should contain passed color', () => expect(
      getHighlightEditStyle(true, true, false, color).replace(/\s/g, '')
    ).to.equal(`
      border-bottom-color: ${color};
      border-bottom-width: 1px;
      border-left-width: 0;
      border-right-width: 0;
      border-top-width: 0;
      border-style: solid;
    `.replace(/\s/g, '')));
  });
});
