var words = 'hello world!'


function balikString(word) {
    var wlength = words.length;
    //console.log(wlength)
    var balik = '';
    for (i = wlength; i > 0; i--) {
        balik += word[i-1];
        //console.log(balik)
        //console.log(i)
    }
    return balik;
}
console.log(balikString(words));

//input "hello world!"
//output 
//"!dlrow olleh"