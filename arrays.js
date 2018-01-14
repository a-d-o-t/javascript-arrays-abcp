var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  var newestArray = [element, ...array];
  return newestArray;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element)
{
  var newestArray = [...array, element];
  return newestArray; 
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  return array;
}

function accessElementInArray(array, index)
{
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array)
{
  array.slice(1);
  return array
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  return array.pop();
}

function removeElementFromEndOfArray(array)
{
  
}