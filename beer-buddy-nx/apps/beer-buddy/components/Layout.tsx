import { FC } from 'react';

export const Layout: FC = ({ children }) => (
  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
);