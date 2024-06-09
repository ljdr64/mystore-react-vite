import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';

function SignUp() {
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Welcome</h1>
      </div>
      <div className="flex items-center justify-center w-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-md w-full max-w-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex text-center mb-2">
              <Link
                to="/"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Create
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
