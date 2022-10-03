function changeText(input){
    array = [...input]
    newArray = []
    for ( i = 0 ; i < array.length ; i++){
        if ( array[i] == 'a' ){
            array[i] = 'o'
            newArray[i] = array[i]
        } else if ( array[i] == 'i') {
            array[i] = 'o'
            newArray[i] = array[i]
        } else if ( array[i] == 'u') {
            array[i] = 'o'
            newArray[i] = array[i]
        } else if ( array[i] == 'e') {
            array[i] = 'o'
            newArray[i] = array[i]
        } else if ( array[i] == 'o') {
            array[i] = 'o'
            newArray[i] = array[i]
        } else {
            newArray[i] = array[i];
        }
    }

    for ( i = 0, output = "" ; i < newArray.length ; i++){
        output = output + newArray[i]
    }

    console.log(output)
}

changeText('jakarta')