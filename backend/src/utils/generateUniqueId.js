const crypto = require("crypto");

module.exports = function generateIUniqueId() {
  return crypto.randomBytes(4).toString("HEX");
};
