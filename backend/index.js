module.exports = (app, callback) => {
  const router = app.get('router')();

  router.post('/login', (req, res) => {
    res.send({
      token: 'this_is_a_token'
    });
  });

  return callback(null, router);
};
