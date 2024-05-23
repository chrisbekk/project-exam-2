import { MdAlternateEmail } from 'react-icons/md';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { Button } from '../Button';
import { FormError } from '../FormError';
import { useState } from 'react';
import { useAuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { fetchError, signIn } = useAuthContext();

  const handleSignIn = async e => {
    e.preventDefault();
    const userData = { email, password };
    try {
      await signIn(userData);
      navigate('/auth/profile');
    } catch (err) {
      setError(fetchError);
    }
  };

  return (
    <form className="mx-6 sm:mx-auto sm:max-w-[560px]" onSubmit={handleSignIn}>
      <div className="relative mb-7">
        <input
          type="email"
          className="w-full border-b-[0.5px] border-neutral-500 bg-neutral-100 py-[18px] pl-8 text-xs placeholder-neutral-950"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <MdAlternateEmail className="absolute left-2 top-4 size-5" />
      </div>
      <div className="relative mb-7">
        <input
          type="password"
          className="w-full border-b-[0.5px] border-neutral-500 bg-neutral-100 py-[18px] pl-8 text-xs placeholder-neutral-950"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <HiOutlineLockClosed className="absolute left-2 top-4 size-5" />
      </div>

      {error && (
        <div>
          {error.errors ? (
            error.errors.map((err, index) => (
              <FormError key={index} message={err.message} />
            ))
          ) : (
            <FormError message={error.message} />
          )}
        </div>
      )}

      <Button fill={true}>Sign In</Button>
    </form>
  );
};
