function balikString(kata) {
    let str = '';
    let hasil = '';
    for(let i = 0; i < kata.length; i++) {
        str += kata[i]
    }
    for(let j = str.length - 1; j >= 0; j--){
        hasil += str[j]
    }
    return hasil
}
console.log(balikString(['hello world!']));