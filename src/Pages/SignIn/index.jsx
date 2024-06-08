import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';

function SignIn() {
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Welcome</h1>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex flex-col items-center text-center mb-2">
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Sign In
              </Link>
            </div>
          </form>
          <div className="text-center text-gray-500 text-sm mb-6">
            <a href="#" className="hover:text-blue-500">
              Forgot my password
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link
              to="/sign-up"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 mb-2"
            >
              Sign Up
            </Link>
            <span className="text-gray-500 text-sm">
              Do not you have an account?
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
