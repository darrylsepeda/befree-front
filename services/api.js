import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://befree-api-market.herokuapp.com"
    });
  }

  user(data) {
    return new Promise((resolve, reject) => {
      this.api
        .post("/users", data)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  session(data) {
    return new Promise((resolve, reject) => {
      this.api
        .post("/sessions", data)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  index(token) {
    return new Promise((resolve, reject) => {
      this.api
        .get("/ads", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
}

export default Api;
