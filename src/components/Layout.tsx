import { PropsWithChildren } from 'react';
import { NavLeft } from '@/components';

export interface PropsLayout {}

export const Layout = ({ children }: PropsWithChildren<PropsLayout>): JSX.Element => {
  return (
    <div>
      <header className="h-10 border-b p-2">{process.env.REACT_APP_NAME}</header>
      <div className="flex">
        <NavLeft />
        <div className="w-full p-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
