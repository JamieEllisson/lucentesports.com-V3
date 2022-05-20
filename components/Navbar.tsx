import Link from "next/link"
import Image from "next/image"
import Styles from '../styles/Navbar.module.css'
import { useState } from 'react'
import { useRouter} from 'next/router'
import { AiOutlineSearch } from "react-icons/ai";
import Logo from '../public/img/lucent_logo.webp'

function Navbar() {
    const [open,setOpen] = useState(false);    
    const router = useRouter();
  return (
    <header className={Styles.container}>  
        <nav className={Styles.top_navbar}>
            <div className={Styles.logo_container}>
                <Link href='/'><Image src={Logo} alt='' layout="fill" objectFit="contain"/></Link>  
            </div>   
        </nav>
        <nav className={Styles.main_navbar}>
            <div className={Styles.search_container}>
                <div><AiOutlineSearch/></div>
                <h4>Search</h4>
            </div>
            <ul className={Styles.nav_menu}></ul>
            <div className={Styles.hamburger_container}>
                <h4>Menu</h4>
                <button className={Styles.hamburger_menu} onClick={() => setOpen(!open)}>
                    <span className={open ? Styles.hamburger_open : Styles.hamburger}></span>
                </button>
            </div>
        </nav>                    
    </header>
  )
}

export default Navbar

