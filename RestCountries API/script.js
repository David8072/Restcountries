document.addEventListener('DOMContentLoaded', function () {
    const countryNameElement = document.getElementById('country-name');
    const capitalElement = document.getElementById('capital');
    const populationElement = document.getElementById('population');
    const fetchCountryButton = document.getElementById('fetch-country');
  
    fetchCountryButton.addEventListener('click', fetchCountryInfo);
  
    function fetchCountryInfo() {
      const countryCode = 'us'; // Replace with the desired country code
  
      fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(response => response.json())
        .then(data => {
          displayCountryInfo(data[0]);
        })
        .catch(error => {
          console.error('Error fetching country info:', error);
        });
    }
  
    function displayCountryInfo(countryData) {
      countryNameElement.textContent = `Country: ${countryData.name.common}`;
      capitalElement.textContent = `Capital: ${countryData.capital}`;
      populationElement.textContent = `Population: ${countryData.population}`;
    }
  });
  