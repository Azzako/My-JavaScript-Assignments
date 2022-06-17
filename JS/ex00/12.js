function asd(p1, p2, p3){
    if(p2 > p1 && p3> p2){
        return "Qattiq rejim"
    }else if(p3 > p2){
        return "Yumshoq rejim"
    }else {
        return "Nomalum"
    }

    }
console.log(asd(10, 15, 31))
console.log(asd(24, 22, 31))
console.log(asd(22, 22, 31))