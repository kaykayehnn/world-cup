const camelRgx = /\s(.)/g;
export function toCamelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(camelRgx, "$1");
}

const reverseRgx = /([A-Z])/g;
export function toNormalCase(camelCaseStr) {
  return (
    camelCaseStr.charAt(0).toUpperCase() +
    camelCaseStr.slice(1).replace(reverseRgx, " $1")
  );
}
