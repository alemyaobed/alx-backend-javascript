export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  // Iterate through the generator object
  for (const employee of reportWithIterator) {
    // Append each employee name to the result string, separated by '|'
    result += `${employee} | `;
  }

  // Remove the trailing '|' character and any whitespace
  return result.trimEnd().slice(0, -1);

}
