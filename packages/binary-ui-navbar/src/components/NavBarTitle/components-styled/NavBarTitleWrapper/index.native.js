import styled from 'styled-components/native';

export default styled.TouchableOpacity.attrs({
  activeOpacity: props => (props.isActionable === true ? 0.5 : 1),
})`
  align-items: center;
  flex-direction: row;
  flex: 4;
  justify-content: center;
  overflow: hidden;
`;
