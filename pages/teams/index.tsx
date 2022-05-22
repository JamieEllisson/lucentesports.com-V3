import Image from 'next/image'
import React from 'react'
import Playercard from '../../components/Playercard'

function Teams() {
  return (
    <main>
        <section className='teams_heading_container'>
          <h1>Teams</h1>
          <p>We field rosters across multiple esports titles; with the aim to win championships. We have already become fan favourites and want to continue providing a breathe of fresh air to the esports scene!<br/><b>Check out our active rosters below.</b></p>
        </section>
        <section id='leagueoflegends' className='league_team'>
          <div className='teams_player_grid'>
            <Playercard/>
          </div>
        </section>
    </main>
  )
}

export default Teams