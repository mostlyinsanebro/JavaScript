'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

// Refactoring the code
// First of all, we are creating an App class here, so as to refactor the code so that we
// can make our application like the standard js apps and also do OOP programming.

// Now, make the map and mapEvent variables as private.

// Now, add the eventListeners to the constructor.

// Create an App class
class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), // we are binding this to loadMap() because when we were calling _loadMap simply, it was
        // just calling the function simply which have this as undefined, so had to bind.
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //console.log(latitude, longitude);
    //console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    // #this.#map -> This is how private properties are used.
    // The map here is the class of the element, in which this map will be rendered.
    this.#map = L.map('map').setView(coords, 14);
    // The above line returns the map object, the leaftlet library does so, it is not standard in js.
    // We can add eventListener to this object.
    //console.log(map);

    // select tileLayer and then addit to the map.
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // L.marker(coords).addTo(map).bindPopup('Event').openPopup();

    // on is the method coming from the leaflet library.
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    form.classList.remove('hidden');

    // Make the focus on the inputDistence initially.
    inputDistance.focus();

    this.#mapEvent = mapE;
  }

  _newWorkout(e) {
    e.preventDefault();

    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Get the coordinates of the point clicked in an array.
    const clickedCoords = this.#mapEvent.latlng;

    // This line will add the marker to each point that we click on the map.
    L.marker(clickedCoords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }

  _toggleElevationField(e) {
    e.preventDefault();

    // Now, what we are going to do is that we will get the closest parent of the inputCadence field
    // with the form__row class and then we will just toggle the form__row--hidden class on it.
    // We will do same with the inputElevation class. What this will do is that if the hidden class is there
    // on the cadence field and we change thetype, then it will get toggled i.e. hidden class will be removed
    // from cadence class and it will be added to the input elevation and vice-versa.
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }
}

const app = new App();
// FLOW -> The app object is created using App() and constructor App() is called which calls the _getPosition()
// which in turn calls the _loadMap().
