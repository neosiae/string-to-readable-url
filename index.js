module.exports = function(str) {
  if (typeof str !== "string") {
    throw new TypeError(`Expected string but got ${typeof str}`);
  }
  return str
    .toLowerCase()
    .split(" ")
    .join("-");
};
