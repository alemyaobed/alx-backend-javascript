// Export a const instance of WeakMap and name it weakMap.

// Export a new function named queryAPI. It should accept an endpoint argument like so:

//   {
//     protocol: 'http',
//     name: 'getUsers',
//   }
// Track within the weakMap the number of times queryAPI is called for each endpoint.

// When the number of queries is >= 5 throw an error with the message Endpoint load is high.
export const weakMap = new WeakMap(); // Create a WeakMap to store endpoint call counts
//  Export the WeakMap instance

export function queryAPI(endpoint) {
  // Check if the endpoint argument is a valid object
  if (typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new TypeError('Invalid endpoint argument');
  }

  // Get the call count for this endpoint from the WeakMap
  let callCount = weakMap.get(endpoint) || 0;

  // Increment the call count
  callCount += 1;

  // Check if the call count reaches the threshold
  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Simulate API call (replace with actual API call logic)
  // console.log(`Calling API endpoint: ${endpoint.protocol}://${endpoint.name}`);

  // Update the call count in the WeakMap
  weakMap.set(endpoint, callCount);
}
