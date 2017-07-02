module.exports = (app, callback) => {
  const router = app.get('router')();

  router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Super awful authentication. Should not be used in production
    if (username === 'test' && password === 'test') {
      return res.send({
        status: 200,
        message: 'Successfully authenticated',
        token: 'this-is-a-super-fake-token'
      });
    }

    return res.send({
      status: 403,
      message: 'Failed to authenticated.'
    });
  });

  return callback(null, router);
};
