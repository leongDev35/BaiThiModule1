let mang = [9,8,9,7,6,8,7];

function insertNumberToArray(a, x,i) {
    if(i <0 || i>a.length) {
        return a;
    } else {
        a.splice(i,0,x);
        return a;
    }
}
console.log(insertNumberToArray(mang, 0,3));