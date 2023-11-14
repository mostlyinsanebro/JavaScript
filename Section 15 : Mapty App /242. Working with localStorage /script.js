'use strict';


// Managing Workout Data - Creating Classes
// We will create classes now in order to manage the data that the user will create for each workout.
// Data needed in the Workout class -> distance,duration,coords. Date and id are also needed for each workout.



class Workout {
  date = new Date();
  id = +(Date.now() + ' ').slice(-10); // This will give the last 10 disgits of the date

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat,lng]
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // set the description of the workout event
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

// Now, in addition to the all the fields of the workout, we also need steps/min for running and elevation Gain
// for cycling. Also, we need pace min/km for cycling and  and speed  km/h for running. Both classes willextend the
// workout class.

// cadence -> steps/min
// Now, add pace to running and speed to cycling as well
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    // set the description
    this._setDescription();
  }

  calcPace() {
    // pace -> min/km
    this.pace = this.duration / this.distance;
    //console.log(this.pace);
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    //set the description
    this._setDescription();
  }

  // speed -> km/hr
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    //console.log(this.speed);
    return this.speed;
  }
}

// Use an example
const run1 = new Running([32, -12], 5, 20, 200);
const cycling1 = new Cycling([32, -12], 15, 95, 523);
//console.log(run1, cycling1);

let map, mapEvent;

// Refactoring the code
// First of all, we are creating an App class here, so as to refactor the code so that we
// can make our application like the standard js apps and also do OOP programming.

// Now, make the map and mapEvent variables as private.

// Now, add the eventListeners to the constructor.

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Create an App class
class App {
  #map;
  #mapEvent;
  #workout;
  #currentCoords;
  #workouts = [];

  constructor() {
    this._getPosition();

    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField.bind(this));

    // Added the eventListener for when a user clicks on the workout list in the sidebar.
    containerWorkouts.addEventListener('click', this._moveToMarker.bind(this));
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

    this.#workouts.forEach(work => this._renderMarker(work));
  }
  _showForm(mapE) {
    form.classList.remove('hidden');

    // Make the focus on the inputDistence initially.
    inputDistance.focus();

    this.#mapEvent = mapE;
  }

  _newWorkout(e) {
    e.preventDefault();
    // As this function is the eventListener for the new workout event, we will add the functionality
    // to take user inputs from the form, vaildate them, create a new workout event and then adding those
    // events to the workout array.

    // Function for validating the inputs if they are strings or not.
    const validateInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    // Function for validating the input if theyare negative or not.
    const checkNegatives = (...inputs) => inputs.every(inp => inp >= 0);

    // Step 1). Take user input from the form.
    const input = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;

    // Step 2). If input is running, then take cadence as input
    if (input === 'running') {
      const cadence = +inputCadence.value;
      // Validate the inputs
      if (
        !validateInputs(distance, duration, cadence) ||
        !checkNegatives(distance, duration, cadence)
      ) {
        return alert('Please enter valid inputs!');
      }

      // Step 4.
      this.#workout = new Running([lat, lng], distance, duration, cadence);

      // Step 5.
      this.#workouts.push(this.#workout);
    }

    // Step 3). If input is cycling, then take evevationGain as input
    // but elevation gain can not be a string but can be negative.

    if (input === 'cycling') {
      const elevation = +inputElevation.value;

      // Validate the inputs
      if (
        !validateInputs(distance, duration, elevation) ||
        !checkNegatives(distance, duration, elevation)
      ) {
        return alert('Please enter valid inputs!');
      }

      // Step 4.
      this.#workout = new Cycling([lat, lng], distance, duration, elevation);

      // Step 5.
      this.#workouts.push(this.#workout);
    }

    // Step 4). Create new workout object for cycling and running.

    // Step 5. Add workout to the workouts array.

    // Get the coordinates of the point clicked in an array.

    // This line will add the marker to each point that we click on the map.

    // Step 6). Render workout on the map with different marker colors.
    this._renderMarker(this.#workout);

    // For displaying the popup with different colors, add the type field in the cycling and running class
    // and then use it for displaying the popup.

    // Render a new workout object on the along with the form.
    this._renderWorkout(this.#workout);

    // Hide the form
    this._hideForm(this.#workout);

    // Store the workout data in localstorage
    this._setLocalStorage();
  }

  _renderMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
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

  // Rendering a workout html element.
  _renderWorkout(workout) {
    // Create html element
    // For the description i.e. activity on month date, create a description field in the
    // workout class and call that in the constructors of the child classes.
    let html = `
      <li class="workout workout--${workout.type}" data-id=${workout.id}>
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
      `;

    // Only two fields were common between running and cycling which are distance and duration which we have
    // have added to the workout element. Now, we will add speed and spm/cadence if the type of workout is running and
    // will add pace and elevationGain if the workout type is cycling.

    // If workout type is running, add speed and cadence to the workout element.
    // We used isFixed(1) with speed as it is calculated by js and maybe a weird number, so we
    // rounded it off to 1 decimal place, same with pace.
    if (workout.type === 'running') {
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
      </div>
      </li>
      `;
    }

    // If workout type is cycling, then add pace and elevationGain too the workout element.
    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
        </div>
        </li>
        `;
    }

    // Now, add this html as the sibling of the form element in the ul
    form.insertAdjacentHTML('afterend', html);
  }

  _hideForm(workout) {
    // Hide the input fields.
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Now, add the hidden class to the input form.
    form.style.display = 'none';
    form.classList.add('hidden');

    // Now, after 1 second, set the style of the form back to grid style as it was before
    setTimeout(() => (form.style.display = 'grid'), 1000);

    // Now, we want that effect is that the new element replaces the submit form and not slides into it's place.
    // For that, remove the style from the form and then add the grid style after 1 second to the same form.
  }

  _moveToMarker(e) {
    // The e is for the event that will be returned to the function once the workout list
    // will be clicked.

    // Get the clicked element i.e. target element
    const target = e.target.closest('.workout');
    if (!target) return;

    // Now, go to the closest workout parent to the target element. It will give us the targeted workout element.
    console.log(target);

    // After that, find the element with the same id in the workouts array to get the whole target object
    // in order to get the coords.
    const curWorkOut = this.#workouts.find(
      work => work.id === +target.dataset.id
    );

    // Got the coordinates of the currentWorkout. Now, move it into view.
    this.#map.setView(curWorkOut.coords, 16, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _setLocalStorage(workout) {
    // Use the localStorage to add the the workout data in the browser's LS.

    // setItem takes two inputs, first the key and second the value for that key in string format.
    // We are storing the workouts array in workouts key in localStorage.
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    // JSON.parse() is the opposite of JSON.stringyfy().
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);

    // Guard Clause
    if (!data) return;

    // Now, populate the workouts array using data as it will be empty initially.
    this.#workouts = data;

    // Rendered all the previous workouts in the sidebar from the array.
    this.#workouts.forEach(work => this._renderWorkout(work));

    // Also, add the markers to the map corresponding to these workouts but only after the
    // map is loaded.
  }

  // Also make a public interface function, which clears all the workouts.
  clearStorage() {
    localStorage.clear();
  }
}

const app = new App();
// FLOW -> The app object is created using App() and constructor App() is called which calls the _getPosition()
// which in turn calls the _loadMap().

// RENDERING A NEW WORKOUT
// Now, we are going to add a new workout to the list of workouts on the left side of screen. Whenever a point is clicked on
// the map, a form is opened in which we fill the values and on submitting that form, the workout is created.
// First, call _renderWorkout method in the _newWorkout method of App class and then call it with the current workout object.
// In the _renderWorkout in App class, add the html for all the data(distance,duration,speed,cadence) in case of running and
// distance,duration,pace and elevationGain as the sibling of the form element.

// After that, we want that when we add a new workout to the events list,the submit form is hidden.
// so, for that add the hidden class to the submit form.

// Also display on the workout banner -> event , event name on month date.

// 241. MOVE TO MARKER ON CLICK
// Now, we are going to add the functionality of moving the view to the marker corresponding to whose workout
// we click on the sidebar having the workout elements.

// For that, add eventListener to the workout element in the sidebar, that when we click on it, the code gets
// the corresponding workout object from the workout array on the basis of id and then gets its coordinates.

// 242. WORKING WITH LOCAL STORAGE
// Now, we are going to implement the functionality of having all our workouts stored even when the user reloads
// the page multiple times. That will be achieved by using the localStorage API.
// localStorage API can be used to store the data in key value form corresponding to the link of websites.
// But it should be used for smaleer applications.

// Now, we want to save the data in our browser whenever a new workout is created, so write the _setLocalStorage()
// function it.
