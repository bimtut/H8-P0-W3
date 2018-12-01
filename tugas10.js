function perkalianUnik(arr) {
    var a = arr.length;
    var kali = 1;
    var unik = []; 
    for (i = 0; i < a; i++) {
        kali = kali * arr[i];
    }
    for (j = 0; j < a; j++) {
        unik[j] = kali / arr[j]
    }
    return unik;
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]