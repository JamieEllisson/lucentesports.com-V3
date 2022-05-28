import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
        url: '/img/large-slideshow-1.jpg',
        caption: 'First Slide'
    },
    {
        url: '/img/large-slideshow-2.jpg',
        caption: 'Second Slide'
    },   
    {
        url: '/img/space.jpg',
        caption: 'Third Slide'
    },
    {
        url: '/img/sunset.jpg',
        caption: 'Fourth Slide'
    },
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{width: "24px", marginRight: "-24px"}}><svg className='prevArrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg></div>,
    nextArrow: <div style={{width: "24px", marginLeft: "-24px"}}><svg className='nextArrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg></div>,
    
}

function Slideshow() {
  return (
    <div className='slide_container'>       
        <Fade {...properties}>
            {fadeImages.map((each,index)=>(  
                <div className="image_container" key={index} >
                    <Image src={each.url} alt='' layout='intrinsic' objectFit='cover' width={1920} height={1080} priority/>  
                </div>                            
            ))}
        </Fade>
    </div>
  )
}

export default Slideshow