function cekPalindrom(text) {
    arrayReverse = [...text] //masukan text kedalam array
    let textReverse = ""
    
    for ( let i = 1, n = arrayReverse.length - 1  ; i < n / 2 ; i++ ) { //reverse array
        let temp = arrayReverse[i]
        arrayReverse[i] = arrayReverse[n-i]
        arrayReverse[n-i] = temp
    }
    
    for ( i = 0 ; i < arrayReverse.length ; i++){ //jadikan array menjadi string
        textReverse = textReverse + arrayReverse[i]
    }

    if (text == textReverse) { //cek apakah text palindrome atau bukan
        return console.log(text + ' adalah palindrome') 
    }
    else {
        return console.log (text + ' bukan palindrome')
    }
}

cekPalindrom('malam')