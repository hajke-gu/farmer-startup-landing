import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../components/Button';
import Form from '../components/Form';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import Vegetables from '../svg/Vegetables';
import Seeds from '../svg/Seeds';
import Planting from '../svg/Planting';
import Logo from '../images/logo3.png';

export default () => (
  <Layout>
    <section id="top" className="pt-20 lg:pt-48">
      <div className="container mx-auto px-8 lg:flex justify-center items-center">
        <div className="container mx-auto text-center lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-none font-semibold">
            Let us grow together!
          </h1>
          <p className="pt-6 text-xl lg:text-2xl font-light">
            Join the communtiy and become an expert in plants!
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink offset="120" href="#interest">
              <Button size="lg">Get Started</Button>
            </AnchorLink>
          </p>
          {/*<p className="mt-4 text-gray-600">Create your account to join the communtiy of farmers!</p>*/}
        </div>
        <div className="mx-auto pt-10 lg:pt-0">
          {/*<HeroImage />*/}
          <img src={Logo} alt="logo" className="mx-auto"/>
        </div>
      </div>
    </section>
    
    {/* <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
*/}
  <div id="features" className="pt-48">
    <h2 className="text-center text-3xl lg:text-5xl font-semibold">Main Features</h2>
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Guide</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Follow our guides or check out other members guide, to become a real ace in farming!
          </p>
        </div>
      }
      secondarySlot={<Seeds />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Cultivation spots
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Find a cultivation spot near your place and start farming! Or do you own some land and want to earn some extra bucks, share your spot with other farmers!
          </p>
        </div>
      }
      secondarySlot={<Planting />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Buy and sell
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Buy locally freshly farmed vegetables and plants from other farmers! Earn some extra bucks by selling your own farmed vegetables and plants!
          </p>
        </div>
      }
      secondarySlot={<Vegetables />}
    />
    </div>
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What potential farmers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="interest" className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Start your adventure!</h3>
      <p className="mt-8 text-xl font-light">
        The idea of Viridis is still being developed, please let us know which feature you are intrested in!
      </p>

      <Form/>
      
    </section>
  </Layout>
);
