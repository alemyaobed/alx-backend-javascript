export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }
  return result.trimEnd().slice(0, -1);

}
