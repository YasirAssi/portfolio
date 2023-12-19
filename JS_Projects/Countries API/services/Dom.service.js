import { countries, reset, search, sort } from "./countries.service.js";
import { getData, likedCountries, updateData } from "./localStorage.service.js";


let isSorted = false;
const searchInput = document.getElementById('search');
const cards  = document.getElementById('cards');

searchInput.addEventListener('keyup', (event) => {
    reset();
    cards.innerHTML = '';
    console.log(searchInput);

    if (!event.target.value || event.target.value == ''){
        return createCardList();
    }

    search(event.target.value);
    createCardList();
})

const sortCountries = document.getElementById('sortBtn');
sortCountries.addEventListener('click', () => {
    if (!isSorted) {
        const sortedCountries = sort();
        resetUI();
        createCardList(sortedCountries);
        console.log(sortCountries);  
    } else {
        reset();
        console.log(sortCountries);
    }
    isSorted = !isSorted;
});

const resetUI = () => {
    cards.innerHTML = '';
};


const createCards = (country) => {
    const card = document.createElement('div');
    card.className = 'card col-sm-12 col-md-3 shadow m-2';

    const cardImage = document.createElement('img');
    cardImage.className = 'card-img-top rounded shadow mt-3';
    cardImage.src = country.flags.png;
    cardImage.alt = 'flag image';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const cardContent = document.createElement('p');
    cardContent.className = 'card-text';
    cardContent.innerHTML = `population: ${country.population}<br>
    region: ${country.region}`;

    const cardFooter = document.createElement('footer');
    cardFooter.className = 'card-footer d-flex justify-content-center';
    const heartIcon = document.createElement('i');
    heartIcon.addEventListener('click', () => {
        updateData(country.name.common);
        if(heartIcon.classList[heartIcon.classList.length - 1] == 'text-dark'){
            heartIcon.className = 'fa fa-heart text-danger';
        } else {
            heartIcon.className = 'fa fa-heart text-dark'
        } 
    });

    let likedcountry = false;
    getData();
    if (likedCountries.includes(country.name.common)){
        likedcountry = true;
    }
    heartIcon.className = `fa fa-heart ${likedcountry ? 'text-danger' : 'text-dark'}`;

    card.appendChild(cardImage);
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardContent);

    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cardFooter.appendChild(heartIcon);

    cards.appendChild(card);
}

const createCardList = async () => {
    for(const country of countries){
        createCards(country);
    }
}
export {createCardList};