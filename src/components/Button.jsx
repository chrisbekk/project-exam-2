export const Button = ({ children, small = false, submit, handleClick }) => {
  return (
    <button
      type={submit ? 'submit' : ''}
      onClick={handleClick}
      className={`${small ? 'w-auto px-4 py-4' : 'w-full'}  rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 py-4 text-base text-white`}
    >
      {children}
    </button>
  );
};
