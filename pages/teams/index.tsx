import Image from 'next/image'
import React from 'react'
import Playercard from '../../components/Playercard'
import Top from '../../public/img/loltop.svg'
import Jgl from '../../public/img/loljgl.svg'
import Mid from '../../public/img/lolmid.svg'
import Bot from '../../public/img/lolbot.svg'
import Sup from '../../public/img/lolsup.svg'

function Teams() {
  return (
    <main>
        <section className='teams_heading_container'>
          <h1>Teams</h1>
          <p>We field rosters across multiple esports titles; with the aim to win championships. We have already become fan favourites and want to continue providing a breathe of fresh air to the esports scene!<br/><b>Check out our active rosters below.</b></p>
        </section>
        <section id='leagueoflegends' className='league_team'>
          <div className='section_heading_container'><div className='pill'></div><h3>League of Legends</h3></div>
          <div className='teams_player_grid'>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Top} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Jgl} country='FR' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Mid} country='DK' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Bot} country='KR' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Sup} country='US' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
          </div>
        </section>
        <section>
        <div className='section_heading_container'><div className='pill'></div><h3>Counter Strike Global Offensive</h3></div>
          <div className='teams_player_grid'>
            
          </div>
        </section>
        <section>
        <div className='section_heading_container'><div className='pill'></div><h3>Fifa</h3></div>
          <div className='teams_player_grid'>
            
          </div>
        </section>
    </main>
  )
}

export default Teams