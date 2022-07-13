function stringLength(myString) {
  // return myString.length;
  if (typeof myString === "string") {
    if (myString.length > 0 && myString.length <= 10) {
      return "pass";
    } else {
      return "fail";
    }
  }
}

module.exports = stringLength;
