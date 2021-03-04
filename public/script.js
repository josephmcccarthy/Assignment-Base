async function windowActions(){
    const form = document.querySelector('.userform');
    const search = document.querySelector('#name');
    const targetList = document.querySelector('.target-list');
    
    const request = await fetch('/api');
    const data = await request.json();   

    form.addEventListener('submit', async(event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const filtered = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase());

        filtered.forEach((item) =>{
        const appendItem = document.createElement("li");
        appenditem.classList += `${appendBox.classList} box`;
        appendItem.innerText = item.city;
        targetList.append(appendItem); 
        });
    });

    search.addEventListener('input', (event) =>{
        console.log('input', event.target.value);
    });
} 
window.onload = windowActions;

//const request = await fetch('/api', {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json'
//    },
//    body: JSON.stringify({data: search.value})
// });
// const data = await request.json();
















/* const response ='https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const cities = []; 


fetch(response)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

    function findMatches(wordToMatch, cities) {
        return cities.filter(place => {
            //figures out what was searched
            const regex = new RegExp(wordToMatch,'gi');
            //filter results from restuarant name, city, zip code, and type 
            return place.name.match(regex) || place.city.match(regex) || place.zip.match(regex) || place.type.match(regex)
        });
    }

function displayMatches(){
    const matchArray = findMatches(this.value,cities);
    
    const html = matchArray.map(place => {
        
        const regex = new RexExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const restaurantName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
        const restaurantType = place.type.replace(regex, `<span class="hl">${this.value}</span>`);
        const zipCode = place.zip.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
            <span class ="restaurant"><b>${restaurantName}</b></span><br>
            <span class ="restaurantType">${restaurantType}</span><br>
            <span class="name">${cityName}</span><br>
            <span class ="zipcode">${zipCode}</span><br><br>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

serachInput.addEventListener('change', displayMatches);*/