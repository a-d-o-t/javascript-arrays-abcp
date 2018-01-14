var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(newArray, addedElement) {
 // var newArray = ["amanda", "matt", "jeremy"];
  newArray.unshift(addedElement);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(newArray, addedElement) {
  //var newArray = ["amanda", "matt", "jeremy"];
  var newestArray = [addedElement, ...newArray];
  return newestArray;
}