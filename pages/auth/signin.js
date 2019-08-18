import { Component } from "react";
import AuthLayout from "../../components/auth_layout";
import { Formik } from "formik";
import { Router } from "../../routes";
import * as Yup from "yup";

import Api from "../../services/api";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      error: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("auth-token")) {
      Router.push("/ads");
    }
  }

  render() {
    const api = new Api();

    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("submitting");

          api
            .session({
              email: this.email.value,
              password: this.password.value
            })
            .then(res => {
              console.log(res.data.token);
              //console.log(res.data.user._id);

              localStorage.setItem("auth-token", res.data.token);
              localStorage.setItem("userId", res.data.user._id);

              this.setState({ error: "" });
              Router.pushRoute("/ads");
            })
            .catch(err => {
              console.log(err);
              this.setState({ error: err.response.data.error });
              resetForm({});
            });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email")
            .required("No email provided"),
          password: Yup.string()
            .required("No password provided")
            .min(8, "Password is too short - 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <AuthLayout>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center"
              >
                <input
                  className="focus:outline-none w-full shadow focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
                  name="email"
                  placeholder="Type your email"
                  value={values.email || ""}
                  ref={input => (this.email = input)}
                  onChange={ev => {
                    handleChange(ev);
                    this.setState({ email: ev.target.value });
                  }}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <p id="error" className="text-red-500 font-bold">
                    {errors.email}
                  </p>
                )}
                <input
                  className="focus:outline-none  w-full shadow focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  value={values.password || ""}
                  ref={input => (this.password = input)}
                  onChange={ev => {
                    handleChange(ev);
                    this.setState({ password: ev.target.value });
                  }}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <p id="error" className="text-red-500 font-bold ">
                    {errors.password}
                  </p>
                )}
                {this.state.error && (
                  <p id="error" className="text-center font-bold text-red-500">
                    {this.state.error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-400 m-4 hover:bg-red-500 border border-white px-5 py-2 text-white font-bold rounded"
                >
                  {" "}
                  Sign in{" "}
                </button>
              </form>
            </AuthLayout>
          );
        }}
      </Formik>
    );
  }
}
export default SignIn;
