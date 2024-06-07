import Layout from '../../Components/Layout';

function SignIn() {
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Welcome</h1>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email@adress.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                required
              />
            </div>
            <div className="mb-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center text-gray-500 text-sm mb-6">
            <a href="#" className="hover:text-blue-500">
              Forgot my password
            </a>
          </div>
          <div className="text-center">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
