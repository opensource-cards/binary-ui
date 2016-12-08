// import { actionAreaEditorHOC } from 'react-action-hoc';
import React from 'react';
import TextInputStyled from '../../components-styled/TextInputStyled';

const propTypes = {};

const defaultProps = {};

export default class TextFieldInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, ...props } = this.props;
    return (
      <TextInputStyled
        onChangeText={(text) => {
          onChange({
            target: {
              value: text,
            },
          });
        }}
        {...props}
      />
    );
  }
}

TextFieldInput.propTypes = propTypes;
TextFieldInput.defaultProps = defaultProps;
