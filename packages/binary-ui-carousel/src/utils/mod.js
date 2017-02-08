
export default (index, count) => {
  const indexModCount = index % count;
  return indexModCount < 0 ? (indexModCount + count) : indexModCount;
};
