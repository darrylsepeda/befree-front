import { Component, Fragment } from "react";
import { Router } from "../routes";
import Link from "next/link";
import "../style.css";

import Api from "../services/api";

class Ads extends Component {
  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    const api = new Api();
    const token = localStorage.getItem("auth-token");

    if (token) {
      this.setState({ isAuthenticated: true });

      const token = localStorage.getItem("auth-token");

      api
        .index(token)
        .then(res => console.log(res.data.docs))
        .catch(err => console.log(err));
    } else {
      this.setState({ isAuthenticated: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.isAuthenticated && <p> You're isAuthenticated </p>}
        {!this.state.isAuthenticated && (
          <Fragment>
            <main className="bg-red-400 flex flex-col justify-center items-center w-full h-screen flex justify-center items-center">
              <h1 className="text-white text-2xl font-light">
                {" "}
                Please, log in before access this page{" "}
              </h1>
              {/* <Link href="/auth/signin">
                {" "}
                <a className="text-gray-100 text-base">Log in</a>{" "}
              </Link> */}
              <Link href="/auth/signin">
                <a style={{ color: "#2d3748", textDecoration: "underline" }}>
                  {" "}
                  Log in
                </a>
              </Link>
            </main>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Ads;
