import React from 'react'
import Image from 'next/image'

function Match(props: any) {     
  return (
    <div className='match_container'>
        <div className='match_details'>
            <Image src={props.game} alt='' layout='intrinsic' width={32} height={32}/>
            <h4>{props.league}</h4>
            <h6>{props.date}</h6>
            <h5>See Match Details</h5>
        </div>
        <div className='match_result'>
            <div className='team1'>
                <Image src='/img/lucentlogo.png' alt='Lucent' layout='intrinsic' width={50} height={50}/>
                <h4>Lucent Esports</h4>
            </div>
            <div className={props.win ? 'win' : 'loss'}>
                <h1>{props.score}</h1>
            </div>
            <div className='team2'>
                <Image src={props.vsteamlogo} alt='Enemy' layout='intrinsic' width={50} height={50}/>
                <h4>{props.vsteamname}</h4>
            </div>
        </div>
    </div> 
  )
}

export default Match