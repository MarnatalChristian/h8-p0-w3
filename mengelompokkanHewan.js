function groupAnimals(animals) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = [];

    for (let i = 0; i < alphabet.length; i++) {
        let result = [];
        for (let j = 0; j < animals.length; j++) {
                if (animals[j][0] === alphabet[i]) {
                    result.push(animals[j]);
            }
        }
        if (result.length > 0) { 
            arr.push(result) 
        }
    }
    return arr;
  }
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]