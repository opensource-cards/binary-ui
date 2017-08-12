
export default (position, onChange) => {
  if (position < 0) {
    onChange(0);
    return;
  }
  if (position > 1) {
    onChange(1);
    return;
  }
  onChange(position);
};
