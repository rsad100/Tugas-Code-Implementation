function FazzFood(harga,voucher,jarak,pajak) {
    if ( voucher == 'FAZZFOOD50'){
        if ( harga >= 50000 ) {
            potong = harga * 0.5
            if ( potong >= 50000 ){
                potong = 50000
            } else {
                potong = harga * 0.5
            }
        } else {
            potong = 0
        }
        
    } else if ( voucher == 'DITRAKTIR60') {
        if ( harga >= 25000 ) {
            potong = harga * 0.6
            if ( potong >= 30000 ){
                potong = 30000
            } else {
                potong = harga * 0.6
            }
        } else {
            potong = 0
        }
    } else {
        potong = 0
    }
    

    if ( jarak > 2  ) {
        antar = 5000 + (jarak-2)*3000
    } else {
        antar = 5000
    }
    

    if( pajak == true ) {
        pajak = harga * 0.05
    } else {
        pajak = 0
    }
    
    console.log('potongan :', potong )
    console.log('Biaya Antar :', antar)
    console.log('pajak :', pajak)
    console.log('SubTotal : ', harga - potong + antar + pajak)
}

FazzFood( 75000 ,'FAZZFOOD50', 5, true)