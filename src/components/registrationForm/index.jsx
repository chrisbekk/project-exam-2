import { useState } from 'react';
import { MdOutlinePerson } from 'react-icons/md';
import { MdAlternateEmail } from 'react-icons/md';
import { RiUserAddLine } from 'react-icons/ri';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { Button } from '../Button';
import { FormRequirements } from './FormRequirements';
import { FormError } from '../FormError';
import { Modal } from '../modal';
import { checkEmail, checkUserName } from '../../utils/regEx';
import registerUser from '../../api/registerUser';
import { useNavigate } from 'react-router-dom';
export const RegistrationForm = () => {
  // Setting up states for input validation
  const [userNameInput, setUserNameInput] = useState('');

  const [emailInput, setEmailInput] = useState('');

  const [passwordInput, setPasswordInput] = useState('');

  // Declaring error state for user registration
  const [fetchError, setFetchError] = useState([]);

  // State for modal element
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  // Handle Input Validation
  const isUserNameValid =
    userNameInput.length > 0 && checkUserName(userNameInput);
  const isEmailValid = checkEmail(emailInput);
  const isPasswordValid = passwordInput.length >= 8;

  //

  const requirements = [
    {
      text: 'Username must  not contain punctuation symbols apart from underscore (_).',
      isValid: isUserNameValid,
    },
    {
      text: 'The email value must be a valid stud.noroff.no email address.',
      isValid: isEmailValid,
    },
    {
      text: 'The password value must be at least 8 characters.',
      isValid: isPasswordValid,
    },
  ];

  // Handle user registration
  const handleRegistration = e => {
    e.preventDefault();
    setFetchError(null);
    if (isUserNameValid && isEmailValid && isPasswordValid) {
      const payload = {
        name: userNameInput,
        email: emailInput,
        password: passwordInput,
      };
      registerUser(payload)
        .then(() => {
          setFetchError(null);
          setIsOpen(true);
        })
        .catch(error => {
          console.log(error.errors);
          setFetchError(error.errors);
        });
    } else {
      console.error(
        'User registration failed due to invalid user credentials.',
      );
    }
  };
  return (
    <>
      <form
        className="mx-6 sm:mx-auto sm:max-w-[560px]"
        onSubmit={handleRegistration}
      >
        <div className="relative mb-7">
          <input
            type="text"
            className="w-full bg-neutral-100 border-b-[0.5px] border-neutral-500 placeholder-neutral-950 py-[18px] text-xs pl-8"
            placeholder="Username"
            value={userNameInput.value}
            onChange={e => setUserNameInput(e.target.value)}
          />
          <MdOutlinePerson className="absolute top-4 left-2 size-5" />
        </div>
        <div className="relative mb-7">
          <input
            type="email"
            className="w-full bg-neutral-100 border-b-[0.5px] border-neutral-500 placeholder-neutral-950 py-[18px] text-xs pl-8"
            placeholder="Email"
            value={emailInput.value}
            onChange={e => setEmailInput(e.target.value)}
          />
          <MdAlternateEmail className="absolute top-4 left-2 size-5" />
        </div>
        <div className="relative mb-7">
          <input
            type="password"
            className="w-full bg-neutral-100 border-b-[0.5px] border-neutral-500 placeholder-neutral-950 py-[18px] text-xs pl-8"
            placeholder="Password"
            value={passwordInput.value}
            onChange={e => setPasswordInput(e.target.value)}
          />
          <HiOutlineLockClosed className="absolute top-4 left-2 size-5" />
        </div>
        <FormRequirements requirements={requirements} />
        {fetchError &&
          fetchError.map(error => <FormError message={error.message} />)}
        <Button>Register User</Button>
      </form>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <RiUserAddLine className="mx-auto size-10 " />
          <h1 className="text-center text-lg font-semibold my-2">Success!</h1>
          <p className="text-sm text-neutral-500 my-6">
            Your account has been successfully created. Please click on the link
            below to sign in and start exploring your next getaway. Happy
            travels!
          </p>
          <Button handleClick={() => navigate('/signin')}>
            To Sign In Page
          </Button>
        </div>
      </Modal>
    </>
  );
};