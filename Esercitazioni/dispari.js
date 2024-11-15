function stampaDispari() {

    let start = 1
    let end = 50

    while (start < end) {
        if (start %2 !== 0){
            console.log(start)
        }
        start++;
    }
}

stampaDispari()

