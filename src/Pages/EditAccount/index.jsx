import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';

function EditAccount() {
  const context = useContext(ShoppingCartContext);
  const form = useRef(null);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(false);
  };

  const editAccount = (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');
    setErrorMessage('');

    // Validar el nombre
    if (!data.name) {
      setErrorName('Please enter your name');
      return;
    }

    // Validar el email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailPattern.test(data.email)) {
      setErrorEmail('Please enter a valid email address');
      return;
    }

    // Validar la contraseña
    if (!data.password || data.password.length < 6) {
      setErrorPassword('Password must be at least 6 characters long');
      return;
    }

    // Confirmar que las contraseñas coinciden
    if (data.password !== formData.get('confirm-password')) {
      setErrorMessage("Passwords don't match");
      return;
    }

    // Si todas las validaciones pasan, crear la cuenta
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringifiedAccount);
    context.setAccount(data);
    // Sign In
    handleSignIn();
    navigate('/');
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Account</h1>
      </div>
      <div className="flex items-center justify-center w-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-md w-full max-w-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">Edit Account</h2>
          <form ref={form}>
            <div className={errorName ? 'mb-2' : 'mb-4'}>
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
                  errorName && 'border-red-400'
                }`}
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                defaultValue={parsedAccount?.name}
              />
              {errorName && (
                <div className="text-center text-red-700 font-medium mt-2">
                  {errorName}
                </div>
              )}
            </div>
            <div className={errorEmail ? 'mb-2' : 'mb-4'}>
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
                  errorEmail && 'border-red-400'
                }`}
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                autoComplete="email"
                defaultValue={parsedAccount?.email}
              />
              {errorEmail && (
                <div className="text-center text-red-700 font-medium mt-2">
                  {errorEmail}
                </div>
              )}
            </div>
            <div className={errorPassword ? 'mb-2' : 'mb-4'}>
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
                  errorPassword && 'border-red-400'
                }`}
                id="password"
                name="password"
                type="password"
                placeholder="********"
                autoComplete="new-password"
                defaultValue={parsedAccount?.password}
              />
              {errorPassword && (
                <div className="text-center text-red-700 font-medium mt-2">
                  {errorPassword}
                </div>
              )}
            </div>

            <div className={errorMessage ? 'mb-4' : 'mb-6'}>
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password:
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
                  errorMessage ? 'border-red-400 mb-2' : 'mb-4'
                }`}
                id="confirm-password"
                name="confirm-password"
                type="password"
                placeholder="********"
                autoComplete="new-password"
              />
              {errorMessage && (
                <div className="text-center text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}
            </div>

            <div className="text-center mb-2">
              <button
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={(event) => editAccount(event)}
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default EditAccount;
