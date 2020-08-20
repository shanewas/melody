import axios from "../api/Config";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(v_token, email, name, id, course) {
    this.authenticated = true;
    localStorage.setItem("v_token", v_token);
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("id", id);
    localStorage.setItem("v_auth", "OK");
    localStorage.setItem("course", course);
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem("v_token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("v_auth");
    // localStorage.removeItem("course", course);
  }

  isAuthenticated() {
    let _id = localStorage.getItem("v_token");
    console.log("_id" + _id);
    axios
      .get(`user/_ga/${_id}`, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        if (res.data.status === "OK") {
          console.log("authas" + JSON.stringify(res.data.status));
          this.authenticated = true;
        } else {
          // localStorage.removeItem("v_token");
          // localStorage.removeItem("email");
          // localStorage.removeItem("v_auth");
          this.authenticated = false;
        }
      });
    return this.authenticated;
  }
}

export default new Auth();
