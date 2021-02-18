import React from 'react';
import favicon from '../../images/logo3.png';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
          <link rel="icon" href={favicon} />
          <title>Viridis - Grow together!</title>
      </Helmet>
      <Header />
        <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
