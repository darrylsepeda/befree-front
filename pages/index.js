import { Component } from "react";
import { Router } from "../routes";

import Layout from "../components/layout";
import MainSection from "../components/main_section";
import AboutSection from "../components/about_section";

class Home extends Component {
  componentDidMount() {
    if (localStorage.getItem("auth-token")) {
      Router.push("/ads");
    }
  }

  render() {
    return (
      <Layout>
        <MainSection />
        <AboutSection />
      </Layout>
    );
  }
}

export default Home;
