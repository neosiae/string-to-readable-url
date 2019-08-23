const stringToReadableURL = require("./index");
const test = require("tape");

test("returns an original string if there is only one word", t => {
  const url = stringToReadableURL("String");

  t.equal("string", url);

  t.end();
});

test("transforms a string to the readable url", t => {
  const url = stringToReadableURL("String to readable url");

  t.equal("string-to-readable-url", url);

  t.end();
});
