function changeText(input) {
  //Validasi
  if (typeof input != "string") return "Input harus string";

  const array = [...input];
  const newArray = [];
  let final = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "a") {
      array[i] = "o";
      newArray[i] = array[i];
    }
    newArray[i] = array[i];
  }

  for (let i = 0, output = ""; i < newArray.length; i++) {
    output = output + newArray[i];
    final = output;
  }

  return final;
}

console.log(changeText("Jakarta"));
