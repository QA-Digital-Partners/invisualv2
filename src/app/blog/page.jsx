"use client"
import React from "react"
import AnimatedLine from "../components/animatedLine";
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { fetchWordPressPosts } from '../utils/getBlogPosts';
import { getWordPressCategories } from '../utils/getBlogCategories';
import ButtonLaid from "../components/button";
import Link from 'next/link';

const Blog = (props) => {

  const [posts, setPosts] = useState([]);
  const [lastTreePosts, setlastTreePosts] = useState([]);
  const [latestPostId, setLatestPostId] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef(null);

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

   const apiUrl = 'https://qadigitalads.com';

  useEffect(() => {
    async function loadCategories() {
      const data = await getWordPressCategories(apiUrl);
      setCategories(data);
      setLoading(false);
    }

    loadCategories();
  }, []);

  const handleFetchPosts = async (pageNum = 1, reset = false) => {
    setLoading(true);

    const { posts: fetchedPosts, hasMore, latestPostId } = await fetchWordPressPosts({
      pageNumber: pageNum,
      apiUrl,
      categoryId: activeCategory,
    });

    // 🔑 Aquí tú decides: agregar o reemplazar
    setPosts(reset ? fetchedPosts : [...posts, ...fetchedPosts]);

    setHasMore(hasMore);
    if (latestPostId && pageNum === 1) setLatestPostId(latestPostId);
      // ✅ Solo guardamos los primeros 3 si es la primera carga de todo
    if (!reset && pageNum === 1 && lastTreePosts.length === 0) {
      let ultimos = posts.slice(0, 3);
      console.log(ultimos, posts);
      setlastTreePosts(fetchedPosts.slice(0, 3)); 
    }

    setLoading(false);
  };

  useEffect(() => {
    handleFetchPosts(1);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    handleFetchPosts(nextPage); // No pasa `true`, mantiene posts
  };

  const changeCategory = async (catId) => {
    setActiveCategory(catId);
    setPage(1);
    setPosts([]);      // Limpia antes del fetch
    setLoading(true);  // Activa loader

    const { posts: newPosts, hasMore, latestPostId } = await fetchWordPressPosts({
      pageNumber: 1,
      existingPosts: [],
      apiUrl,
      categoryId: catId,
    });

    setPosts(newPosts);
    setHasMore(hasMore);
    if (latestPostId) setLatestPostId(latestPostId);
    setLoading(false);
  };

  const getPlainExcerpt = (html, wordLimit = 30) => {
    // Crear un elemento temporal para convertir HTML a texto
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const text = temp.textContent || temp.innerText || '';

    // Limitar la cantidad de palabras
    const words = text.trim().split(/\s+/).slice(0, wordLimit);
    return words.join(' ') + (words.length >= wordLimit ? '...' : '');
  };

useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;
      const { top } = targetRef.current.getBoundingClientRect();

      // Se activa solo cuando el top es menor o igual a 10px
      setIsVisible(top <= 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Verifica al inicio por si ya está arriba
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/*********************************** Hero Banner */}
      <section id="blog-banner" className="text-white relative">
        <AnimatedLine />
        <div className="absolute z-0 max-h-[600px] h-[400px] rotate-[-163.5deg] overflow-hidden translate-x-[-300px] translate-y-[-30px] shadow-[5px_10px_16px_0px_rgba(0,0,0,0.7)] z-0 bg-[#1A1A1A]">
          <div className={`lg:w-[2500px] w-full h-[100px] bg-[#1A1A1A]`} />
        </div>
        <div className="container mx-auto lg:px-34 relative z-400">
          <Image
            src='/images/invisual-car-wrap-blog-1.webp'
            alt=''
            width={1376}
            height={590}
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/invisual-car-wrap-blog-1.webp 768w, /images/invisual-car-wrap-blog-1.webp 1024w"
            className="absolute top-[-150px] left-0 z-10 fade-in-left "
        />
          <h1 className="lg:text-[120px] lg:leading-[80px] font-black italic lg:pb-8 lg:ps-20 z-20 relative"><span className="lg:text-[70px] text-stroke block">OUR</span> BLOG</h1>
          <Image
            src='/images/invisual-car-wrap-blog-2.webp'
            alt=''
            width={623}
            height={444}
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/invisual-car-wrap-blog-2.webp 768w, /images/invisual-car-wrap-blog-2.webp 1024w"
            className="absolute right-0 z-20 fade-in-right top-[120px]"
        />
        </div>

        <div className="absolute z-0 lg:bottom-[150px] max-h-[400px] h-[400px] rotate-[-163.5deg] overflow-hidden translate-x-[-300px] translate-y-[-30px] shadow-[-20px_-15px_20px_-12px_rgba(0,0,0,1)] z-0 bg-[#1A1A1A]">
          <div className={`lg:w-[2500px] w-full h-[100px] bg-[#1A1A1A]`} />
        </div>

        <AnimatedLine classes={'justify-self-end -rotate-180 mt-20'}/>
      </section>

      {/*********************************** Blogs section*/}

      <section id="blogs" className="">
        <div className="container mx-auto lg:max-w-[1200px] flex gap-8 items-start min-h-screen z-10">

          {/********************************** Blogs List **********************/}
          <div className="lg:w-8/12">

          {loading && posts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-white">
              <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-red-600 rounded-full mb-4"></div>
              <p className="text-lg">Cargando posts...</p>
            </div>
          )}

          <main className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post) => {
              const isLatest = post.id === latestPostId;
              return isLatest ? (
                  <div key={post.id} className="w-full bg-red-100 col-span-4 lg:min-h-124 justify-items-end content-end" style={{backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <div className="lg:pt-8 lg:px-6 lg:pb-2 bg-[#1d1d1d] lg:w-7/12">
                      <h2
                        className={`text-xl font-semibold mb-2 lg:text-[30px]`}
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <span className="text-[14px]">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <p className="text-sm lg:pt-4 lg:pb-4">
                        {getPlainExcerpt(post.excerpt.rendered, 30)}
                      </p>
                      <ButtonLaid width={145} link={`/blog/${post.slug}`} buttonText={'Learn More'} />
                    </div>
                  </div>
                ) : (
                 <div key={post.id} className="w-full bg-red-100 col-span-2 lg:min-h-124 justify-items-end content-end" style={{backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <div className="lg:pt-6 lg:px-6 lg:pb-2 bg-[#1d1d1d] lg:w-10/12 lg:min-h-44">
                      <div className="lg:ps-4 border-l-4 border-[#D92630]">
                        <h2
                          className={`font-semibold mb-2 lg:text-[18px] lg:leading-[24px]`}
                        >
                          {getPlainExcerpt(post.title.rendered, 9)}
                        </h2>
                        <span className="text-[14px]">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <Link href={`/blog/${post.slug}`} className="underline block pt-2">Learn More</Link>
                      </div>
                    </div>
                  </div>
                )}
              )
            }
          </main>

          {loading && posts.length > 0  && (
            <div className="flex flex-col items-center justify-center py-20 text-white">
              <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-red-600 rounded-full mb-4"></div>
              <p className="text-lg">Cargando posts...</p>
            </div>
          )}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <ButtonLaid
                link="#"
                width={190}
                buttonText={loading ? 'Cargando...' : 'Cargar más blogs'}
                onClick={loadMore}
                disabled={loading || !hasMore}
              />
            </div>
          )}
          </div>

          {/********************************** Side Bar ***************************************/}

          <div className="lg:w-4/12 text-white relative " >
            <div ref={targetRef} className="h-1" />
            <div className={`top-0 w-auto lg:min-w-[24.3rem] sidebar-blog ${isVisible ? "absolute fixed lg:max-w-[389.32px]": ""}`}>
              <div className="bg-[#D92630] lg:text-[25px] tofinowide p-4">
                <p className="text-center">STAY INFORMED</p>
              </div>

              <div className="lg:px-8">
                <p className="text-center font-bold text-[16px] py-6">Subscribe to our blog</p>
                <form>

                </form>

              </div>
              <div className="px-8 py-6">
                <div className="border-2 border-white w-full"></div>
              </div>

              <div className="lg:px-12">
                <p className="text-[20px] font-bold pb-2">Categories</p>
                <ul className="">
                  {categories.map((cat) => (
                    <li
                    onClick={() => changeCategory(cat.id)}
                  className={`flex gap-2 pb-2 cursor-pointer ${activeCategory === cat.id ? 'font-bold underline' : ''}`} 
                  key={cat.id}>
                    <img src="/images/redRectangle.svg" alt="Red Rectangle" />
                    {cat.name}
                  </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 py-6">
                <div className="border-2 border-white w-full"></div>
              </div>

              <div className="lg:px-12">
                <p className="text-[20px] font-bold pb-2">The most recent</p>

                  {lastTreePosts.map((post) => (
                    <div key={post.id} className="mb-2">
                      <a href={`/blog/${post.slug}`}>
                        <p
                          className={`mb-0 lg:text-[16px]`}
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <span className="text-[14px] font-bold">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>                      
                      </a>
                    </div>
                  ))}
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Blog;
