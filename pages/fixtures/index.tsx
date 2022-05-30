import React from 'react'
import { useState } from 'react'
import MatchGrid from '../../components/MatchGrid';
function Fixtures() {
  const [results,setResults] = useState(false);
  return (
    <main>
      <section className='teams_heading_container'>
          <h1>Fixtures</h1> 
          <p>Paragraph</p> 
          <ul>
            <li onClick={() => setResults(false)}>Upcoming</li>
            <li onClick={() => setResults(true)}>Results</li>
          </ul>        
      </section>
      <section className={results ? 'none' : 'fixtures_upcoming'}>
        <h1>Future Fixtures</h1>
      </section>
      <section className={results ? 'fixtures_results' : 'none'}>
        <MatchGrid/>
      </section>
    </main>
  )
}

export default Fixtures