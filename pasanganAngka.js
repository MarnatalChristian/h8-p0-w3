function pasanganTerbesar(num) {
    
    var strNum = num.toString();
    var result = 0;
    var biggest = 0;
    var arrNum = []

    for(let i = 0; i < strNum.length; i++) {
        arrNum.push(strNum[i])
    }
    for(let j = 0; j < arrNum.length; j++) {
        if(arrNum[j] > biggest ){
            biggest = arrNum[j]
            result = Number(biggest + arrNum[j + 1])
        }
    }
    return result
}

  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99