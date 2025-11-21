
"use client"
import React, { useEffect, useState } from "react";
import AnimatedLine from "../components/animatedLine";
import Image from 'next/image';

const Blog = (props) => {
  const [posts, setPosts] = useState([]);
  const [latestPostId, setLatestPostId] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async (pageNumber) => {
    let postToLoad = 11;
    if(pageNumber > 1) postToLoad = 10;

    setLoading(true);
    const res = await fetch(`https://qadigitalads.com/wp-json/wp/v2/posts?_embed=true&per_page=${postToLoad}&page=${pageNumber}`);
    const data = await res.json();

    if (data.length < 10) setHasMore(false);

    if (data.length > 0) {
      const newPosts = [...posts, ...data];
      setPosts(newPosts);

      const mostRecent = newPosts.reduce((a, b) => new Date(a.date) > new Date(b.date) ? a : b);
      setLatestPostId(mostRecent.id);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(1);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };

  const getPlainExcerpt = (html, wordLimit = 30) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const text = temp.textContent || temp.innerText || '';
    const words = text.trim().split(/\s+/).slice(0, wordLimit);
    return words.join(' ') + (words.length >= wordLimit ? '...' : '');
  };

  return (
    <>
      <section id="blog-banner" className="text-white">
        <div className="container mx-auto lg:px-34">
          <Image src='/images/invisual-car-wrap-blog-1.webp' alt='' width={1376} height={590} className="fade-in-left" />
          <h1 className="lg:text-[120px] lg:leading-[80px] font-black italic lg:pb-8 lg:ps-20">
            <span className="lg:text-[70px] text-stroke block">OUR</span> BLOG
          </h1>
          <Image src='/images/invisual-car-wrap-blog-2.webp' alt='' width={623} height={444} className="fade-in-right" />
        </div>
      </section>

      <div className="container mx-auto lg:max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-screen mt-10">

        <div className="lg:col-span-8">
          <main className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post) => {
              const isLatest = post.id === latestPostId;
              return (
                <div key={post.id} className={`w-full ${isLatest ? 'col-span-4' : 'col-span-2'} bg-red-100 lg:min-h-124`} style={{backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                  <div className="lg:pt-6 lg:px-6 lg:pb-2 bg-[#1d1d1d]">
                    <h2 className={`font-semibold mb-2 ${isLatest ? 'lg:text-[30px]' : 'lg:text-[18px] lg:leading-[24px]'}`}> 
                      {getPlainExcerpt(post.title.rendered, isLatest ? 20 : 9)}
                    </h2>
                    <span className="text-[14px]">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <p className="text-sm lg:pt-4">
                      {getPlainExcerpt(post.excerpt.rendered, 30)}
                    </p>
                    <a href={`/blog/${post.slug}`} className="underline block pt-2">Learn More</a>
                  </div>
                </div>
              );
            })}
          </main>

          {hasMore && (
            <div className="flex justify-center mt-8">
              <button onClick={loadMore} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" disabled={loading}>
                {loading ? 'Cargando...' : 'Cargar más blogs'}
              </button>
            </div>
          )}
        </div>

        <aside className="lg:col-span-4 relative">
          <div className=" fixed top-4 bg-[#D92630] lg:text-[25px] tofinowide p-4">
            <p className="text-center">STAY INFORMED</p>
          </div>
        </aside>

      </div>
    </>
  );
};

export default Blog;
