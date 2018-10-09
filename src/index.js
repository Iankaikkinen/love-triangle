module.exports = function getLoveTrianglesCount(a= []) {
 let counter = 0;  
 for (i = 0; i<(a.length); i++) { 
     let lover1 = a[i] - 1;       
     if (lover1 == i) continue;
     let lover2 = a[lover1] - 1;  
     if (lover1 == lover2) continue;
     let lover3 = a[lover2] - 1;  
     if (lover3 == lover2) continue;
     if (lover3 == i) counter++;
  }
return Math.floor(counter / 3);
};
