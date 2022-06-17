function asd(p1, p2){
    var n = 0, b = 0; // Ikkiti o'zgaruvchi yaratvoldik.

    for( var i = 0; i < p1.length; i++){ 
        if(p1[i] == p2){ // Agar p1-ni indeksi teng bo'sa p2 ga, n - bittaga ko'paysin.
            n++;
        }else{ // Bo'masam b - bittaga ko'paysin.
            b++;
        } 
    }
    if(n >= b){ 
        return n;
    }else if(b >= n){
        return n;
    }
}
console.log(asd("azazaza", "z"));