import { Component, Fragment } from "react";

import AuthLayout from "../../components/auth_layout";
import { Formik } from "formik";
import * as Yup from "yup";

import Api from "../../services/api";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    name: "",
    success: "",
    error: ""
  };

  render() {
    const api = new Api();

    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: ""
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          api
            .user({
              email: this.email.value,
              password: this.password.value,
              name: this.name.value
            })
            .then(res => {
              console.log(res);
              this.setState({ success: "Registered successfully" });
              this.setState({ error: "" });
            })
            .catch(err => {
              this.setState({ success: "" });
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
            .matches(/(?=.*[0-9])/, "Password must contain a number."),
          name: Yup.string().required("No name provided")
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
                  className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
                  name="name"
                  type="text"
                  placeholder="Type your name"
                  value={values.name}
                  ref={input => (this.name = input)}
                  onChange={ev => {
                    handleChange(ev);
                    this.setState({ name: ev.target.value });
                  }}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <p id="error" className="text-red-500 font-bold">
                    {errors.name}
                  </p>
                )}
                <input
                  className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
                  name="email"
                  type="text"
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
                  className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  value={this.state.password || ""}
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
                {this.state.error ? (
                  <p id="error" className="text-center font-bold text-red-500">
                    {this.state.error}
                  </p>
                ) : (
                  <p
                    id="success"
                    className="text-center font-bold text-green-400"
                  >
                    {this.state.success}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-400 m-4 hover:bg-red-500 border border-white px-5 py-2 text-white font-bold rounded"
                >
                  {" "}
                  Sign up{" "}
                </button>
              </form>
            </AuthLayout>
          );
        }}
      </Formik>
    );
  }
}
export default SignUp;
