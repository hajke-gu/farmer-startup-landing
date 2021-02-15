import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import Logo from '../../images/logo4.png';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
      <AnchorLink offset="100" href="#top">
        <div className="flex items-center text-2xl">
          <div className="w-36 mr-3">
            {/*<Logo />*/}
            <img src={Logo} alt="logo"/>
          </div>
        </div>
      </AnchorLink>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <AnchorLink offset="120" href="#interest">
          <Button className="text-sm">Register interest</Button>
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
