function asd(p1){
    if(p1.length < 3){ // Agar p1 - ni uzunligi kichkina bo'sa 3 dan, return qaytarsin p1 - ni (toUpperCase()) - bu katta harf qilib beradi.
        return p1.toUppercase() // p1 dan 3 katta bo'lmaganligi un <-- return ishlamaydi.
    }
    Front = (p1.substring(0, 3)).toLowerCase() // p1 ni oldi qismini ya'ni (0 dan degani birinchi indeksidan boshlab 3 indeksigacha oladi va birinchi 3 ta indeksini (to.LowerCase) kichkina qilib beradi).
    Back = p1.substring(3, p1.length) // p1 ni orqa qismini ya'ni (p1 ni uzunligini 3 indeksida boshlab eng oxirgi indeksigacha oladi).
    return Front + Back // return oldi qismi va orqa qismidan ajratib olingan indekslarni bir biriga qo'shib beradi.
}
console.log(asd("Koreya"))