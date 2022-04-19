import axios from "axios";

const API_URL = "http://localhost:3001/";

class UserService {
  getUsers() {
    return axios
      .get(API_URL + "users")
      .then(response => {       
        return response.data;
      });
  }

  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  signup(user) {
    return axios.post(API_URL + "/signup",{
      user
    }).then(response => console.log(response))
  }

}

export default new UserService();