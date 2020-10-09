import React, { Component } from 'react';
import styles from './HydrappView.module.scss';

export class HydrappView extends Component {
  constructor(props) {
    super(props);
    this.hydrapp = React.createRef();
    this.state = {};
  }

  runHydrAppCode() {
    const container = document.querySelector('.app__glass');
    const water = document.querySelector('.app__glass_total--water');
    let glassCounter = document.createElement('div');

    const key = new Date().toISOString().slice(0, 10);
    let counter = key ? localStorage.getItem(key) : 0;

    const addGlassButton = document.querySelector('.app__increment--js');
    const decrementGlassButton = document.querySelector('.app__decrement--js');

    glassCounter.classList.add('app__counter');

    function updateDisplay() {
      glassCounter.innerHTML = localStorage.getItem(key);
      water.style.opacity = 0.1 * counter;
    }

    function checkOnLoad() {
      if (localStorage.getItem(key)) {
        updateDisplay();
      }
      if (!localStorage.getItem(key)) {
        glassCounter.innerHTML = 0;
        water.style.opacity = 0;
      }
    }

    function setNumberOfGlasses() {
      localStorage.setItem(key, counter);
    }

    function handleIncrementCounterButton() {
      counter++;
      setNumberOfGlasses();
      updateDisplay();
    }

    function handledecrementCounterButton() {
      counter--;
      if (counter < 0) counter = 0;
      setNumberOfGlasses();
      updateDisplay();
    }

    checkOnLoad();
    container.appendChild(glassCounter);

    addGlassButton.addEventListener('click', handleIncrementCounterButton);
    decrementGlassButton.addEventListener(
      'click',
      handledecrementCounterButton
    );
  }

  componentDidMount() {
    this.hydrapp.current.innerHTML = `<main class="app">
    <h1 class="app__title">HydrApp</h1>
    <div class="app__glass">
      <svg
        width="280"
        height="280"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="app__glass_total"
      >
        <path
          d="M242.748 2.8875C241.085 1.05 238.74 0 236.255 0H43.7555C41.288 0 38.9255 1.05 37.263 2.8875C35.618 4.7075 34.7955 7.1575 35.0405 9.625L61.2905 272.125C61.7455 276.605 65.508 280 70.0055 280H210.005C214.503 280 218.265 276.605 218.703 272.125L244.953 9.625C245.215 7.1575 244.41 4.7075 242.748 2.8875Z"
          fill="#ECEFF1"
          class="app__glass_total--glass"
        />
        <path
          d="M219.455 89.25L202.13 262.5H77.8805L58.4555 68.775C80.3305 61.775 113.58 57.05 140.005 78.75C165.555 99.75 197.755 95.9 219.455 89.25Z"
          fill="#2196F3"
          class="app__glass_total--water"
        />
      </svg>
    </div>
    <button class="app__increment app__increment--js">dodaj szklankę</button>
    <button class="app__decrement app__decrement--js">
      odejmij szklankę
    </button>
  </main>`; // el dom któey mnie interesuje
    this.runHydrAppCode();
  }

  render() {
    return <div className={styles.hydrApp} ref={this.hydrapp}></div>;
  }
}

export default HydrappView;
