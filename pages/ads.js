import { Component } from "react";
import { Router } from "../routes";

class Ads extends Component {
  state = {
    token: ""
  };

  componentDidMount() {
    if (!localStorage.getItem("auth-token")) {
      Router.push("/ads", "/");
    }
  }

  render() {
    return (
      <div>
        <p> Dashboard </p>
      </div>
    );
  }
}

export default Ads;
