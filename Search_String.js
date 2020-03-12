function Search(str1, str2) {
    var split = str1.split(" ");
    for (var i = 0; i < split.length; i++) {
        if (str2 == split[i]) {
            break;
        }
    }
    if (i == split.length) {
        return false;
    }
    else {
        return true;
    }
}
var str1 = "Pune Kothrud Marvellous Infosystems";
var str2 = "Pune";
var result = Search(str1, str2);
if (result == true) {
    console.log("Given string contain " + str2 + " in it");
}
else {
    console.log("Given string does not contain " + str2 + " in it");
}
