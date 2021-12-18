const UI = {
    FORM: document.querySelector('form'),
    INPUT: document.querySelector('input'),
    NOW_CITY: document.querySelector('.like span'),
    NOW_TEMPERATURE: document.querySelector('.temperature'),
    FAVORITES: document.querySelector('.favorites'),
    CLOSE_BUTTONS: document.querySelectorAll('.locations ul li img'),
    LIKE_BUTTON: document.querySelector('.like img'),
}
const URL = {
    SERVER: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
}
const FAVORITES_CITIES = ['Amur', 'Samara', 'Bali', 'Dane', 'Kilo', 'Nur-Sultan'];

/* ------------------------------------ОБРАБОТЧИК САБМИТА----------------------------------------------------- */

UI.FORM.addEventListener('submit', function () {
    const CITY_NAME = UI.INPUT.value;
    const url = `${URL.SERVER}?q=${CITY_NAME}&appid=${URL.API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(answer => {
            console.log(answer);
            UI.NOW_CITY.textContent = answer.name;
            UI.NOW_TEMPERATURE.textContent = Math.round(answer.main.temp - 273) + '°';
        });

    UI.FORM.reset();
});

/* ------------------------------------УДАЛЕНИЕ ГОРОДА----------------------------------------------------- */
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
        LI.querySelector('img').addEventListener('click', deleteFavoriteCity)
        UI.FAVORITES.append(LI);
        FAVORITES_CITIES.push(UI.NOW_CITY.textContent);
    }
});

