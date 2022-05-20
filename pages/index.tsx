import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slideshow from '../components/Slideshow'
import { useRouter } from 'next/router'
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
            <a><FaTwitterSquare/></a>
            <a><FaLinkedin/></a>
            <a><FaFacebookSquare/></a>
            <a><FaInstagram/></a>
            <a><FaYoutube/></a>
            <a><FaTwitch/></a>
            <a><FaDiscord/></a>
          </ul>
        </section>
        <section className='latest_news'>
          <div className='section_heading_container'><div className='pill'></div><h3>Latest News</h3></div>
          <div className='news_grid'>
            {articles.map(post =>(
              <Link key={post._id} href={`news/${post.slug.current}`}>
                <div className='news_item'>
                  <Image src={urlFor(post.mainImage).url()!} alt="" layout='intrinsic' objectFit='cover' width={1920} height={1080} loading="lazy"/>
                </div>
              </Link>
            ))}
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