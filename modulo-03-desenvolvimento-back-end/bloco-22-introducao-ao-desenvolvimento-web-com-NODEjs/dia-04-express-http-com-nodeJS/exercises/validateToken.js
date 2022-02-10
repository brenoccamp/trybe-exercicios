function validateToken(token) {
  const isValidtoken = token.length !== 16 ? false : true;
  return isValidtoken;
}

module.exports = validateToken;