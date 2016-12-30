import React from 'react';
import styled from 'styled-components';
import { CARDS_INPUT_RESET_CSS, FIELD_VALUE_FONT_CSS } from '../../../../utils/styles';

const TextInputStyled = styled.textarea`
  ${CARDS_INPUT_RESET_CSS}
  ${FIELD_VALUE_FONT_CSS}
  padding: 10px;
  overflow: hidden;
  min-height: 120px;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;

export default class TextareaInput extends React.Component {

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
