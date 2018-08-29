//Vars
document.getElementById('search').addEventListener('click', searchCountries);
var url = "https://restcountries.eu/rest/v1/name/";
var countriesList = document.getElementById('countries');

//Functions
function searchCountries() {
    var countryName = document.getElementById('country-name').value; //Read input value
    if(!countryName.length) countryName = 'Poland'; //Checkt input    
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = ''; //Clear prev query/show list
    resp.forEach(function(item){
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
    });
}