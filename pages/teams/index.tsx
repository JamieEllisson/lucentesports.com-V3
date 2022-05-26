import Image from 'next/image'
import React from 'react'
import Playercard from '../../components/Playercard'
import Staff from '../../public/img/staff.svg'
import Top from '../../public/img/loltop.svg'
import Jgl from '../../public/img/loljgl.svg'
import Mid from '../../public/img/lolmid.svg'
import Bot from '../../public/img/lolbot.svg'
import Sup from '../../public/img/lolsup.svg'
import CSGO from '../../public/img/csgorole.png'
import Head from 'next/head'

function Teams() {
  return (
    <>
    <Head>
      <title>Lucent Esports | Teams</title>
    </Head>

    <main>
        <section className='teams_heading_container'>
          <h1>Our Teams</h1>
          <p>We field rosters across multiple esports titles with the aim to win championships. We have already become fan favourites and want to continue providing a breathe of fresh air to the esports scene!<br/><br/><b>Check out our active rosters below</b></p>
        </section>
        <section className='team_section_container'>
          <a className='anchor' id='leagueoflegends'></a>
          <div className='section_heading_container'><div className='pill'></div><h3>League of Legends</h3><span className='teams-bar-lol'></span></div>
          <div className='teams_player_grid'>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Top} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Jgl} country='FR' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Mid} country='DK' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Bot} country='KR' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Sup} country='US' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='Jamie' name='Jamie Ellisson' image='' role={Staff} country='BR' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
          </div>
        </section>
        <section className='team_section_container'>
        <a className='anchor' id='csgo'></a>
        <div className='section_heading_container'><div className='pill'></div><h3>CSGO</h3><span className='teams-bar-csgo'></span></div>
          <div className='teams_player_grid'>
            <Playercard ign='?' name='?' image='' role={CSGO} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='?' name='?' image='' role={CSGO} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='?' name='?' image='' role={CSGO} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='?' name='?' image='' role={CSGO} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='?' name='?' image='' role={CSGO} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='?' name='?' image='' role={Staff} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
          </div>
        </section>
        <section className='team_section_container'>
        <a className='anchor' id='fifa'></a>
        <div className='section_heading_container'><div className='pill'></div><h3>Fifa</h3><span className='teams-bar-fifa'></span></div>
          <div className='teams_player_grid'>
            <Playercard ign='?' name='?' image='' role={Staff} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <Playercard ign='?' name='?' image='' role={Staff} country='GB' twitter='https://twitter.com/Lucent_Esports' twitch='#' youtube='#'/>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
    </main>
    </>
  )
}

export default Teams