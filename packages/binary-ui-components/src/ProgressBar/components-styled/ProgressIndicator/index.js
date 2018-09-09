import styled from 'styled-components';

export default styled.div`
  background-color: ${props => (props.progress >= 90
    ? props.theme.colorRed40
    : 'hsl(0, 0%, 0%)'
  )};
  height: 2px;
  position: absolute;
  top: ${props => props.theme.sizeListItemHeight / 2}px;
  width: ${props => props.progress}%;
`;
