export const formatViews = (number) => {
  const absNumber = Math.abs(number);

  if (absNumber < 1000) {
    return number.toString(); // No conversion for numbers less than 1,000
  }

  const units = ['', 'K', 'M', 'B']; // Suffixes for different units
  const unitIndex = Math.floor(Math.log10(absNumber) / 3) % units.length; // Calculate the appropriate unit index

  // Round to the nearest significant digit based on the unit
  const roundNumber = Math.round(absNumber / Math.pow(10, 3 * unitIndex));

  return roundNumber + (roundNumber === 1 ? '' : '') + units[unitIndex];
};
