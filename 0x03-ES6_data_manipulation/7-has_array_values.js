// Create a function named hasValuesFromArray that returns
// a boolean if all the elements in the array exist within the set.

// It accepts two arguments: a set (Set) and an array (Array).

export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && Array.isArray(array)) {
    // Use every() to check if all elements exist in the set
    return array.every((element) => set.has(element));
  }
  return false;
}
