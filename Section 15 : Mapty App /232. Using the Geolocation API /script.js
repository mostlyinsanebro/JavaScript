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

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      alert('Could not get your position');
    }
  );
