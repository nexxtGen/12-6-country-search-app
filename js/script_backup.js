//Vars
document.getElementById('search').addEventListener('click', searchCountries);
var url = "https://restcountries.eu/rest/v1/name/";
var countriesList = document.getElementById('countries');

//Functions
$('#search').click(searchCountries);

function searchCountries() {
    //var countryName = document.getElementById('country-name').value; //Read input value vanilla JS
    var countryName = $('#country-name').val(); //jqQery

    $.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList,
		//error: notFound
    });    

    /*
    if(!countryName.length) countryName = 'Poland'; //Checkt input    
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
    */
}

function showCountriesList(resp) {
    //countriesList.innerHTML = ''; //Clear prev query/show list
    countriesList.empty();
    resp.forEach(function(item){
        //countriesList.appendChild (
            var liEl = document.createElement('li');
            liEl.innerText = item.name; 
            countriesList.appendChild(liEl);
        //);      
    });
    
}

/*
function showCountriesList(resp) {
    countriesList.innerHTML = ''; //Clear prev query/show list
    resp.forEach(function(item){
        var liEl = document.createElement('li');
        var liEl2 = document.createElement('p');
        liEl.innerText = item.name; 
        liEl2.innerText = item.capital;                
        countriesList.appendChild(liEl);
        countriesList.appendChild(liEl2);
    });
    
}
*/