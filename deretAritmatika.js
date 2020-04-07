function tentukanDeretAritmatika(arr) {
    var check = 0;
    var selisih = 0
    var temp = []
    for(let i = 0; i < arr.length; i++) {
      selisih = arr[i + 1] - arr[i]
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
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  console.log(tentukanDeretAritmatika([1, 2, 1, 2,3, 4])); // false