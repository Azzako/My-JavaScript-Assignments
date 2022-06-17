function asd(p1, p2, p3){
   a = 0 // a - nomli 0 - ga teng o'zgaruvchi yaratvoldik. 
   if(p1 > p2){ // Agar 1000 katta bo'sa 510 dan, a teng bo'sin 1000 ga. 
       a = p1
   }else { // Yokida a teng bo'sin 510 ga.
       a = p2
   } if (p3 > a){ // Agar 440 katta bo'sa 1000 dan, a teng bo'sin 440 ga.
       a = p3
   }
       return a
   }
console.log(asd(1000, 510, 440));