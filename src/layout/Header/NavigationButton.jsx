import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { LiaUserCircle } from 'react-icons/lia';
import NavigationMenu from './NavigationMenu';
import { useUserContext } from '../../context/userContext';
export default function NavigationButton() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useUserContext();

  const handleClick = () => {
    setToggleMenu(prevToggle => !prevToggle);
  };
  let buttonContent;
  let buttonImage;
  let userAvatar = (
    <div className="size-[30px] rounded-full">
      <img
        src={user?.avatar.url}
        alt={user?.avatar.alt}
        className="h-full w-full rounded-full"
      />
    </div>
  );

  buttonImage = user ? (
    userAvatar
  ) : (
    <LiaUserCircle className="text-3xl text-neutral-500" />
  );

  if (toggleMenu) {
    buttonContent = 'Close';
  } else {
    buttonContent = (
      <span className="flex items-center justify-between px-3">
        <IoMdMenu className="text-2xl text-neutral-500" />
        {buttonImage}
      </span>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="relative h-12 w-24 rounded-3xl border-[0.5px] border-neutral-500 shadow-lg"
    >
      {buttonContent}
      {toggleMenu && <NavigationMenu />}
    </button>
  );
}
