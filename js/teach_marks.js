function check() {
    var name = document.getElementById("name");
    var usn = document.getElementById("usn");
    var cei1 = document.getElementById("cie1");
    var cie2 = document.getElementById("cie2");
    var cie3 = document.getElementById("cie3");
    var lab1 = document.getElementById("lab1");
    var lab2 = document.getElementById("lab2");
    var aat = document.getElementById("aat");
    var quiz1 = document.getElementById("quiz1");
    var quiz2 = document.getElementById("quiz2");
    var see = document.getElementById("see");
    if (/^1[A-Za-z]{2}[0-9]{2}[A-Za-z]{2}[0-9]{3}/.test(usn)) {
        return true;
    }
    alert("Enter the correct USN");
    return false;
}
