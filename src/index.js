/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let sumUPLovers = 0;
  let sumUPfinish = 0;
  
  for (i=0; preferences.length>i; i++){
    
  number1 = preferences[i];
  number2 = preferences[number1-1];
  number3 = preferences[number2-1];
  
  if (number3 == i+1) {sumUPLovers++;};
  if (sumUPLovers === 3) {sumUPfinish++; sumUPLovers = 0;};
  };

  return sumUPfinish;
};
