function balikKata(a){
    let balik = "";
    for (let i = a.length-1; i >=0 ; i--){
        balik += a[i];
    }
    typeof(a);
    return balik;
}
console.log(balikKata("gajah"));
typeof(balikKata(a));
