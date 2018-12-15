

function groupAnimals(animals) {
    animals.sort();
    var result = [];
    var first = animals[0][0]; //buat nampung huruf pertama
    var temp = [];//kandang sementara
    for (var i = 0; i < animals.length; i++) {
      if (animals[i][0] === first) { //kalo sama, which is emang sama, push ke temp
        temp.push(animals[i]);
      } else {//kalo beda, temp yg ada isinya tadi dipush ke result
        result.push(temp);
        temp = [];//reasign temp kosong
        first = animals[i][0]; //reasign first dengan huruf baru
        temp.push(animals[i]); //binatang baru, dipush ke tempnya
      }
      if (i === animals.length-1) {
        result.push(temp);//kalo udah semua, push tempt ke result
      }
    }
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]