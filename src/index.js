const matrix8x8 = mapFn =>
    new Array(8).fill(0).map((_, i) => new Array(8).fill(0).map((_, j) => mapFn(i, j)));

const at = matrix => (i, j) => i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length && matrix[i][j];

module.exports = function canReach(startPos, finalPos, steps) {
  let imIn = matrix8x8((i, j) => i === startPos[0] - 1 && j === startPos[1] - 1);
  for(let i = 0; i < steps; i++) {
      const get = at(imIn);
      imIn = matrix8x8((i, j) => get(i - 1, j - 2) || get(i - 1, j + 2) || get(i + 1, j - 2) || get(i + 1, j + 2) ||
          get(i - 2, j - 1) || get(i - 2, j + 1) || get(i + 2, j - 1) || get(i + 2, j + 1));
  }

  return imIn[finalPos[0] - 1][finalPos[1] - 1];
};
