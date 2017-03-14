
export default (position, onPositionChanged) => {
  if (position < 0) {
    onPositionChanged(0);
    return;
  }
  if (position > 1) {
    onPositionChanged(1);
    return;
  }
  onPositionChanged(position);
};
