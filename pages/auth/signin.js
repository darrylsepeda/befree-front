import AuthLayout from "../../components/auth_layout";

const SignIn = () => (
  <AuthLayout>
    <input
      className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
      type="email"
      placeholder="Type a email"
    />
    <input
      className="focus:outline-none focus:border-red-400 p-2 m-4 border text-gray-700 border-gray-500 rounded"
      type="password"
      placeholder="Type a password"
    />
    <button className="bg-red-400 m-4 hover:bg-red-800 border border-white px-5 py-2 text-white font-bold rounded">
      {" "}
      Sign up{" "}
    </button>
  </AuthLayout>
);

export default SignIn;
