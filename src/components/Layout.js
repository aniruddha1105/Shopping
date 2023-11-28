// Layout.js

import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  // You can include any other layout elements here
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
