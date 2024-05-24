export const Button = ({
  children,
  small = false,
  fill = false,
  submit,
  disabled,
  handleClick,
}) => {
  return (
    <button
      type={submit ? 'submit' : ''}
      onClick={handleClick}
      disabled={disabled}
      className={`${small ? 'w-auto px-4 py-4' : 'w-full'}  rounded-xl ${fill ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' : 'border border-neutral-500 text-neutral-950'} py-4 text-base `}
    >
      {children}
    </button>
  );
};
