/**
  Kompetensi: Loopings

  Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
  Disediakan variable height dan akan membuat sebuah pola tangga menampilkan x ke samping di baris ganjil,
  dan o di baris genap.
  Buatlah sebuah tangga string dengan pola berikut:

  Contoh 1 (height = 3)
  ---------------------
  tampilan:
  x
  oo
  xxx

  Contoh 2 (height = 6)
  ----------------------
  tampilan:
  x
  oo
  xxx
  oooo
  xxxxx
  oooooo

  WAJIB MENGGUNAKAN LOOPING
**/

/*
var rows3 = 5;
var col='';
for (rows3==5; rows3>0; rows3--) {
    col+='*';
    console.log(col);
*/
var height = 6; //isi dengan nilai tangga
var x='';
var o='';

//your code here
for(i=height; i>0; i--) {
  if(i%2==1) {
    x+='x';
    o+='o';
    console.log(x)
  }else{
    o+='o';
    x+='x';
    console.log(o);
  }
}