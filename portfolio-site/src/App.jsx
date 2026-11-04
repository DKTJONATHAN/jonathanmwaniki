import React from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import WorkSection from './components/WorkSection.jsx';
import ApproachSection from './components/ApproachSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
export default function App(){return <div className="site-shell"><SiteHeader/><main id="home"><Hero/><WorkSection/><ApproachSection/><AboutSection/><ContactSection/></main><SiteFooter/></div>}
