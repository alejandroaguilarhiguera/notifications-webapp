import { PropsWithChildren } from 'react';
import { NavLeft } from '@/components';

export interface PropsLayout {}

// const Header = (<div className='h-30 w-full'>Header<div/>);

export const Layout = ({ children }: PropsWithChildren<PropsLayout>): JSX.Element => {
  return (
    <div>
      <header className="h-10 border-b p-2">{process.env.REACT_APP_NAME}</header>
      <div className="flex">
        <NavLeft />
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
