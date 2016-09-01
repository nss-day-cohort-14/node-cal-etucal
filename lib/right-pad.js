"use strict";

module.exports = (line) => {

  const LINE_LENGTH = line.length;
  const TRAILING_SPACES = 20 - LINE_LENGTH;
  let formattedLine = line;

  if (TRAILING_SPACES !== 0) {
    for (let i = 0; i < TRAILING_SPACES; i++) {
      formattedLine += " ";
    }
  }

  return formattedLine;

}
