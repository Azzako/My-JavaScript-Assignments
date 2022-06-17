function asd(p1, p2, p3){ // Bu kod 6.js ga o'xshab ketadi.
    if (p1 > 0 && p2 > 0 && p3 > 0){
        let waq1 = p1.toString().slice(-1); 
        let waq2 = p2.toString().slice(-1);
        let waq3 = p3.toString().slice(-1);


        if (waq1 === waq2 && waq1 === waq3 && waq2 === waq3){
            return true
        } else {
            return false
        }
    }
}
console.log(asd(22, 32, 42))