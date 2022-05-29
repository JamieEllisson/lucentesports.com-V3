import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slideshow from '../components/Slideshow'
import router, { useRouter } from 'next/router'
import { sanityClient } from '../lib/sanity.server'
import { urlFor } from "../lib/sanity"
import { Article } from '../typings'
import { FaTwitterSquare, FaLinkedin, FaInstagram, FaFacebookSquare, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa'
import LeagueOfLegends from '../public/img/leagueoflegends.jpg'
import CSGO from '../public/img/csgo.jpg'
import FIFA from '../public/img/fifa.jpg'
import GameLogo1 from '../public/img/leagueoflegends-logo.png'
import GameLogo2 from '../public/img/csgo.png'
import GameLogo3 from '../public/img/fifa.png'
import Match from '../components/Match'

function Home({ articles }:Props) {
  const latest_news = articles.slice(0,3)
  return (
    <>
      <Head>
        <title>Lucent Esport</title>
      </Head>

      <main>
        <div className='slideshow_container'>
          <Slideshow/>
          <div className='index_hero_text'>
            <h6>We are</h6>
            <h1>Lucent</h1>
            <h1>Esports</h1>
            <h6>Be the Light</h6>
          </div>
        </div>                
        <section className='socials'>
          <ul className='socials_list'>
            <a href='https://twitter.com/Lucent_Esports'><FaTwitterSquare/></a>
            <a href='https://www.linkedin.com/company/lucentesports/'><FaLinkedin/></a>
            <a href='#'><FaFacebookSquare/></a>
            <a href='https://www.instagram.com/lucentesports/'><FaInstagram/></a>
            <a href='https://www.youtube.com/channel/UCzO-kkwhMXtv1oPzI7qoQgA'><FaYoutube/></a>
            <a href='#'><FaTwitch/></a>
            <a href='#'><FaDiscord/></a>
          </ul>
        </section>
        <section className='latest_news'>
          <div className='section_heading_container'><div className='pill'></div><h3>Latest News</h3><span className='index-bar-latest'></span></div>
          <div className='news_grid'>
            {latest_news.map(post =>(
              <Link key={post._id} href={`news/${post.slug.current}`}>
                <article className='news_item'>
                  <div className='news_image_container'>
                    <Image className='news_image' src={urlFor(post.mainImage).url()!} alt="" layout='fill' objectFit='cover' loading="lazy"/>
                  </div>                  
                  <div className='news_details'>
                    <div className='news_details_info'><h4>{post.categories[0].title}</h4><span className='dot'></span><time id='date' dateTime={post._createdAt}>{new Date(post._createdAt).toLocaleDateString("en-US",{month: 'long',day: 'numeric',year: 'numeric'})}</time></div>                    
                    <h2>{post.title}</h2>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <button role='see_more' onClick={() => router.push('/news')}>See All News</button>
        </section>
        <section className='recent_matches'>
          <div className='section_heading_container'><div className='pill'></div><h3>Recent Results</h3><span className='index-bar-matches'></span></div>
          <div className='match_grid'>
            <Match game={GameLogo1} league='NLC 2nd Div Spring 2022 Playoffs' date='2022-04-07' vsteamlogo='' vsteamname='Fløng Esports Elite' score='2-3' win= {false}/>
            <Match game={GameLogo1} league='NLC 2nd Div Spring 2022' date='2022-03-24' vsteamlogo='' vsteamname='Lundqvist Lightside' score='1-0' win= {true}/>
            <Match game={GameLogo1} league='NLC 2nd Div Spring 2022' date='2022-03-22' vsteamlogo='' vsteamname='Domino Esports' score='1-0' win= {true}/>
          </div> 
          <button role='see_more' onClick={() => router.push('/')}>See All Matches</button>         
        </section>
        <section className='our_teams'>
          <div className='section_heading_container'><div className='pill'></div><h3>Our Teams</h3><span className='index-bar-teams'></span></div>
          <div className='teams_grid'>
            <Link href='/teams/#leagueoflegends' scroll={false}>
              <div className='team_container'>
                <div className='game_image_container'>
                  <Image id='leagueoflegends' className='game_image' src={LeagueOfLegends} alt='' layout='fill' objectFit='cover' loading='lazy'/>
                  <div className='game_logo_container'>
                    <Image src={GameLogo1} alt='' layout='fill' objectFit='contain'/>
                  </div>
                </div>              
              </div>
            </Link>
            <Link href='/teams/#csgo' scroll={false}>
              <div className='team_container'>
                <div className='game_image_container'>
                  <Image id='csgo' className='game_image' src={CSGO} alt='' layout='fill' objectFit='cover' objectPosition='top' loading='lazy'/>
                  <div className='game_logo_container-csgo'>
                    <Image id='csgo-logo' src={GameLogo2} alt='' layout='fill' objectFit='contain'/>
                  </div>
                </div>              
              </div>
            </Link>
            <Link href='/teams/#fifa' scroll={false}>
              <div className='team_container'>
                <div className='game_image_container'>
                  <Image id='csgo' className='game_image' src={FIFA} alt='' layout='fill' objectFit='cover' loading='lazy'/>
                  <div className='game_logo_container-csgo'>
                    <Image src={GameLogo3} alt='' layout='fill' objectFit='contain'/>
                  </div>
                </div>              
              </div> 
            </Link>                                           
          </div>          
        </section>        
        <section className='social_feed'>
          <div className='section_heading_container'><div className='pill'></div><h3>Social Feed</h3><span className='index-bar-socials'></span></div>
          <div className='twitter_container'>
            <a className="twitter-timeline" data-height="800" data-theme="dark" href="https://twitter.com/Lucent_Esports?ref_src=twsrc%5Etfw">Tweets by Lucent_Esports</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

interface Props{
  articles: [Article];  
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,    
    categories[]->{
      title,
    },     
    mainImage,
    slug
  }`;

  const articles = await sanityClient.fetch(query);

  return{
    props: {
      articles,      
    },    
  }
};