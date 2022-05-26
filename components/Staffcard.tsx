import Image from 'next/image'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'

function Staffcard(props: any) {
  return (
    <div className='staffcard_container'>
      <div className='staffcard'>
        <div className='staffcard_image_container'>
          <Image src={props.image} alt='' layout='intrinsic' objectFit='cover' width={456} height={330}/>
        </div>
        <div className='staffcard_info_container'>
          <h3>{props.role}</h3>
          <h4>{props.name}</h4>
          <p>{props.bio1}</p>
          <p>{props.bio2}</p>
          <div className='staffcard_info_socials_container'>
            <h6><a href={props.twitter}><FaTwitter/></a></h6>
            <h6><a href={props.linkedin}><FaLinkedin/></a></h6>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Staffcard