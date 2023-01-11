import { Link } from 'react-router-dom';

export const NavLeft = (): JSX.Element => {
  return (
    <div className="h-screen w-32 border-r pt-4">
      <p className="mb-2 pl-2">
        <label className="text-xl font-semibold">Settings</label>
      </p>
      <Link to={'/'}>
        <p className="bg-gray-200 pl-5">
          <label className="cursor-pointer text-sm">Messages</label>
        </p>
      </Link>
      <Link to={'/history'}>
        <p className="pl-5">
          <label className="cursor-pointer text-sm">History</label>
        </p>
      </Link>
    </div>
  );
};

export default NavLeft;
