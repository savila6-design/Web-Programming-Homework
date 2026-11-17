function reverseString(sentence) {
    let words = sentence.split(" ");
    words.reverse();
    return words.join(" ");
}

function showResult() {
    let sentence = document.getElementById("sentence").value;
    let result = reverseString(sentence);

    document.getElementById("rtn").innerHTML = result;
}
