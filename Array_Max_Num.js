function Max(brr) {
    var max = brr[0];
    for (var i = 0; i < brr.length; i++) {
        if (max < brr[i]) {
            max = brr[i];
        }
    }
    return max;
}
var arr = [790, 45, 234, 456, 334, 456, 756, 56];
console.log("Largest Number from given array is " + Max(arr));
