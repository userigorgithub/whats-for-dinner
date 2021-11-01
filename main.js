function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

var letsCookButton = document.querySelector('.lets-cook-button');
var cookpot = document.querySelector('.cookpot-logo');

var newMeal = document.querySelector('.random-dish');
var recipe = document.querySelector('.recipe');
var clearButton = document.querySelector('.clear-button');

letsCookButton.addEventListener('click', randomMeal);

function randomMeal() {
  event.preventDefault();
  var formValue = document.querySelector('input[name="food-option"]:checked').value;
  var side = sides[getRandomIndex(sides)];
  var mainDish = mains[getRandomIndex(mains)];
  var dessert = desserts[getRandomIndex(desserts)];
  var entireMeal = `${mainDish} with a side of ${side} and ${dessert} for dessert!`
  if (formValue === "side") {
    newMeal.innerHTML = `${side}!`;
  } else if (formValue === "main-dish") {
    newMeal.innerHTML = `${mainDish}!`;
  } else if (formValue === "dessert") {
    newMeal.innerHTML = `${dessert}!`;
  } else if (formValue === "entire-meal") {
    newMeal.innerHTML = entireMeal;
  }
  cookpot.classList.add('hidden');
  recipe.classList.remove('hidden');
}
