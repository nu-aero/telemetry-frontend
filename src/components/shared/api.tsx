import axios from 'axios';

import { RequestType, DataPoint } from './types';

export const checkConnection = ({
  baseUrl,
  endpoint,
  method,
  timeout = 0,
  failureCallback = () => {},
  successCallback = () => {},
}: RequestType) => {
  return axios({
    method: method,
    baseURL: `//${baseUrl}`,
    url: endpoint,
    timeout: timeout,
  }).then(res => {
    let casted = res.data as DataPoint;
    if (
      casted.time !== undefined &&
      casted.s0 !== undefined &&
      casted.s5 !== undefined
    ) {
      successCallback();
    } else {
      failureCallback();
    }
  }).catch(err => {
    failureCallback();
  });
}
