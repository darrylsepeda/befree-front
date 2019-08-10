import { Component } from "react";
import AuthLayout from "../../components/auth_layout";
import { Formik } from "formik";
import * as Yup from "yup";

class SignIn extends Component {
  state = {
    name: "",
    password: ""
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: this.state.email,
          password: this.state.password
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submitting");
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
                  className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
                  name="email"
                  placeholder="Type your email"
                  value={this.state.email}
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
