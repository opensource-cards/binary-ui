import React from 'react';
import { actionAreaEditorHOC } from 'react-action-hoc';
import styled from 'styled-components';
import { CARDS_INPUT_RESET_STYLE_WEB, FIELD_VALUE_FONT_STYLE_WEB } from '../../../../utils/styles';

const TextInputStyled = styled.textarea`
  ${CARDS_INPUT_RESET_STYLE_WEB}
  ${FIELD_VALUE_FONT_STYLE_WEB}
  padding: 10px;
  overflow: hidden;
  min-height: 120px;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;

const TextareaInput = actionAreaEditorHOC(
  class TextareaInputRef extends React.Component {

    constructor(props) {
      super(props);
      this.onRef = this.onRef.bind(this);
    }

    onRef(ref) {
      const { onRef } = this.props;
      if (onRef) {
        onRef(ref);
      }
    }

    render() {
      const { onRef, ...props } = this.props;
      return (
        <TextInputStyled
          innerRef={this.onRef}
          {...props}
        />
      );
    }
  }
);

export default TextareaInput;
