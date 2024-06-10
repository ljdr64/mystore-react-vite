import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';

function MyAccount() {
  const context = useContext(ShoppingCartContext);

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(true);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Account</h1>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
        <div className="bg-white bg-opacity-50 p-8 shadow-md w-80 max-w-sm border border-gray-200 rounded-lg">
          <form>
            <div className="mb-4">
              <span className="block text-sm font-bold mb-2" htmlFor="email">
                Name: <span>{parsedAccount?.name}</span>
              </span>
            </div>
            <div className="mb-6">
              <span className="block text-sm font-bold mb-2" htmlFor="password">
                Email: <span>{parsedAccount?.email}</span>
              </span>
            </div>
            <div className="flex flex-col items-center text-center mb-2">
              <Link
                to="/edit-account"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Edit
              </Link>
            </div>
          </form>
          <div className="flex flex-col items-center text-center">
            <Link
              to="/sign-in"
              onClick={() => handleSignOut()}
              className="bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
            >
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyAccount;
