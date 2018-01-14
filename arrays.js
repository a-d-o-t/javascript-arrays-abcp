var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element) {
 // var newArray = ["amanda", "matt", "jeremy"];
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(newArray, addedElement) {
  //var newArray = ["amanda", "matt", "jeremy"];
  var newestArray = [addedElement, ...newArray];
  return newestArray;
}