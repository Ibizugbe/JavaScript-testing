const capitalizeString = require("./capitalizeString");

test("returns the a given string with its first letter capitalized", () => {
  expect(capitalizeString("abraham")).toBe("Abraham");
});
