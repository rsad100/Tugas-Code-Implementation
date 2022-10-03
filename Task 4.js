function divideAndSort(number) { //function divide number
    array = String(number).split(0) //split number kedalam string dengan menggunakan separator "0" 
    newArray = []
    
    for ( i = 0 ; i < array.length ; i++){
        num = array[i] //masukan array yang ada didalam string kedalam variable num
        
        myArr = String(num).split("").map((num)=>{ //pisahkan num menjadi array baru dan sorting angka yang didalam array baru
        return Number(num)
         }).sort(function(a,b){return a-b})
        
        newArray[i] = myArr //masukan number yang sudah disorting kedalam array baru
    }

    result = [].concat.apply([],newArray) //menggabungkan semua array yang ada didalam newArray menjadi satu
    //console.log(result)
    
    final = "" //Ubah array menjadi number
    for ( i = 0 ; i < result.length ; i++){
        final = final + result[i]
    } 

    console.log(final)
}

divideAndSort(5956560159466056)