
function searchArticles() {
    var search = document.getElementById("search").value;
    var apiKey = "6iRCoAEFMXfX3G4wtCO8Ks1nbTlcV0Ah2L3mwMpfu4janjF4";

    var xhr = new XMLHttpRequest();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
        + encodeURIComponent(search) + "&api-key=" + apiKey;

    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var articles = data.response.docs;

            var output = "<h3>Search Results</h3>";

            for (var i = 0; i < articles.length; i++) {
                output += "<p>" + articles[i].headline.main + "</p>";
            }

            document.getElementById("results").innerHTML = output;
        } else {
            document.getElementById("results").innerHTML =
                "Error fetching articles. Status: " + xhr.status;
        }
    };

    xhr.onerror = function () {
        document.getElementById("results").innerHTML = "Network Error";
    };

    xhr.send();
}
