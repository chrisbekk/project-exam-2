import { HiPaperAirplane } from 'react-icons/hi';
import NavigationButton from './NavigationButton';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

export default function Header() {
  const { user } = useUserContext();
  return (
    <header
      className={`fixed top-0 z-50 h-24 w-full bg-neutral-50 px-4 shadow-lg  sm:px-0`}
      id="header"
    >
      <div
        className={`container mx-auto flex h-full items-center justify-between`}
      >
        <Link to={'/'} className="flex items-center gap-2">
          <HiPaperAirplane className="text-xl text-brand" />
          <h1 className="hidden text-xl font-semibold text-brand sm:block">
            holidaze
          </h1>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            to={user ? '/auth/dashboard' : '/signin'}
            className="text-sm font-bold text-neutral-500"
          >
            Holidaze your home
          </Link>
          <NavigationButton />
        </nav>
      </div>
    </header>
  );
}
