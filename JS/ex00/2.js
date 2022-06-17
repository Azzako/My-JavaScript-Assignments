function asd(p1, p2){
var a = 100; // a - nomli 100 - ga teng bo'gan o'zgaruvchi yaratvoldik. 
if(p1 > p2){ // Agar 90 katta bo'sa 89 dan, return qaytarsin 90.
    return p1;
}else if(p2 < p1){ // Yokida 89 katta bo'sa 90 dan, return qaytarsin 89.
    return p2;
}else{ // Yokida teng bo'sa ikkalisadan bittasini qaytarsin.
    return p2;
}
}
console.log("yuzga yaqinroq",asd(90, 89))
console.log("yuzga aqinroq", asd( -90, -89))
console.log("yuzga yaqinroq", asd( 90, 90))