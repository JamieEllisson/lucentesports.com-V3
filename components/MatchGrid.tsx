import React from 'react'
import Match from './Match'
import GameLogo1 from '../public/img/leagueoflegends-logo.png'
import GameLogo2 from '../public/img/csgo.png'
import GameLogo3 from '../public/img/fifa.png'

function MatchGrid() {
  return (
    <div className='match_grid'>
        <Match game='lol' gamelogo={GameLogo1} league='NLC 2nd Div Spring 2022 Playoffs' date='2022-04-07' vsteamlogo='' vsteamname='Fløng Esports Elite' score='2-3' win= {false}/>
        <Match game='lol' gamelogo={GameLogo1} league='NLC 2nd Div Spring 2022' date='2022-03-24' vsteamlogo='' vsteamname='Lundqvist Lightside' score='1-0' win= {true}/>
        <Match game='lol' gamelogo={GameLogo1} league='NLC 2nd Div Spring 2022' date='2022-03-22' vsteamlogo='' vsteamname='Domino Esports' score='1-0' win= {true}/>
    </div> 
  )
}

export default MatchGrid