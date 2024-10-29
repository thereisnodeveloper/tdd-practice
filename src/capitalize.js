

/**
 * Capitalizes the first letter of the given string.
 *
 * @param {string} string - The input string to be capitalized.
 * @returns {string} The input string with its first letter capitalized.
 */
export default function capitalize(string) {
  return string.charAt(0).toUpperCase().concat(string.substring(1))
}
