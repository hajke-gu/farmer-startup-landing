import React from 'react';
import favicon from '../../images/farmer.svg';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
    <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
