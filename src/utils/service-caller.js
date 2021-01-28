import http from "axios";
import { APP_BASE_URL } from "./../constants";
const _get = (url, headers) => {
  console.log("URL",url);
  return http.get(url).then((res) => res.data)
    .catch((err) => {
      console.error(
        `Something went wrong with post call (recommendations)`,
        err
      );
      return err;
    });
};
const _post = (url, headers, data) => {
  return http
    .post(url, data, headers)
    .then((res) => res.data.data)
    .catch((err) => {
      console.error(
        `Something went wrong with post call (recommendations)`,
        err
      );
      return err;
    });
};

const _delete = (url, headers, data) => {
  return http
    .delete(url, data, headers)
    .then((res) => res.data)
    .catch((err) => {
      console.error(
        `Something went wrong with Delete call (recommendations)`,
        err
      );
      return err;
    });
};

const _put = (url, headers, data) => {
  return http
    .put(url, data, headers)
    .then((res) => res.data)
    .catch((err) => {
      console.error(
        `Something went wrong with post call (recommendations)`,
        err
      );
      return false;
    });
};
const _patch = (url, headers, data) => {
  return http
    .patch(url, data, headers)
    .then((res) => res.data)
    .catch((err) => {
      console.error(
        `Something went wrong with post call (recommendations)`,
        err
      );
      return err;
    });
};
const _do_call = (type, url, headers = {}, data = {}, isustomURI = false) => {
  if (!isustomURI) url = `${APP_BASE_URL + url}`;
  switch (type) {
    case "POST":
      return _post(url, headers, data);
      break;
    case "GET":
      return _get(url, headers, data);
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
    case "PATCH":
      break;
  }
};

const seriveCaller = { call: _do_call };

export default seriveCaller;
