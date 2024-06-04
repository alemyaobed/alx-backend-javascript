// Create a function named createInt8TypedArray that returns a new
// ArrayBuffer with an Int8 value at a specific position.

// It should accept three arguments: length (Number), position (Number), and value (Number).

// If adding the value is not possible the error Position outside range should be thrown.

export default function createInt8TypedArray(length, position, value) {
  // Check if length, position, and value are valid numbers
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new TypeError('Invalid arguments: length, position, and value must be numbers');
  }

  // Check for position within valid range (0 to length - 1)
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }

  // Create the ArrayBuffer with appropriate byte length (1 byte per Int8 element)
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view on the buffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  // Return the DataView for accessing the underlying buffer
  return new DataView(buffer);
}
