import React from 'react';
import TextInputStyled from '../../components-styled/TextInputStyled';

const propTypes = {};

const defaultProps = {};

class TextFieldInput extends React.Component {

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

TextFieldInput.propTypes = propTypes;
TextFieldInput.defaultProps = defaultProps;

export default TextFieldInput;
