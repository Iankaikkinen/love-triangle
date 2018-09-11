/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var uniqueItems = Array.from(new Set(preferences));
  return (uniqueItems.length/3)>>0;
};
