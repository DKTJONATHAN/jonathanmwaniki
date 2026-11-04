import React,{useState} from 'react';
import {ArrowUpRight,Menu,X} from 'lucide-react';
import Brand from './Brand.jsx';
export default function SiteHeader(){const[open,setOpen]=useState(false);const close=()=>setOpen(false);return <header className="site-header"><Brand/><button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?'nav-open':''} aria-label="Main navigation"><a href="#work" onClick={close}>Work</a><a href="#approach" onClick={close}>Approach</a><a href="#about" onClick={close}>About</a><a className="nav-contact" href="mailto:info@jonathanmwaniki.co.ke" onClick={close}>Get in touch <ArrowUpRight size={14}/></a></nav></header>}
