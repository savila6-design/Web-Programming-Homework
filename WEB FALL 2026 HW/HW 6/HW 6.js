function capsToFront(word) {
    let capitals = word.match(/[A-Z]/g) || [];
    let lowercase = word.replace(/[A-Z]/g, "");

    return capitals.join("") + lowercase;
}

function showResult() {
    let word = document.getElementById("word").value;
    let result = capsToFront(word);

    document.getElementById("rtn").innerHTML = result;
}
