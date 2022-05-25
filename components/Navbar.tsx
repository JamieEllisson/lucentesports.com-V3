import Link from "next/link"
import Image from "next/image"
import Styles from '../styles/Navbar.module.css'
import { useState } from 'react'
import { useRouter} from 'next/router'
import { AiOutlineSearch } from "react-icons/ai";
import { FaTwitterSquare, FaLinkedin, FaInstagram, FaFacebookSquare, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa'
import Logo from '../public/img/lucent_logo.webp'


function Navbar() {
    const [open,setOpen] = useState(false);    
    const router = useRouter();
  return (
    <header className={Styles.container}> 
     <nav className={open ? Styles.mobile_menu_open: Styles.mobile_menu}>
            <ul className={Styles.mobile_nav_menu}>
                <div className={Styles.mobile_nav_socials}>
                    <ul className={Styles.mobile_socials}>
                        <a href='https://twitter.com/Lucent_Esports'><FaTwitterSquare/></a>
                        <a href='https://www.linkedin.com/company/lucentesports/'><FaLinkedin/></a>
                        <a href='#'><FaFacebookSquare/></a>
                        <a href='https://www.instagram.com/lucentesports/'><FaInstagram/></a>
                        <a href='https://www.youtube.com/channel/UCzO-kkwhMXtv1oPzI7qoQgA'><FaYoutube/></a>
                        <a href='#'><FaTwitch/></a>
                        <a href='#'><FaDiscord/></a> 
                    </ul>
                </div>
                <li><Link href='/'><a onClick={() => setOpen(!open)}>Home</a></Link></li>
                <li><Link href='/news'><a onClick={() => setOpen(!open)}>News</a></Link></li>
                <li><Link href='/teams'><a onClick={() => setOpen(!open)}>Teams</a></Link></li>
                <li><Link href='#'><a onClick={() => setOpen(!open)}>Fixtures</a></Link></li>
                <li><Link href='#'><a onClick={() => setOpen(!open)}>Shop</a></Link></li>
                <li><Link href='#'><a onClick={() => setOpen(!open)}>About</a></Link></li>                            
            </ul>
        </nav> 
        <nav className={Styles.top_navbar}>
            <div className={Styles.logo_container}>
                <Link href='/'><Image src={Logo} alt='' layout="fill" objectFit="contain"/></Link>  
            </div>   
        </nav>
        <nav className={Styles.primary_navbar}>
            <div className={Styles.search_container}>
                <div><AiOutlineSearch/></div>
                <h4>Search</h4>
            </div>
            <ul className={Styles.nav_menu}>
               <Link href='/'><li className={Styles.item}><div className={router.pathname == '/home' ? Styles.link_current : Styles.link_style}><a className={Styles.link}>Home</a></div></li></Link>
               <Link href='/news'><li className={Styles.item}><div className={router.pathname == '/news' ? Styles.link_current : Styles.link_style}><a className={Styles.link}>News</a></div></li></Link>
               <Link href='/teams'><li className={Styles.item}><div className={router.pathname == '/teams' ? Styles.link_current : Styles.link_style}><a className={Styles.link}>Teams</a></div></li></Link>
               <Link href='/fixtures'><li className={Styles.item}><div className={router.pathname == '/fixtures' ? Styles.link_current : Styles.link_style}><a className={Styles.link}>Fixtures</a></div></li></Link>
               <Link href='/shop'><li className={Styles.item}><div className={router.pathname == '/shop' ? Styles.link_current : Styles.link_style}><a className={Styles.link}>Shop</a></div></li></Link>
               <Link href='/about'><li className={Styles.item}><div className={router.pathname == '/about' ? Styles.link_current : Styles.link_style}><a className={Styles.link}>About</a></div></li></Link> 
            </ul>            
            <div className={Styles.hamburger_container}>
                <h4>Menu</h4>
                <button className={Styles.hamburger_menu} onClick={() => setOpen(!open)} aria-expanded = {open ? 'true' : 'false'}>
                    <span className={open ? Styles.hamburger_open : Styles.hamburger}></span>
                </button>
            </div>
        </nav>                         
    </header>
  )
}

export default Navbar

