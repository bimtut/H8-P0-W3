var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

function dataHandling2(input) {
    
    input.splice(1,1,'Roman Alamsyah Elsharawy');
    input.splice(2,1,'Provinsi Bandar Lampung');
    input.splice(4,1,'Pria', 'SMA Internasional Metro');
    console.log(input);

    var a = input[3].split("/");
    var b = a[1];
    //console.log(a);
    //console.log(typeof b);
    var month ='';
    switch(b) {
        case "01":
            month = 'Januari'; break;
        case "02":
            month = 'Februari'; break;
        case "03":
            month = 'Maret'; break;
        case "04":
            month = 'April'; break;
        case "05":
            month = 'Mei'; break;
        case "06":
            month = 'Juni'; break;
        case "07":
            month = 'Juli'; break;
        case "08":
            month = 'Agustus'; break;
        case "09":
            month = 'September'; break;
        case "10":
            month = 'Oktober'; break;
        case "11":
            month = 'Nopember'; break;
        case "12":
            month = 'Desember'; break;
    }
    console.log(month);

    console.log(a);
    //console.log(a[0]);
    //console.log(typeof a[0])
    function sorting(){
        var z = a;
        z[0] = Number(z[0]);
        z[1] = Number(z[1]);
        z[2] = Number(z[2]);
        console.log(a);
        console.log(z);
    z.sort(function(value1, value2) { return value1 < value2 });
    console.log(z); //["1989", "21", "05"] lah keluarnya array number, bukan string
    //gimana jadiin arraynya string llagi yak? masak 2 proses bolak balik? kyk setrika
    }
    sorting();
    a= a.join("-");
    console.log(a); //LAH LOLOT INI KENAPA A NYA IKUT BERUBAAAAAH URUTANNYAAAAA ?????
    var d = input[1];
    console.log(d.slice(0,15));
}

dataHandling2(input);