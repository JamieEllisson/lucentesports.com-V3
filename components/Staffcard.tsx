import Image from 'next/image'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/Staffcard.module.css'

function Staffcard(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.staffcard}>
        <div className={styles.image_container}>
          <Image src={props.image} alt='' layout='intrinsic' objectFit='cover' width={456} height={330}/>
        </div>
        <div className={styles.info_container}>
          <h3>{props.role}</h3>
          <h4>{props.name}</h4>
          <p>{props.bio1}</p>
          <p>{props.bio2}</p>
          <div className={styles.info_socials_container}>
            <h6><a href={props.twitter}><FaTwitter/></a></h6>
            <h6><a href={props.linkedin}><FaLinkedin/></a></h6>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Staffcard