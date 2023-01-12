import { Link, useLocation } from 'react-router-dom';

export const NavLeft = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className="h-screen w-32 border-r pt-4">
      <p className="mb-2 pl-2">
        <label className="text-xl font-semibold">Settings</label>
      </p>
      <Link to={'/messages'}>
        <p className={'pl-5 ' + (pathname.includes('messages') ? 'bg-gray-200' : '')}>
          <label className="cursor-pointer text-sm">Messages</label>
        </p>
      </Link>
      <Link to={'/history'}>
        <p className={'pl-5 ' + (pathname.includes('history') ? 'bg-gray-200' : '')}>
          <label className="cursor-pointer text-sm">History</label>
        </p>
      </Link>
    </div>
  );
};

export default NavLeft;
