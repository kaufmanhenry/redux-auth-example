import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/';

const apiMiddleware = () => next => (action) => {
  const {
    url,
    type,
    options,
    ...rest
  } = action;

  if (!url) return next(action);

  const SUCCESS = `${type}_SUCCESS`;
  const REQUEST = `${type}_REQUEST`;
  const FAILURE = `${type}_FAILURE`;

  next({ ...rest,
    type: REQUEST
  });
  return axios(baseUrl + url, options)
    .then((res) => {
      next({ ...rest,
        data: res.data,
        type: SUCCESS
      });
    })
    .catch((err) => {
      next({ ...rest,
        err,
        type: FAILURE
      });
    });
};

export default apiMiddleware;
