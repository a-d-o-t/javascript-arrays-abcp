var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newestArray = [element, ...array];
  return newestArray;
}