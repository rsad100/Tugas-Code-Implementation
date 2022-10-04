function FazzFood(harga, voucher, jarak, pajak) {
  // Cek Voucher
  let potong = 0;
  let antar = 0;
  let tax = 0;

  if (voucher == "FAZZFOOD50") {
    if (harga >= 50000) {
      potong = harga * 0.5;
      if (potong >= 50000) {
        potong = 50000;
      }
    }
  }
  if (voucher == "DITRAKTIR60") {
    if (harga >= 25000) {
      potong = harga * 0.6;
      if (potong >= 30000) {
        potong = 30000;
      }
    }
  }

  //Cek jarak
  if (jarak > 2) {
    antar = 5000 + (jarak - 2) * 3000;
  } else {
    antar = 5000;
  }

  //Cek Pajak
  if (pajak == true) {
    tax = harga * 0.05;
  } else {
    tax = 0;
  }

  //Cetak hasil
  console.log("potongan :", potong);
  console.log("Biaya Antar :", antar);
  console.log("pajak :", tax);
  console.log("SubTotal : ", harga - potong + antar + tax);
}

FazzFood(75000, "TEST", 5, true);
