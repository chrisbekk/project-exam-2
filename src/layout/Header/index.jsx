import { HiPaperAirplane } from 'react-icons/hi';
import NavigationButton from './NavigationButton';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="h-24 w-full shadow-lg px-4 sm:px-0 fixed top-0 z-50 bg-neutral-50">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link to={'/'} className="flex items-center gap-2">
          <HiPaperAirplane className="text-xl text-brand" />
          <h1 className="text-xl font-semibold text-brand hidden sm:block">
            holidaze
          </h1>
        </Link>
        <nav className="flex items-center gap-8">
          <Link to={'/'} className="text-sm font-bold text-neutral-500">
            Holidaze your home
          </Link>
          <NavigationButton />
        </nav>
      </div>
    </header>
  );
}
