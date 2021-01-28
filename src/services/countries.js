import ServiceCaller from "./../utils/service-caller";
const CountriesAPI = {
  all: async () => {
    const allCountries = await ServiceCaller.call("GET", `all`);
    return allCountries;
  },
  get: async () => {
    const CountriesList = await ServiceCaller.call("GET", `getURl`);
    return CountriesList;
  },
  post: async (data) => {
    const CreateCountryResponse = await ServiceCaller.call("POST", `PostURL`,data);
    return CreateCountryResponse;
  },
  put: async () => {
    const UpdateCountryResponse = await ServiceCaller.call("PUT", `UpdateUrl`);
    return UpdateCountryResponse;
  },
  put: async () => {
    const DeleteCountryResponse = await ServiceCaller.call("DELETE", `DeleteURL`);
    return DeleteCountryResponse;
  },
};


export default CountriesAPI;

