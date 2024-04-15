import { Link } from 'react-router-dom';

const isSignedIn = false;
const menuItems = [
  {
    name: isSignedIn ? 'Sign Out' : 'Sign In',
    path: '/',
    signedInRoute: false,
  },
  { name: 'Register User', path: '/', signedInRoute: false },
  { name: 'Profile', path: '/', signedInRoute: true },
  { name: 'Dashboard', path: '/', signedInRoute: true },
  { name: 'Home', path: '/', signedInRoute: false },
];

const renderedMenuItems = isSignedIn
  ? menuItems.filter(item => item.name !== 'Register User')
  : menuItems.filter(item => item.signedInRoute === false);

export default function NavigationMenu() {
  return (
    <div className="absolute top-[115%] right-0 bg-neutral-100 w-36 border-[0.5px] border-neutral-500 rounded-lg p-2">
      {renderedMenuItems.map(item => (
        <Link
          className={`text-sm text-left block my-2 ${item.name === 'Home' ? 'border-t-[0.5px] border-neutral-500' : ''}`}
          to={item.path}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
