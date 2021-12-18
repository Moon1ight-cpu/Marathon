const UI = {
    FORM: document.querySelector('form'),
    INPUT: document.querySelector('input'),
    NOW_CITY: document.querySelector('.like span'),
    NOW_TEMPERATURE: document.querySelector('.temperature'),
    FAVORITES: document.querySelector('.favorites'),
    CLOSE_BUTTONS: document.querySelectorAll('.locations ul li img'),
    LIKE_BUTTON: document.querySelector('.like img'),
    BOOKMARKS: document.querySelectorAll('.favorites-city span'),
}
const URL = {
    SERVER: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
}
const FAVORITES_CITIES = ['Amur', 'Samara', 'Bali', 'Dane', 'Kilo', 'Nur-Sultan'];



function showWeather(cityName) {
    const url = `${URL.SERVER}?q=${cityName}&appid=${URL.API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(answer => {
            if (answer.cod === '404') {
                alert(answer.message);
            }
            UI.NOW_CITY.textContent = answer.name;
            UI.NOW_TEMPERATURE.textContent = Math.round(answer.main.temp - 273) + '°';
        })
        .catch(error => alert(error.message));
    UI.FORM.reset();
}

UI.FORM.addEventListener('submit', function () {
    showWeather(UI.INPUT.value);
});


function deleteFavoriteCity() {
    this.parentElement.remove();
    FAVORITES_CITIES.splice(FAVORITES_CITIES.indexOf(this.previousElementSibling.textContent), 1);
}

UI.CLOSE_BUTTONS.forEach(function (item) {
    item.addEventListener('click', deleteFavoriteCity);
})

UI.LIKE_BUTTON.addEventListener('click', function () {
    if (!FAVORITES_CITIES.includes(UI.NOW_CITY.textContent)) {
        const LI = document.createElement('li');
        LI.className = 'favorites-city';
        LI.innerHTML = `<span>${UI.NOW_CITY.textContent}</span>
    <img src="img/close_thick_icon_137749.svg" width="20px" height="20px">`
        LI.querySelector('img').addEventListener('click', deleteFavoriteCity);
        LI.querySelector('span').addEventListener('click', bookmarksCityClick);
        UI.FAVORITES.append(LI);
        FAVORITES_CITIES.push(UI.NOW_CITY.textContent);
    }
});

function bookmarksCityClick() {
    showWeather(this.textContent);
}
UI.BOOKMARKS.forEach(function (item) {
    item.addEventListener('click', bookmarksCityClick);
})