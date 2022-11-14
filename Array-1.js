/* Problem 2: Spril Matrix
 
Time Complexity : O(n)
Space Complexity : O(1)
Did this code successfully run on Leetcode : Yes
Three line explanation of solution in plain english 
First we create a variable to store direction i.e. 1 for traversing upwards and -1 for downwards. We split the code in two sections, one for upwards direction and one for downwards direction. While traversing upwards, we check whether our column variable is equal the number of columns in our matrix. If it is, then we change the direction to move downwards else we keep going. Similarly while traversing downwards we check whether our row variable is equal to the number of rows present. If it is, then we change the direction to upwards or else we keep traversing.
*/

// Your code here along with comments explaining your approach
const findDiagonalOrder = (mat) => {
  // debugger;
  if (!mat.length) return [];
  const rowLength = mat.length;
  const colLength = mat[0].length;
  let idx = 0,
    i = 0,
    j = 0;
  const result = [];
  // set direction upwards i.e. 1
  let dir = 1;
  while (idx < rowLength * colLength) {
    result[idx] = mat[i][j];
    idx++;

    // If direction is upwards i.e. 1
    if (dir === 1) {
      if (j === colLength - 1) {
        dir = -1;
        i++;
      } else if (i === 0) {
        dir = -1;
        j++;
      } else {
        i--;
        j++;
      }
    } else {
      if (i === rowLength - 1) {
        dir = 1;
        j++;
      } else if (j === 0) {
        dir = 1;
        i++;
      } else {
        i++;
        j--;
      }
    }
  }
  return result;
};
