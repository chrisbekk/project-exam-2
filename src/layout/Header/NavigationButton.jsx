import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { LiaUserCircle } from 'react-icons/lia';
import NavigationMenu from './NavigationMenu';

export default function NavigationButton() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(prevToggle => !prevToggle);
  };
  let buttonContent;

  if (toggleMenu) {
    buttonContent = 'Close';
  } else {
    buttonContent = (
      <span className="flex items-center justify-between px-3">
        <IoMdMenu className="text-2xl text-neutral-500" />
        <LiaUserCircle className="text-3xl text-neutral-500" />
      </span>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="h-12 w-24 rounded-3xl border-[0.5px] border-neutral-500 shadow-lg relative"
    >
      {buttonContent}
      {toggleMenu && <NavigationMenu />}
    </button>
  );
}
