import React from 'react'
import Image from 'next/image'
import ReactCountryFlag from "react-country-flag"
import placeholder from '../public/img/profile-placeholder.jpg'
import { FaTwitter, FaYoutube, FaTwitch } from 'react-icons/fa'
import router from 'next/router'
import Link from 'next/link'
import styles from '../styles/Playercard.module.css'

function Playercard(props: any) {
  var hasTwitter = true
  var hasTwitch = true
  var hasYoutube = true
  var hasImage = true
  if (props.twitter == ''){
    hasTwitter = false;
  }
  if (props.twitch == ''){
    hasTwitch = false;
  }
  if (props.youtube == ''){
    hasYoutube = false;
  } 
  if (props.image == ''){
    hasImage = false;
  }
  return (
    <div className={styles.container}>      
        <div className={styles.image_container}>
          <Image src={hasImage ? props.image : placeholder} alt='player pic' layout='intrinsic' width={600} height={600}/>
        </div>
        <div className={styles.role_container}>
          <div className={styles.role_image}>
            <Image src={props.role} alt='' layout='fill' objectFit='contain'/>
          </div>          
        </div>
        <div className={styles.info_container}>
          <div className={styles.flag_and_ign}><ReactCountryFlag className='country_flag' countryCode={props.country} svg/><h4>{props.ign}</h4></div>
          <span>{props.name}</span>
        </div>
        <div className={styles.social_container}>
          <div className={hasTwitter ? styles.has_social : styles.no_social}>
            <a href={props.twitter}><FaTwitter/></a>
          </div>   
          <div className={hasTwitch ? styles.has_social : styles.no_social}>
          <a href={props.twitch}><FaTwitch/></a>
          </div>  
          <div className={hasYoutube ? styles.has_social : styles.no_social}>
          <a href={props.youtube}><FaYoutube/></a>
          </div>                  
        </div>
        <Link href={`/teams/players/${props.ign}`}>
          <a><button role='view_profile'>View Profile</button></a> 
        </Link>                       
    </div>
  )
}

export default Playercard