import React from 'react';
import TextInputStyled from '../../components-styled/TextInputStyled';

const propTypes = {
  onRef: React.PropTypes.func,
};

const defaultProps = {
  onRef: undefined,
};

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
    // NOTE: we do ths not to pass onRef tp a child component
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
