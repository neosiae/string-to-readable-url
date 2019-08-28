module.exports = function(str) {
  if (typeof str !== "string") {
    throw new TypeError(`Expected string but got ${typeof str}`);
  }
  return str
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, "-")
    .split("-")
    .filter(a => Boolean(a))
    .join("-");
};
