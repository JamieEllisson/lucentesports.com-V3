import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Staffcard from '../../components/Staffcard'

function about() {
  return (
    <>
      <Head>
        <title>Lucent Esports | About</title>
      </Head>
      
      <main>
        <section id='about-lucent' className='about_lucent'>
          <div className='about_lucent_container'><span className='down_arrow'>&#x1F853;</span><div className='lucent_heading'><h1>The</h1><h1>Lucent</h1><h1>Story</h1></div><span className='down_arrow'>&#x1F853;</span></div>
          <div className='about_lucent_content_container'>
            <p>Lucent Esports, is an established esports organisation created, developed, and operational in the United Kingdom. Founded in 2018, with a further rebrand in 2020. We are a brand built upon ambition and setting the standards within esports. Our slogan <b>&#39;Be The Light&#39;</b> fits perfectly into our company&#39;s mission statement <b>&#39;To shine that light on talent and provide them with opportunities in Esports &#38; Gaming.&#39;</b></p>
            <p>The brand was built upon the same fundamentals that are still being implemented three years on. We are a multi-dimensional brand and business that fields premier teams, in premier leagues, creates content and entertainment for the community at home, and allows our audience to empower themselves through our clothing range.</p>
          </div>
        </section>
        <section id='our-partners' className='about_partners'>
          <div className='section_heading_container'><div className='pill'></div><h3>Our Partners</h3><span className='about-bar-partners'></span></div>
        </section>
        <section id='our-staff' className='about_staff'>
          <div className='section_heading_container'><div className='pill'></div><h3>Our Staff</h3><span className='about-bar-staff'></span></div>
          <div className='about_staff_grid'>
            <Staffcard image='/img/staff/will.webp' role='CEO &#38; Co-Founder' name='William Gleadall' bio1='As one of the Founding bodies behind Lucent, William has been at the forefront of Lucent&#39;s direction over the past 3 years.' bio2='William has a strong background in Social Media, Marketing, and Management.' twitter='' linkedin=''/>
            <Staffcard image='/img/staff/ellis.webp' role='Director &#38; Business Development' name='Ellis Ratchford' bio1='A driving force behind the Lucent relaunch in 2020. Ellis currently operates Lucent&#39;s Business development and growth.' bio2='Ellis has a strong background in Management, Sales, and Pitching.' twitter='' linkedin=''/>
            <Staffcard image='/img/staff/brad.webp' role='Finance Director &#38; Co-Founder' name='Bradley Deamer' bio1='A founding member behind Lucent. Bradley has seen the highs and lows throughout the years with Lucent. Bradley actively, heads up Lucent&#39;s finance department, while he&#39;s currently studying and practicing accountancy at H.W. Fisher.' bio2='' twitter='' linkedin=''/>
            <Staffcard image='/img/staff/jack.webp' role='Director' name='Jack Brier' bio1='Jack joined Lucent in the relaunch of 2020. An avid interest in gaming from his competitive past. Jack wanted to help Lucent continue to deliver our message to players, students, and our community.' bio2='' twitter='' linkedin=''/>
            <Staffcard image='/img/staff/gary.webp' role='Adviser' name='Gary Tibbet' bio1='In 2022, Gary joined Lucent as our first member of the Advisory Board.' bio2='He is actively the Education Manager at the British Esports Association and has years of experience in Management, Teaching, and Esports.' twitter='' linkedin=''/>
            <Staffcard image='/img/staff/owen.webp' role='Creative Design Lead' name='Owen Mead' bio1='Owen joined the team in 2021 and was the man behind the 2021 logo and platform rebrand; bringing new life to Lucent.' bio2='Owen actively works on maintaining Lucent&#39;s image and helps an array of UK brands look their best.' twitter='' linkedin=''/>
            <Staffcard image='/img/staff/robert.webp' role='Content Strategist' name='Robert Walls' bio1='Robert originally joined Lucent as a Content Creator. At the height of COVID, Robert wanted to develop and devote his time at Lucent to more than just streaming. Robert took on the role of Content Strategist across all our Content channels.' bio2='' twitter='' linkedin=''/>
            <Staffcard image='/img/staff/jordan.webp' role='Lead Apparel Designer' name='Jordan Hall' bio1='Jordan joined the team following Lucent&#39;s brand relaunch. We saw a gap in the Esports Apparel Market and Jordan brings our designs to life for our community. Got a piece of Lucent merch? He designed it!' bio2='' twitter='' linkedin=''/>            
          </div>
        </section>
        <section id='our-achievements' className='about_achievements'>
          <div className='section_heading_container'><div className='pill'></div><h3>Our Achievements</h3><span className='about-bar-achievements'></span></div>
          <div className='achievements_content_container'>
            <div>
              <h5>At Lucent we have a rich competitive history:</h5>
              <ul className='achievement_list'>
                <li><b>EGL </b>Sheffield Open 2018 (Gears of War 4)- 3rd Place</li>
                <li><b>EGL </b>London Open 2018 (Gears of War 4) - 2nd Place</li>
                <li><b>MLG </b>New Orleans Open (Gears of War 4) - 13th-16th</li>
                <li><b>MLG </b>New Orleans Open (Halo Reach) - Top 32 Place</li>
                <li><b>EGL </b>Liverpool Open 2018 (Gears of War 4) - 2nd Place</li>
                <li><b>MLG </b>San Diego Open (Gears of War 4) - 9th - 12th Place</li>
                <li><b>UKEL </b>Spring playoff 2021 (League of Legends) - 1st Place</li>
              </ul>
            </div>
            <div className='achievements_image_container'>
              <Image src='/img/achievements_sideimage.webp' alt='' layout='fill' objectFit='cover' loading='lazy'/>
            </div>
          </div>
        </section>
        <section id='contact-us' className='about_contact'>
          <div className='section_heading_container'><div className='pill'></div><h3>Contact Us</h3><span className='about-bar-contact'></span></div>
          <div className='contact_content_container'>
            <div className='contact_left_container'>
              <div className='contact_image_container'>
                <Image src='/img/contact_image.webp' alt='' layout='fill' objectFit='cover' loading='lazy'/>
              </div>              
            </div>          
            <div className='form_container'>
              <form name='contact' method='POST' data-netlify='true'>
                <label className='form_item'>
                  <span>Name:</span>
                  <input type='text' name='name' placeholder='Name' required></input>
                </label>                                 
                <label className='form_item'>
                  <span>Email:</span>
                  <input type='text' name='email' placeholder='Email' required></input>
                </label>            
                <label className='form_item'>
                  <span>Subject:</span>
                  <input type='text' name='subject' placeholder='Subject' required></input>
                </label>            
                <label className='form_item'>
                  <span>Message:</span>
                  <textarea name='message' placeholder='Message' required></textarea>
                </label>            
                <button className='form_submit' type='submit'>Send Message</button>
              </form>  
            </div>
          </div>          
        </section>
      </main>  
    </>
  )    
}

export default about