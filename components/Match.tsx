import React from 'react'
import Image from 'next/image'
import LucentLogo from '../public/img/Logo_Red.png'
import placeholder from '../public/img/profile-placeholder.jpg'
import Link from 'next/link'
import styles from '../styles/Matches.module.css'

function Match(props: any) {     
    var hasEnemyLogo = true
    if (props.vsteamlogo == ''){
        hasEnemyLogo = false
    }
    var game = ''
    if (props.game == 'lol'){
        game = '-lol'
    }
    if (props.game == 'csgo'){
        game = '-csgo'
    }
    if (props.game == 'fifa'){
        game = '-fifa'
    }    
    var lucent = new String("LucentEsports-vs-");
    var enemy = new String(props.vsteamname.toString().replace(/\s+/g, ""));
    var matchID = lucent.concat(enemy.toString(),"-",props.date.toString(),game.toString());

  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <Image src={props.gamelogo} alt='' layout='intrinsic' width={32} height={32}/>
            <h4>{props.league}</h4>
            <time dateTime={props.date}>{props.date}</time>
            <Link href={`/fixtures/matches/${matchID}`}>
                <a><h5>See Match Details  &#8250;</h5></a>
            </Link>            
        </div>
        <div className={styles.result}>
            <div className={styles.team1}>
                <div className={styles.image_container}>
                    <Image src={LucentLogo} alt='Lucent' layout='fill' objectFit='contain' loading='lazy'/>
                </div>                
                <h4>Lucent Esports</h4>
            </div>
            <div className={props.win ? styles.win : styles.loss}>
                <h1>{props.score}</h1>
            </div>
            <div className={styles.team2}>
                <div className={styles.image_container}>
                    <Image src={hasEnemyLogo ? props.vsteamlogo : placeholder} alt='Enemy' layout='fill' objectFit='contain' loading='lazy'/>
                </div>
                <h4>{props.vsteamname}</h4>
            </div>
        </div>
    </div> 
  )
}

export default Match