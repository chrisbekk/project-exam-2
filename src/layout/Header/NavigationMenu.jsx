import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

export default function NavigationMenu() {
  const { data, signOut } = useAuthContext();
  const menuItems = [
    {
      name: 'Sign In',
      path: '/signin',
      signedInRoute: false,
    },
    { name: 'Register User', path: '/register', signedInRoute: false },
    { name: 'Profile', path: '/auth/profile', signedInRoute: true },
    { name: 'Dashboard', path: '/auth/dashboard', signedInRoute: true },
    { name: 'Home', path: '/', signedInRoute: false },
  ];

  const renderedMenuItems = data
    ? menuItems.filter(
        item => item.name !== 'Register User' && item.name !== 'Sign In',
      )
    : menuItems.filter(item => item.signedInRoute === false);

  return (
    <div className="absolute top-[115%] right-0 bg-neutral-100 w-36 border-[0.5px] border-neutral-500 rounded-lg p-2">
      {renderedMenuItems.map((item, index) => (
        <Link
          key={index}
          className={`text-sm text-left block my-2 ${item.name === 'Home' ? 'border-t-[0.5px] border-neutral-500' : ''}`}
          to={item.path}
        >
          {item.name}
        </Link>
      ))}
      {data && (
        <p
          onClick={signOut}
          className="text-sm text-center text-white block my-2 bg-brand p-1 rounded-xl"
        >
          Sign Out
        </p>
      )}
    </div>
  );
}
