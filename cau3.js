function sumOfListPrime(x) {
    let tong = 0;
    let cong = 0;
    while(cong<=x) {
        tong += cong ;
        cong++;
    }
    return tong;
}
let x = -5;
console.log(sumOfListPrime(x));