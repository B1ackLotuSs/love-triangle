/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation'
  
    var z=null ;
     var n = preferences.length;
    preferences.unshift('10000');
      for(var i=1; i<=n; i++)  { 
          for(var j=1; j<=n; j++)   { 
              var c = preferences[i] ;
              if ((c == j) && !(i == j))  {
                  for(var k=1; k<=n; k++) {
                      var d = preferences[j];
                      var g = preferences[k];
                  if ((d == k) && (g == i))  {
                           z=z+1 ; 
                  }
                      }
                  } 
              } 
              
          } return  z/3  ;
};
