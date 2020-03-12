function DisplayFactor(no) {
    console.log("Factor of " + no + " are:");
    for (var i = 0; i < no; i++) {
        if (no % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactor(340);
