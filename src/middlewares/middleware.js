exports.globalMiddleware = (req, res, next) => {
  // res.locals.title = 'TEst';
  next();
};

exports.preventCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404');
  }
};

exports.setCsrfToken = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}
