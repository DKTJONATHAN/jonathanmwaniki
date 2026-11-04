import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Github, Mail, Menu, X, ArrowRight } from 'lucide-react';

const projects = [
  { n:'01', type:'LOCAL COMMERCE / MARKETPLACE', title:'Maua Marketplace', desc:'A local marketplace concept connecting buyers and sellers around Maua and the wider Meru area.', tags:['Marketplace','Supabase','Cloudflare'], url:'https://mauamarketplace.pages.dev', action:'Visit website', status:'Live website · features evolve', art:'maua', mark:'m.' },
  { n:'02', type:'EDUCATION / WEB PLATFORM', title:'Hillspring Academy', desc:'A school digital experience covering information, admissions and school communication.', tags:['Web experience','Forms','Cloud services'], url:'https://hillspringacademy.sc.ke', action:'Visit website', status:'Live website · ongoing maintenance', art:'school', mark:'HILLSpring' },
  { n:'03', type:'PUBLISHING / MEDIA', title:'Zandani', desc:'A digital publishing project focused on entertainment, culture and current stories.', tags:['Publishing','SEO','Automation'], url:'https://zandani.co.ke', action:'Visit website', status:'Live website · publishing systems evolving', art:'zandani', mark:'ZANDANI' },
  { n:'04', type:'PRODUCT EXPERIMENT / 2026', title:'Nooki Mtaani', desc:'Exploring a focused marketplace for secure, flexible neighbourhood storage for small merchants.', tags:['Product discovery','Cloudflare Workers','R2'], url:'https://github.com/DKTJONATHAN/nookimtaani', action:'View repository', status:'Prototype · not an operating booking service', art:'nooki', mark:'nooki.' },
];
const external = { target:'_blank', rel:'noreferrer' };

function Project({ project }) {
  return <article className="project-row">
    <div className={`project-art ${project.art}`} aria-label={`${project.title} visual identity`}>
      <span className="art-top">{project.type}</span>
      <strong>{project.mark}</strong>
      <span className="art-bottom">SELECTED WORK <i>— {project.n}</i></span>
    </div>
    <div className="project-copy">
      <div className="project-meta"><span>PROJECT / {project.n}</span><span>2024 — 2026</span></div>
      <h3>{project.title}</h3><p>{project.desc}</p>
      <div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      <a className="project-link" href={project.url} {...external}>{project.action}<ArrowUpRight size={16}/></a>
      <small>{project.status}</small>
    </div>
  </article>;
}

export default function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#home" onClick={close}>JM<span>—</span>WORKS</a>
      <button className="menu-toggle" aria-label={menuOpen?'Close navigation':'Open navigation'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav-open':''} aria-label="Main navigation">
        <a href="#work" onClick={close}>Work</a><a href="#approach" onClick={close}>Approach</a><a href="#about" onClick={close}>About</a><a className="nav-contact" href="mailto:info@jonathanmwaniki.co.ke" onClick={close}>Get in touch <ArrowUpRight size={14}/></a>
      </nav>
    </header>
    <main id="home">
      <section className="hero">
        <div className="hero-overline"><span className="status-dot"/> INDEPENDENT DIGITAL BUILDER <span className="hero-place">KENYA · EAT</span></div>
        <h1>Useful things.<br/><em>Made with intent.</em></h1>
        <div className="hero-foot"><p>I design, build and improve digital products — from local marketplaces to publishing platforms and practical tools.</p><a href="#work">Explore selected work <ArrowDownRight size={17}/></a></div>
        <div className="hero-index">PORTFOLIO / 2026</div>
      </section>
      <section id="work" className="section work-section">
        <div className="section-intro"><span>01 / SELECTED WORK</span><p>A selection of products and experiments. Status is stated plainly; no invented numbers, clients or outcomes.</p></div>
        <div className="project-list">{projects.map(project=><Project key={project.n} project={project}/>)}</div>
      </section>
      <section id="approach" className="section approach-section">
        <div className="section-intro"><span>02 / HOW I WORK</span><p>Less theatre. More useful decisions, clear interfaces and reliable systems.</p></div>
        <div className="approach-grid">
          <article><b>01</b><h3>Start with the real problem</h3><p>Understand the user, context and friction before choosing a feature or framework.</p></article>
          <article><b>02</b><h3>Make the interface earn its space</h3><p>Clear hierarchy, purposeful typography, strong contrast and interactions that explain themselves.</p></article>
          <article><b>03</b><h3>Build for the conditions</h3><p>Mobile-first, resilient, accessible and practical to operate — not just attractive in a screenshot.</p></article>
        </div>
      </section>
      <section id="about" className="section about-section">
        <div className="section-intro"><span>03 / ABOUT</span><p>A little context.</p></div>
        <div className="about-grid"><h2>Curious about the space between an idea and something people can actually use.</h2><div><p>I’m Jonathan Mwaniki, a Kenya-based digital builder working across web products, publishing and practical online services. I enjoy turning rough ideas into structured experiences and improving them through iteration.</p><p>This portfolio is intentionally selective. The work shown here reflects projects and experiments in my repositories; it does not imply that every feature is complete or every service is currently available.</p><a className="inline-link" href="https://github.com/DKTJONATHAN" {...external}>Explore my GitHub <ArrowUpRight size={15}/></a></div></div>
      </section>
      <section className="contact-section"><span>HAVE A GOOD PROBLEM?</span><h2>Let's make it<br/><em>work beautifully.</em></h2><a href="mailto:info@jonathanmwaniki.co.ke">info@jonathanmwaniki.co.ke <ArrowUpRight size={17}/></a></section>
    </main>
    <footer><span>© 2026 JONATHAN MWANIKI</span><span>BUILT WITH CARE · KENYA</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>;
}