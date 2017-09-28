var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (array, element) => {
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = (array, element) => {
  array = [element, ...array]
  return array
}

addElementToEndOfArray = (array, element) => {
  return [ ...array, element]
}

destructivelyAddElementToEndOfArray = (array, element) => {
  array = [...array, element]
}
