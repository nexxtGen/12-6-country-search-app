//Vars

var url = "https://restcountries.eu/rest/v2/name/";
//var countriesList = document.getElementById('countries'); //--Vanilla JS
var countriesList = $('#countries');

//document.getElementById('search').addEventListener('click', searchCountries); //--Vanilla JS
$('#search').click(searchCountries);

//Functions

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


function searchCountries() {
    //countryName = document.getElementById('country-name').value; //Read input value --vanilla JS
    var countryName = $('#country-name').val(); //jqQery  
    
    if(!countryName.length) countryName = 'Poland'; //Checkt input    
    fetch(url + countryName)
        .then(function(resp) {              
            return resp.json();            
        }) 
        .then(showCountriesList);         
}

function showCountriesList(resp) {
    //countriesList.innerHTML = ''; //Clear prev list. -- Vanilla Js
    countriesList.empty(); 
    $('#country-name').val(''); //clear input after klik
   
    resp.forEach(function(item){
        $(countriesList).append(  // Jesli użyję samej zmiennej countriesList to nie wygeneruje sie kod HTML
            `<div class="o-container">
                <div class="t-countries__container">
                    <div class="o-row t-countries__header">
                        <div class="o-col o-col--md6">
                            <img src="${item.flag}" class="t-countries__img u-object-fit-cover" alt="">
                        </div>
                        <div class="o-col o-col--md6 t-countries__name">
                            <h3 class="c-heading c-heading--level2">${item.name}</h3>
                        </div>
                    </div>	
                    <div class="o-row t-countries__list">
                        <div class="o-col o-col--md4 u-mt-2 t-countries__list-name">
                            <ul>
                                <li>Capital:</li>
                                <li>Native name:</li>
                                <li>Alt spellings:</li>
                                <li>Region:</li>
                                <li>Area:</li>
                                <li>Population:</li>
                                <li>Time zone:</li>
                            </ul>
                        </div>
                        <div class="o-col o-col--md8 u-mt-2">
                            <ul>
                                <li>${item.capital}</li>
                                <li>${item.nativeName}</li>
                                <li>${item.altSpellings}</li>
                                <li>${item.region}</li>
                                <li>${item.area + " square km"}</li>
                                <li>${item.population}</li>
                                <li>${item.timezones}</li>
                            </ul>
                        </div>
                    </div>
                </div>			
			</div>`
            );    
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