export default (index, length) => {
  if (length === 0) {
    return undefined;
  }
  const indexModLength = index % length;
  return indexModLength < 0 ? indexModLength + length : indexModLength;
};
