import { Component, Fragment } from "react";

import AuthLayout from "../../components/auth_layout";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import api from "../../services/api";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    name: ""
  };

  success = () =>
    toast.success("Registered Successfully", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          api
            .post(
              "/users",
              {
                email: this.email.value,
                password: this.password.value,
                name: this.name.value
              },
              {
                headers: {
                  "Access-Control-Allow-Origin": "*"
                }
              }
            )
            .then(res => {
              console.log(res);
              this.success();
              this.setState({ error: "" });
            })
            .catch(err => {
              console.log(err);
              this.setState({ error: "Was not possible to sign up" });
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
              <ToastContainer
                position="top-left"
                autoClose={5000}
                className="toast"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
              />
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
                  value={values.email}
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
                  value={this.state.password}
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
