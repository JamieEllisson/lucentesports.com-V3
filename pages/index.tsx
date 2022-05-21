import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slideshow from '../components/Slideshow'
import router, { useRouter } from 'next/router'
import { sanityClient } from '../lib/sanity.server'
import { urlFor } from "../lib/sanity"
import { Article } from '../typings'
import { FaTwitterSquare, FaLinkedin, FaInstagram, FaFacebookSquare, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa'

function Home({ articles }:Props) {

  return (
    <>
      <Head>
        <title>Lucent Esport</title>
      </Head>

      <main>
        <Slideshow/>
        <section className='socials'>
          <ul className='socials_list'>
            <a href='#'><FaTwitterSquare/></a>
            <a href='#'><FaLinkedin/></a>
            <a href='#'><FaFacebookSquare/></a>
            <a href='#'><FaInstagram/></a>
            <a href='#'><FaYoutube/></a>
            <a href='#'><FaTwitch/></a>
            <a href='#'><FaDiscord/></a>
          </ul>
        </section>
        <section className='latest_news'>
          <div className='section_heading_container'><div className='pill'></div><h3>Latest News</h3></div>
          <div className='news_grid'>
            {articles.map(post =>(
              <Link key={post._id} href={`news/${post.slug.current}`}>
                <div className='news_item'>
                  <div className='news_image_container'>
                    <Image src={urlFor(post.mainImage).url()!} alt="" layout='intrinsic' objectFit='cover' width={1920} height={1080} loading="lazy"/>
                  </div>                  
                  <div className='news_details'>
                    <div className='news_details_info'><h4>{post.categories[0].title}</h4><span className='dot'></span><h4 id='date'>{new Date(post._createdAt).toLocaleDateString("en-US",{month: 'long',day: 'numeric',year: 'numeric'})}</h4></div>
                    <h2>{post.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button role='see_more' onClick={() => router.push('/news')}>See All News</button>
        </section>
        <section>
          <div className='section_heading_container'><div className='pill'></div><h3>Recent Matches</h3></div>
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