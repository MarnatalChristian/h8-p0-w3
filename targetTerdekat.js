function targetTerdekat(arr) {
    var objO;
    var objX;
    var dist= 0;
    let arrLen = arr.length
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'o') {
            objO = i;
            break;   
        }   
    }
    var result;
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === 'x') {
            objX = j
            dist = Math.abs(objO - objX);
            if(dist < arrLen) {
                arrLen = dist;
                result = arrLen
            }
        }
    }
    if(objX === undefined) {
        return 0
    }

    return result
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2