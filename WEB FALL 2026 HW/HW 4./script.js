alert("Hi Welcome to Homework 4!!");
function changeState() {
    var state = document.getElementById("state").value;
    var city = document.getElementById("city");

    document.getElementById("county").innerHTML = "<option>Select County</option>";
    document.getElementById("village").innerHTML = "<option>Select Village</option>";

    if (state == "NY") {
        city.innerHTML = "<option>Select City</option><option>East Hampton</option>";
    } else if (state == "CA") {
        city.innerHTML = "<option>Select City</option><option>Los Angeles</option>";
    } else if (state == "NJ") {
        city.innerHTML = "<option>Select City</option><option>Newark</option>";
    } else {
        city.innerHTML = "<option>Select City</option>";
    }
}

function changeCity() {
    var city = document.getElementById("city").value;
    var county = document.getElementById("county");

    document.getElementById("village").innerHTML = "<option>Select Village</option>";

    if (city == "East Hampton") {
        county.innerHTML = "<option>Select County</option><option>Suffolk County</option>";
    } else if (city == "Los Angeles") {
        county.innerHTML = "<option>Select County</option><option>Los Angeles County</option>";
    } else if (city == "Newark") {
        county.innerHTML = "<option>Select County</option><option>Essex County</option>";
    } else {
        county.innerHTML = "<option>Select County</option>";
    }
}

function changeCounty() {
    var county = document.getElementById("county").value;
    var village = document.getElementById("village");

    if (county == "Suffolk County") {
        village.innerHTML = "<option>Select Village</option><option>East Hampton Village</option>";
    } else if (county == "Los Angeles County") {
        village.innerHTML = "<option>Select Village</option><option>Hollywood</option>";
    } else if (county == "Essex County") {
        village.innerHTML = "<option>Select Village</option><option>Ironbound</option>";
    } else {
        village.innerHTML = "<option>Select Village</option>";
    }
}
