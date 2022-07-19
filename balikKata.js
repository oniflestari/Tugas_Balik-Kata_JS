function balikKata(kata) {
  // Contoh :
  // return kata.split('').reverse().join().replace(/,/g, '')
  // Jawaban :
  var arr = Array.from(kata);
  var arrReverse = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    arrReverse.push(arr[i]);
  }

  var str = arrReverse.toString().replace(/,/g, '');
  return str;
}

// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))