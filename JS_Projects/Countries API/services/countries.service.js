const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    return data;
}

const countriesFull = await getCountries();

let countries = [... countriesFull];

const search = (text) => {
    countries = countries.filter((country) => {
        const countryName =  country.name.common.toLowerCase();
        return countryName.includes(text.toLowerCase());
    })
} 

const sort = () => {
    const sortedList = countries.sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    return sortedList;
}

const reset = () => {
        countries = [...countriesFull];
    }

export { countries, reset, search, sort }



