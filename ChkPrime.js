function ChkPrime(no) {
    for (var i = 2; i <= no / 2; i++) {
        if (no % i == 0) {
            break;
        }
    }
    if (i < no / 2) {
        return false;
    }
    else {
        return true;
    }
}
var result;
result = ChkPrime(2);
if (result == true) {
    console.log("Given number is Prime");
}
else {
    console.log("Given number is not Prime");
}
