import { Component } from "react";
import { Router } from "../routes";

class Ads extends Component {
  state = {
    token: ""
  };

  componentDidMount() {
    const as = "/";

    if (!localStorage.getItem("auth-token")) {
      Router.push("/ads", as, { shallow: true });
      return window.location.reload();
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
