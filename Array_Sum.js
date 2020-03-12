function Sum(brr) {
    var sum = 0;
    for (var i = 0; i < brr.length; i++) {
        sum = sum + brr[i];
    }
    return sum;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Addition of Number from given array is " + Sum(arr));
