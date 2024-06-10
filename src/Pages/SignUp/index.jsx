import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';

function SignUp() {
  const context = useContext(ShoppingCartContext);
  const form = useRef(null);

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(false);
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    // Create account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringifiedAccount);
    context.setAccount(data);
    // Sign In
    handleSignIn();
  };

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
          <form ref={form}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                defaultValue={parsedAccount?.name}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                defaultValue={parsedAccount?.email}
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
                name="password"
                type="password"
                placeholder="********"
                defaultValue={parsedAccount?.password}
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
                name="confirm-password"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="text-center mb-2">
              <Link to="/">
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={() => createAnAccount()}
                >
                  Create
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
