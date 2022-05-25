import React from 'react'
import Image from 'next/image'
import ReactCountryFlag from "react-country-flag"
import placeholder from '../public/img/profile-placeholder.jpg'
import { FaTwitter, FaYoutube, FaTwitch } from 'react-icons/fa'
import router from 'next/router'
import Link from 'next/link'

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
    <div className='playercard_container'>
      <div className='playercard'>
        <div className='playercard_image_container'>
          <Image src={hasImage ? props.image : placeholder} alt='player pic' layout='intrinsic' width={600} height={600}/>
        </div>
        <div className='playercard_role_container'>
          <div className='playercard_role_image'>
            <Image src={props.role} alt='' layout='fill' objectFit='contain'/>
          </div>          
        </div>
        <div className='playercard_info_container'>
          <div className='playercard_flag_name'><ReactCountryFlag className='country_flag' countryCode={props.country} svg/><h4>{props.ign}</h4></div>
          <span>{props.name}</span>
        </div>
        <div className='playercard_social_container'>
          <div className={hasTwitter ? 'has_social' : 'no_social'}>
            <a href={props.twitter}><FaTwitter/></a>
          </div>   
          <div className={hasTwitch ? 'has_social' : 'no_social'}>
          <a href={props.twitch}><FaTwitch/></a>
          </div>  
          <div className={hasYoutube ? 'has_social' : 'no_social'}>
          <a href={props.youtube}><FaYoutube/></a>
          </div>                  
        </div>
        <Link href={`/teams/players/${props.ign}`}>
          <a><button role='view_profile'>View Profile</button></a> 
        </Link>
              
      </div>       
    </div>
  )
}

export default Playercard