const token = require('jsonwebtoken');
const Unauthorized = require('../customErrors/Unauthorized');
// eslint-disable-next-line consistent-return
module.exports.ver = (req, _, next) => {
  const { jwt } = req.cookies;
  console.log(jwt);
  if (!jwt) {
    return next(new Unauthorized('Необходима авторизация'));
  }
  let payload;

  try {
    payload = token.verify(jwt, '6360540f025b93cbcf82932d');
  } catch (err) {
    return next(new Unauthorized('Необходима авторизация'));
  }
  req.user = payload;
  next();
};
