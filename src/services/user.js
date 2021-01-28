import ServiceCaller from "./../utils/service-caller";

import { APP_BASE_URL } from "../constants";

const UserAPI = {
  all: async (page, limit = 10) => {
    const users = await ServiceCaller.call("POST", `${APP_BASE_URL}/users`);
    return users;
  },
  get: async (page, limit = 10) => {
    const users = await ServiceCaller.call("POST", `${APP_BASE_URL}/users`);
    return users;
  },
  post: async (page, limit = 10) => {
    const users = await ServiceCaller.call("POST", `${APP_BASE_URL}/users`);
    return users;
  },
  put: async (page, limit = 10) => {
    const users = await ServiceCaller.call("POST", `${APP_BASE_URL}/users`);
    return users;
  },
};


export default UserAPI;
