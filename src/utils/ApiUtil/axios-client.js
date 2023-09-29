import axios from 'axios';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json;charset=utf-8'
};
class AxiosClient {
  instance = null;
  get http() {
    if (this.instance == null) {
      this.instance = this.init();
    }
    return this.instance;
  }
  //rest api [get,post,put,delete]
  get(url) {
    return this.http.get(url);
  }
  init() {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_HOST_API, //'/pokemon?offset=0&limit=50',
      headers
    });
    console.log(23, process.env.REACT_APP_HOST_API);
    //axiosInstance.interceptors.request(); //use to send token to request
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => {
        const { data } = error;

        return this.handleResponseError(data);
      }
    );
    return axiosInstance;
  }
  handleResponseError(error) {
    return Promise.reject(error);
  }
}

const axiosClient = new AxiosClient();

export default axiosClient;
