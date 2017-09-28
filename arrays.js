var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (array, element) => {
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.shift(element)
  return array
}

addElementToEndOfArray = (array, element) => {
  return [ ...array, element]
}

destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return array
}
