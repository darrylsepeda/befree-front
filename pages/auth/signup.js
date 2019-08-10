import AuthLayout from "../../components/auth_layout";

const SignUp = () => (
  <AuthLayout>
    <input
      className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
      type="email"
      placeholder="Type your email"
    />
    <input
      className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
      type="password"
      placeholder="Type your password"
    />
    <input
      className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
      type="password"
      placeholder="Type your password again"
    />
    <button className="bg-red-400 m-4 hover:bg-red-500 border border-white px-5 py-2 text-white font-bold rounded">
      {" "}
      Sign up{" "}
    </button>
  </AuthLayout>
);

export default SignUp;
