// Create a function named cleanSet that returns a string of
// all the set values that start with a specific string (startString).

// It accepts two arguments: a set (Set) and a startString (String).

// When a value starts with startString you only append the rest of the string.
// The string contains all the values of the set separated by -.

export default function cleanSet(set, startString) {
  if (set instanceof Set && typeof startString === 'string' && startString.length !== 0) {
    // Filter values starting with startString
    const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

    // Extract and format remaining parts
    const formattedValues = filteredValues.map((value) => value.slice(startString.length));

    // Join formatted values with '-' separator
    return formattedValues.join('-');
  }
  return '';
}
