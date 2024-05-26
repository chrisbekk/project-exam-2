import { Link } from 'react-router-dom';
import { SignInForm } from './SignInForm';

export const SignIn = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full sm:max-w-[850px] sm:rounded-xl sm:bg-white sm:p-10 sm:shadow-lg">
        <h1 className="mb-8 text-center text-2xl font-semibold">Sign In</h1>
        <SignInForm />
        <Link to={'/register'} className="mt-8 block text-center text-xs">
          Not got a Holidaze account?{' '}
          <span className="font-semibold">Click here to register.</span>
        </Link>
      </div>
    </div>
  );
};
