function divideAndSort(number) {
  //function divide number
  let array = String(number).split(0); //split number kedalam string dengan menggunakan separator "0"
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i]; //masukan array yang ada didalam string kedalam variable num

    //pisahkan num menjadi array baru dan sorting angka yang didalam array baru
    let myArr = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      })
      .sort(function (a, b) {
        return a - b;
      });

    newArray[i] = myArr; //masukan number yang sudah disorting kedalam array baru
  }

  let result = [].concat.apply([], newArray); //menggabungkan semua array yang ada didalam newArray menjadi satu
  //console.log(result)

  let final = ""; //Ubah array menjadi number
  for (let i = 0; i < result.length; i++) {
    final = final + result[i];
  }

  final = parseInt(final, 10);

  console.log(final);
}

divideAndSort(5956560159466056);
