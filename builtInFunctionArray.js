function dataHandling2(input) {
    var date = input[3]
    var switchMonth;
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria");
    input.splice(5, 0, "SMA Internasional Metro");
    console.log(input);

    splitDate = date.split('/');
    month = parseInt(splitDate[1]);

    switch(month) {
        case 1: switchMonth=('Januari');
        break;
        case 2: switchMonth=('Februari');
        break;
        case 3: switchMonth=('Maret');
        break;
        case 4: switchMonth=('April');
        break;
        case 5: switchMonth=('Mei');
        break;
        case 6: switchMonth=('Juni');
        break;
        case 7: switchMonth=('Juli');
        break;
        case 8: switchMonth=('Agustus');
        break;
        case 9: switchMonth=('September');
        break;
        case 10: switchMonth=('Oktober');
        break;
        case 11: switchMonth=('November');
        break;
        case 12: switchMonth=('Desember');
        break;
    
    }
    console.log(switchMonth);

    sortDate = splitDate.sort(function(a, b) { return b - a});
    console.log(sortDate);

    changeDate = date.split('/').join('-');
    console.log(changeDate);

    sliceDate = input.slice(1, 2)
    for(let i = 0; i < sliceDate.length; i++) {
        if(sliceDate[i].length > 15) {
            console.log(sliceDate[i].slice(0,14))            
        }
    }
    
    
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);