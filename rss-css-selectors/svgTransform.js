module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  process() {
    return {
      // eslint-disable-next-line quotes
      code: `module.exports = {};`,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getCacheKey() {
    // The output is always the same.
    return 'svgTransform';
  },
};
