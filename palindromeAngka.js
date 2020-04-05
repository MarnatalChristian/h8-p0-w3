function angkaPalindrome(num) {
   for(let i = 0; i < num; i++) {
       var numStr = String(num);
       if(numStr.length === 1) {
           num++
           return num
        }
        else if(numStr.length > 1) {
            var temp = '';
            for(let j = numStr.length - 1; j >= 0; j--) {
                temp += numStr[j]
            }
            if(numStr !== temp) {
                num++
            }
            else {
                return num
            }

        }
   }

}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001