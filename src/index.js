/**
 * @param a - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(a= []) {
  // your implementation
 let counter = 0;  
 for (i = 0; i<(a.length); i++) { 
     var lover1 = a[i] - 1;       if (lover1 == i) continue;
     var lover2 = a[lover1] - 1;  if (lover1 == lover2) continue;
     var lover3 = a[lover2] - 1;  if (lover3 == lover2) continue;
     if (lover3 == i) { counter++; }
  }
return Math.floor(counter / 3);
};
