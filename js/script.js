// script.js

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var code = item.alpha3Code.toLowerCase();
		var tableHeader = $('<tr>').addClass('table-header').appendTo(countriesList);
		var flag = $('<th>').addClass('flag').appendTo(tableHeader);
		$('<img>').attr('src', 'https://restcountries.eu/data/' + code + '.svg').appendTo(flag);
		$('<th>').addClass('name').text(item.name).appendTo(tableHeader);

		var capital = $('<tr>').addClass('capital').appendTo(countriesList);
		$('<td>').text('Capital').appendTo(capital);
		$('<td>').text(item.capital).appendTo(capital);

		var region = $('<tr>').addClass('region').appendTo(countriesList);
		$('<td>').text('Region').appendTo(region);
		$('<td>').text(item.region).appendTo(region);

		var population = $('<tr>').addClass('population').appendTo(countriesList);
		$('<td>').text('Population').appendTo(population);
		$('<td>').text(item.population).appendTo(population);

		var area = $('<tr>').addClass('area').appendTo(countriesList);
		$('<td>').text('Area').appendTo(area);
		$('<td>').text(item.area + ' sq. km').appendTo(area);

		var currency = $('<tr>').addClass('currency').appendTo(countriesList);
		$('<td>').text('Currency').appendTo(currency);
		$('<td>').text(item.currencies).appendTo(currency); 

		var borders = $('<tr>').addClass('borders').appendTo(countriesList);
		$('<td>').text('Borders').appendTo(borders);
		$('<td>').text(item.borders).appendTo(borders); 

		var call = $('<tr>').addClass('call').appendTo(countriesList);
		$('<td>').text('Calling Codes').appendTo(call);
		$('<td>').text(item.callingCodes).appendTo(call); 
	});
}