import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

export default function NavigationMenu() {
  const { user, signOut } = useAuthContext();
  const menuItems = [
    {
      name: 'Sign In',
      path: '/signin',
      signedInRoute: false,
    },
    { name: 'Register User', path: '/register', signedInRoute: false },
    {
      name: 'Profile',
      path: `/auth/profile/${user.data.name}`,
      signedInRoute: true,
    },
    {
      name: 'Dashboard',
      path: `/auth/dashboard/${user.data.name}`,
      signedInRoute: true,
    },
    { name: 'Home', path: '/', signedInRoute: false },
  ];

  const renderedMenuItems = user
    ? menuItems.filter(
        item => item.name !== 'Register User' && item.name !== 'Sign In',
      )
    : menuItems.filter(item => item.signedInRoute === false);

  return (
    <div className="absolute right-0 top-[115%] w-36 rounded-lg border-[0.5px] border-neutral-500 bg-neutral-100 p-2">
      {renderedMenuItems.map((item, index) => (
        <Link
          key={index}
          className={`my-2 block text-left text-sm ${item.name === 'Home' ? 'border-t-[0.5px] border-neutral-500' : ''}`}
          to={item.path}
        >
          {item.name}
        </Link>
      ))}
      {user && (
        <p
          onClick={signOut}
          className="my-2 block rounded-xl bg-brand p-1 text-center text-sm text-white"
        >
          Sign Out
        </p>
      )}
    </div>
  );
}
