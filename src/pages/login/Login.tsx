/* eslint-disable max-len */
import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState(true);
  const handleSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault();

    const loginCredentials = {
      username,
      password,
    };

    try {
      const res = await axios.post('http://localhost:3000/auth/signin', loginCredentials);
      const { accessToken } = res.data;
      setValid(true);
      localStorage.setItem('jwtToken', accessToken);
    } catch (error) {
      setValid(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-600 h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-white capitalize">login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input className="rounded-lg outline-none text-center" placeholder="username" type="text" name="" id="" onChange={(e) => setUsername(e.target.value)} />
        <input className="rounded-lg outline-none text-center" placeholder="username" type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="rounded-md outline-none bg-violet-600 hover:bg-violet-700 hover:font-semibold tracking-wide text-white py-1">
          Sign In
        </button>
        {!isValid && (
        <div>
          <h6 className="text-md  text-fuchsia-600 font-semibold text-center animate-pulse">login error!</h6>
        </div>
        )}
      </form>
    </div>
  );
};

export default Login;
