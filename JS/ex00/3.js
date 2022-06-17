function asd(p1, p2){
  if ( (p1 >= 40 && p1 <= 70) && (p2 >= 40 && p2 <= 70)){
        if(p1 === p2){ // Agar 40 bilan 40 birxil bo'sa, mantiqiy ifoda ya'ni true yoki false qaytaradi. 
            return true
        }else if(p1 > p2){
            return p1
        }else {
            return p2
        }
  }else {
    return false
  }
}
console.log(asd(40, 70))