exports.index = (req, res) => {
  res.render('index', {
    title: 'Titulo',
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.capturePost = (req, res) => res.send(req.body);
