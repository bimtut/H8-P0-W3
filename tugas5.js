function palindrome(kata) {
    var a = kata;
    var b = a.length;
    var c = '';
    var d;
    for(i=b; i>0; i--) {
        c += a[b-1];
        b--;
    }
    if(a==c) {
        d = true;
    }else{
        d = false;
    }
    return d;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false