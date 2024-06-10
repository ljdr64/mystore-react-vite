import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';

function SignIn() {
  const context = useContext(ShoppingCartContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = parsedAccount
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(false);
    handleLogin();
  };

  const handleLogin = () => {
    const enteredEmail = email;
    const enteredPassword = password;

    if (parsedAccount) {
      console.log(parsedAccount);
      if (
        enteredEmail === parsedAccount.email &&
        enteredPassword === parsedAccount.password
      ) {
        console.log('Inicio de sesión exitoso');
      } else {
        setErrorMessage('Incorrect email or password.');
      }
    } else {
      setErrorMessage('No hay ninguna cuenta registrada');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Welcome</h1>
      </div>
      <div className="flex items-center justify-center w-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
        <div className="bg-white bg-opacity-50 p-8 shadow-md w-full max-w-sm border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                defaultValue={parsedAccount?.email}
                disabled={!hasUserAnAccount}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                defaultValue={parsedAccount?.password}
                disabled={!hasUserAnAccount}
              />
            </div>
            <Link to="/">
              <button
                className={`
                  ${
                    !hasUserAnAccount
                      ? 'pointer-none bg-gradient-to-r from-gray-200 to-gray-300'
                      : 'text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800'
                  } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2`}
                onClick={() => handleSignIn()}
                disabled={!hasUserAnAccount}
              >
                Sign In
              </button>
            </Link>
            <div className="text-center text-sm mb-6">
              <span
                className={`
                  ${
                    hasUserAnAccount ? 'hover:text-blue-700 cursor-pointer' : ''
                  }`}
              >
                Forgot my password
              </span>
            </div>
          </form>

          <div className="text-center">
            <Link to="/sign-up">
              <button
                className={`
                  ${
                    hasUserAnAccount
                      ? 'pointer-none bg-gradient-to-r from-gray-200 to-gray-300'
                      : 'text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800'
                  } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2`}
                onClick={() => handleSignIn()}
                disabled={hasUserAnAccount}
              >
                Sign Up
              </button>
            </Link>
            <span className="text-sm">Do not you have an account?</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
