function tentukanDeretGeometri(arr) {
    var check = 0;
    var temp = [];
    for(let i = 0; i < arr.length; i++) {
        for(let i = 0; i < arr.length; i++) {
            selisih = arr[i + 1] / arr[i]
              if(arr[i + 1] !== undefined) {
                  temp.push(selisih)
              }
          }
          for(let j = 0; j < temp.length; j++) {
            if(temp[j] === temp[j+1]){
               check++
               
            }
          }
          if(check == temp.length - 1) {
            return true
         }
         else if(check !== temp.length -1){
            return false
         }
    }
    return check
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
  console.log(tentukanDeretGeometri([1, 1, 1, 2, 1, 1, 1])); // false