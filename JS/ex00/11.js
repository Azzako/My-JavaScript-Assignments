function asd(p1, p2, p3){
    if(p1 === p2 && p1 === p3 && p2 === p3){ // Agar p1, p2, p3 bir hil bo'sa return 30 qaytaradi.
        return 30
    }else if(p1 != p2 && p2 != p3){ // Yoki p1, p2, p3 bir biriga teng bo'masa return 20 qaytaradi. 
        return 20
    }else if(p1 === p2 || p1 != p2 && p1 === p3 || p1 != p3 && p2 === p3 || p2 != p3){ // Yoki ikkitasi teng bo'sa return 40 qaytaradi.
        return 40
    }
}
console.log(asd(10, 10, 10))