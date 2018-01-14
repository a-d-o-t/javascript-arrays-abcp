var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  var newestArray = [element, ...array];
  return newestArray;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
