import { MdAlternateEmail } from 'react-icons/md';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { Button } from '../generics/Button';
import { FormError } from '../FormError';
import { useState, useEffect } from 'react';
import { useUserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { Pending } from '../generics/Pending';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signIn, user, error, loading } = useUserContext();

  const handleSignIn = async e => {
    e.preventDefault();
    const formData = { email, password };
    await signIn(formData);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  if (loading) return <Pending>Signing In</Pending>;

  return (
    <form className="mx-6 sm:mx-auto sm:max-w-[560px]" onSubmit={handleSignIn}>
      <div className="relative mb-7">
        <input
          type="email"
          aria-label="Email"
          className="w-full border-b-[0.5px] border-neutral-500 bg-neutral-100 py-[18px] pl-8 text-sm placeholder-neutral-950 md:text-base"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <MdAlternateEmail className="absolute left-2 top-4 size-5" />
      </div>
      <div className="relative mb-7">
        <input
          type="password"
          aria-label="Password"
          className="w-full border-b-[0.5px] border-neutral-500 bg-neutral-100 py-[18px] pl-8 text-sm placeholder-neutral-950 md:text-base"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <HiOutlineLockClosed className="absolute left-2 top-4 size-5" />
      </div>
      <Button fill={true} submit={true}>
        Sign In
      </Button>
      {error && error?.errors.map(e => <FormError message={e.message} />)}
    </form>
  );
};
