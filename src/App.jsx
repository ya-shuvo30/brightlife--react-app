import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Home from './components/sections/Home.jsx';
import AboutUs from './components/sections/AboutUs.jsx';
import OurServices from './components/sections/OurServices.jsx';
import NetworkHospital from './components/sections/NetworkHospital.jsx';
import ValuedMembers from './components/sections/ValuedMembers.jsx';
import Registration from './components/sections/Registration.jsx';
import Contact from './components/sections/Contact.jsx';
import InsurancePartner from './components/sections/InsurancePartner.jsx';
import CoustomerSupport from './components/sections/CoustomerSupport.jsx';
import TermsAndConditions from './components/sections/TermsAndConditions.jsx';
import PrivacyPolicy from './components/sections/PrivacyPolicy.jsx';
import ReturnAndRefundPolicy from './components/sections/ReturnAndRefundPolicy.jsx';
import Footer from './components/layout/Footer.jsx';

function App() {
  const navigateTo = (page) => {
    const sectionId = page.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.warn(`Section with ID "${sectionId}" not found.`);
    }
  };

  return (
    <div>
      <Navbar navigateTo={navigateTo} />
      <main className="pt-24"> {/* This padding pushes all content down */}
        <Home navigateTo={navigateTo} />
        <AboutUs />
        <OurServices />
        <NetworkHospital />
        <ValuedMembers />
        <Registration />
        <Contact />
        <InsurancePartner />
        <CoustomerSupport />
        <TermsAndConditions />
        <PrivacyPolicy />
        <ReturnAndRefundPolicy />
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;
