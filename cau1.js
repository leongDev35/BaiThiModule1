//! Câu 1 
    let diemThi = [9,8,9,7,6,8,7];

    function findAvg(a) {
        let tong = 0;
        for(let i = 0 ; i <a.length; i++) {
            tong += a[i];
    }
    return (tong/a.length);}
    let diemTb = findAvg(diemThi);
    console.log(diemTb)