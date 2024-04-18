import { MdAlternateEmail } from 'react-icons/md';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { Button } from '../Button';
import { FormError } from '../FormError';
import { useState } from 'react';
import { useAuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
export const SignInForm = () => {
  // Setting up states for inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { fetchError, useSignIn } = useAuthContext();

  // Handle user sign in
  const handleSignIn = e => {
    e.preventDefault();
    const userData = { email, password };
    useSignIn(userData)
      .then(() => navigate('/auth/profile'))
      .catch(() => setError(true));
  };

  return (
    <form className="mx-6 sm:mx-auto sm:max-w-[560px]" onSubmit={handleSignIn}>
      <div className="relative mb-7">
        <input
          type="email"
          className="w-full bg-neutral-100 border-b-[0.5px] border-neutral-500 placeholder-neutral-950 py-[18px] text-xs pl-8"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <MdAlternateEmail className="absolute top-4 left-2 size-5" />
      </div>
      <div className="relative mb-7">
        <input
          type="password"
          className="w-full bg-neutral-100 border-b-[0.5px] border-neutral-500 placeholder-neutral-950 py-[18px] text-xs pl-8"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <HiOutlineLockClosed className="absolute top-4 left-2 size-5" />
      </div>

      {error &&
        fetchError.errors.map(error => <FormError message={error.message} />)}

      <Button>Sign In</Button>
    </form>
  );
};
