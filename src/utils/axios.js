import axios from "axios";


axios.defaults.baseURL = "http://1.117.92.6:1330";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  // let token = localStorage.getItem("token")
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response.status === 401) { // 没有权限，直接退出登录页
      
    }
  }
);

export default axios;
