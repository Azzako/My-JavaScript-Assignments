function asd(p1, p2, p3){
    if(p1 > 0 && p2 > 0 && p3 > 0){
        let waq1 = p1.toString().slice(-1); // Boshqa nomli o'zgaruvchi ochvoldik, uni p1 tenglab qo'ydik, (.slice) buyrug'i integer sonlarni kesolmaganligi uchun,  
        let waq2 = p2.toString().slice(-1); // (.toString) buyrug'i orqali uni string ko'rinishiga aylantiradi, .slice(-1) berilgan sondan oxirgisini kesib beradi.
        let waq3 = p3.toString().slice(-1); 

        
        if(waq1 === waq2 && waq1 === waq3){ // Kesilgan raqam teng bo'sa qolgan kesilgan raqamlarga true qaytrsin bo'masam false qaytarsin.
            return true
        }else {
            return false
        }
    }
}
console.log(asd(18, 48, 28))