function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    return flag;
}
function sumOfListPrime(x) {
    let tongSoNguyenTo = 0;
    let soNguyenTo = 0;
    while(soNguyenTo<=x) {
        if(kiem_tra_snt(soNguyenTo)){

            tongSoNguyenTo += soNguyenTo ;
        }
        soNguyenTo++;
    }
    return tongSoNguyenTo;
}
let x = 10;
console.log(sumOfListPrime(x));