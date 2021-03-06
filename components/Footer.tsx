import Image from 'next/image'
import Styles from '../styles/Footer.module.css'
import Logo from '../public/img/lucent_logo.webp'
import { FaTwitterSquare, FaLinkedin, FaInstagram, FaFacebookSquare, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={Styles.container}>
      <div className={Styles.top_footer}>
        <div className={Styles.logo_and_socials}>
          <div className={Styles.logo_container}>
            <Image src={Logo} alt='lucent logo' layout='intrinsic' width={273} height={88}/>
          </div>
          <ul className={Styles.socials_list}>
            <a href='https://twitter.com/Lucent_Esports'><FaTwitterSquare/></a>
            <a href='https://www.linkedin.com/company/lucentesports/'><FaLinkedin/></a>
            <a href='#'><FaFacebookSquare/></a>
            <a href='https://www.instagram.com/lucentesports/'><FaInstagram/></a>
            <a href='https://www.youtube.com/channel/UCzO-kkwhMXtv1oPzI7qoQgA'><FaYoutube/></a>
            <a href='#'><FaTwitch/></a>
            <a href='#'><FaDiscord/></a>
          </ul>
        </div>
        <div className={Styles.nav_container}>
          <div className={Styles.nav}>
            <h4>Lucent Esports</h4>
            <ul className={Styles.nav_menu}>
              <li><a>About</a></li>
              <li><a>Our Staff</a></li>
              <li><a>Partners</a></li>
              <li><a>Achievements</a></li>
              <li><a>Branding</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
          <div className={Styles.nav}>
            <h4>Our Teams</h4>
            <ul className={Styles.nav_menu}>
              <li><a>League of Legends</a></li>
              <li><a>CS:GO</a></li>
              <li><a>FIFA</a></li>           
            </ul>
          </div>
          <div className={Styles.nav}>
            <h4>Site Links</h4>
            <ul className={Styles.nav_menu}>
              <li><a>Home</a></li>
              <li><a>News</a></li>            
              <li><a>Fixtures</a></li>
              <li><a>Shop</a></li>            
            </ul>
          </div>
        </div>
      </div>
      <div className={Styles.legal_container}>
        <h5>Lucent Esports Limited | Company Number: 12876349</h5>
      </div>
    </footer>
  )
}

export default Footer