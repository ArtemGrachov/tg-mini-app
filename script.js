const VALIDATION = {
  MAX: 'max',
  MIN: 'min'
};

const MAX_VALUE = 10;
const MIN_VALUE = 0;

let counter = 0;

/**
 * @param {number} value
 */
function updateCounter(value) {
  const validationResult = validation(value);

  if (validationResult) {
    handleValidation(validationResult);
    return false;
  }

  counter = value;
  return true;
}

function increment() {
  return updateCounter(counter + 1);
}

function decrement() {
  return updateCounter(counter - 1);
}

function renderCounter() {
  document.getElementById('counter').innerHTML = counter;
}

function incrementHandler() {
  increment() && renderCounter();
}

function decrementHandler() {
  decrement() && renderCounter();
}

/**
 * @param {number} value
 */
function validation(value) {
  if (value > MAX_VALUE) {
    return VALIDATION.MAX;
  }

  if (value < MIN_VALUE) {
    return VALIDATION.MIN;
  }
}

/**
 * @param {string} validationResult
 */
function handleValidation(validationResult) {
  switch (validationResult) {
    case VALIDATION.MAX: {
      alert(`Counter cannot be larger than ${MAX_VALUE}`);
      break;
    }
    case VALIDATION.MIN: {
      alert(`Counter cannot be lower than ${MIN_VALUE}`);
      break;
    }
  }
}

function init() {
  document.getElementById('increment').addEventListener('click', incrementHandler);
  document.getElementById('decrement').addEventListener('click', decrementHandler);
}

init();
