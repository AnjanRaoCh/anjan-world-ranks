import ServiceCaller from "./../utils/service-caller";
const CountryDetailsAPI = {
  all: async () => {
    const allCountries = await ServiceCaller.call("GET", `all`);
    return allCountries;
  },
  getdetails: async (id) => {
    const CountrieDeatils = await ServiceCaller.call("GET", `alpha/${id}`);
    return CountrieDeatils;
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


export default CountryDetailsAPI;

