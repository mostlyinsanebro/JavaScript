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

// Using the geoloaction API
// Here, what we will do is that using the Geolocation API, we will get our current coordinates.
// Ater that, we will log the google maps link for that location in our console.

// geolocation API -> navigator.geolocation.getCurrenPosition(
// function(Position){} -> this is the callback function which is called with the Position coordinates which is called
// when the exact location is fetched.
// function(){} -> this function is called when the position could not be fetched successfully.)

let map, mapEvent;

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      //console.log(latitude, longitude);
      //console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      // The map here is the class of the element, in which this map will be rendered.
      map = L.map('map').setView(coords, 14);
      // The above line returns the map object, the leaftlet library does so, it is not standard in js.
      // We can add eventListener to this object.
      console.log(map);

      // select tileLayer and then addit to the map.
      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // L.marker(coords).addTo(map).bindPopup('Event').openPopup();

      // on is the method coming from the leaflet library.
      map.on('click', function (mapE) {
        // When the map is clicked, the form becomes visible.
        form.classList.remove('hidden');

        // Make the focus on the inputDistence initially.
        inputDistance.focus();

        mapEvent = mapE;
      });
    },
    function () {
      alert('Could not get your position');
    }
  );

// Displaying the Map using Leaflet Library

// First, include the leaftlet library to our code by including the script in our html before our script with defer.
// So that, the leaflet.js is rendered first in the browser and then our script.js is rendered and the global variables
// in leaflet.js are used in our script.js.

// Codes or global variables in the scripts that are rendered before this script is accessible in this script.
// naam variable in the other.js is accessible in script.js
// console.log(naam);

// Adding marker to the map
// Now, we want that our marker be added on the map where we click on the map.
// For that we will have to add the eventListener to the map, notthe map element but the map
// that will give us the exact latitude and longitude of the point where we clicked.
// For that leaflet provides us with on() method which is equivalent to addEventListener.

// Rendering the workout input form.
// Now, we want that the input form is displayed when user clicks on the map i.e. the hodden class from
// that element is removed.

// Add eventListener to submit on the form.
form.addEventListener('submit', function (e) {
  e.preventDefault();

  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // Get the coordinates of the point clicked in an array.
  const clickedCoords = mapEvent.latlng;

  // This line will add the marker to each point that we click on the map.
  L.marker(clickedCoords)
    .addTo(map)
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

  // Here L is the map object, marker() method creates a marker ,addTo() method adds that marker
  // to the map, bindPopUp() method creates and binds the popup to that marker.
  // Instead of just putting in a string 'Workout' to the popup object, we will create a new popup
  // object with some functionalities and then bind that popup object to our marker.

  // Now, we want that the popup text does not close when we click on a new location on the map
  // and for that we will create a new popup and give the object to it with all the properties that we want like
  // maxWidth, closeOnClick etc.
});

// Now, the requirement is that whenever the user changes the type from Running to cycling or from cycling to running,
// the cadence or elevation gain should toggle, the field name and the placeholder text in the fields as well accordingly.
// Also, clear out all the input fields as well.

// Now, listen for the change event on the form__input--type field.
inputType.addEventListener('change', function (e) {
  e.preventDefault();

  // Now, what we are going to do is that we will get the closest parent of the inputCadence field
  // with the form__row class and then we will just toggle the form__row--hidden class on it.
  // We will do same with the inputElevation class. What this will do is that if the hidden class is there
  // on the cadence field and we change thetype, then it will get toggled i.e. hidden class will be removed
  // from cadence class and it will be added to the input elevation and vice-versa.
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
});
