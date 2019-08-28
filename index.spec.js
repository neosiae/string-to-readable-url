const stringToReadableURL = require("./index");
const test = require("tape");

test("returns an original string if there is only one word", t => {
  const url = stringToReadableURL("String");

  t.equal("string", url);

  t.end();
});

test("transforms a string to the readable url", t => {
  const url1 = stringToReadableURL("String~to@readable#url");
  const url2 = stringToReadableURL("String$to%readable^url");
  const url3 = stringToReadableURL("String&to(readable)url");
  const url4 = stringToReadableURL("String_to+readable.url");

  t.equal("string-to-readable-url", url1);
  t.equal("string-to-readable-url", url2);
  t.equal("string-to-readable-url", url3);
  t.equal("string-to-readable-url", url4);

  t.end();
});
