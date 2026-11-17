function numOfDigits(number) {
    let digits = number.toString().length;
    return digits;
}

function countDigits() {
    let number = document.getElementById("number").value;

    if (number == "" || number < 0 || number > 100000 || !Number.isInteger(Number(number))) {
        document.getElementById("r").innerHTML = "Enter a whole number from 0 to 100000";
        return;
    }

    let result = numOfDigits(Number(number));
    document.getElementById("r").innerHTML = "Number of digits: " + result;
}
