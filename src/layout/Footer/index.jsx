import { HiPaperAirplane } from 'react-icons/hi';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-100 h-24">
      <div className="container mx-auto pt-4">
        <Link to={'/'} className="flex items-center gap-2">
          <HiPaperAirplane className="text-xl text-brand" />
          <h1 className="text-xl font-semibold text-brand hidden sm:block">
            holidaze
          </h1>
        </Link>
      </div>
    </footer>
  );
}
