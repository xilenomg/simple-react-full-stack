import _ from 'lodash';
import axios from 'axios';

export default function api(uri, optionsParam = {}, token) {
  const defaultValue = {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    }
  };

  const options = _.merge(defaultValue, optionsParam);

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  return axios(uri, options);
}
