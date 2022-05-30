import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sanityClient } from '../../lib/sanity.server';
import { Article } from '../../typings';
import { urlFor } from '../../lib/sanity';

function News({ articles }:Props) {
  return (
    <main>
        <section className=''>
          <div className='teams_heading_container'>
            <h1>All News</h1>
          </div>
          <div className='news_grid'>
            {articles.map(post =>(
                <Link key={post._id} href={`news/${post.slug.current}`}>
                  <article className='newspage_item'>
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
        </section>
    </main>
  )
}
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
    publishedAt,    
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

export default News