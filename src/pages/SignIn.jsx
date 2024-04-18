import { Link } from 'react-router-dom';
import { SignInForm } from '../components/signinForm';

export const SignIn = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full sm:bg-white sm:max-w-[850px] sm:p-10 sm:shadow-lg sm:rounded-xl">
        <h1 className="text-center text-2xl font-semibold mb-8">Sign In</h1>
        <SignInForm />
        <Link to={'/register'} className="text-xs block text-center mt-8">
          Not got a Holidaze account?{' '}
          <span className="font-semibold">Click here to register.</span>
        </Link>
      </div>
    </div>
  );
};
