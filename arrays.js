var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element) {
 // var newArray = ["amanda", "matt", "jeremy"];
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  //var newArray = ["amanda", "matt", "jeremy"];
  var newestArray = [addedElement, ...array];
  return newestArray;
}