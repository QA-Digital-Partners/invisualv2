// app/blog/[slug]/page.jsx
import ButtonLaid from '@/app/components/button';
import { decode } from 'html-entities';

export const dynamic = 'force-dynamic';

async function getPost(slug) {
  const res = await fetch(`https://qadigitalads.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

const getPlainTitle = (html) => {
  const stripped = html.replace(/<[^>]+>/g, '');
  return decode(stripped);
};

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div className="p-10 text-red-600">Post not found</div>;
  }

  const title = getPlainTitle(post.title.rendered);
  const words = title.trim().split(/\s+/);
  const firstPart = words.slice(0, 4).join(' ');
  const secondPart = words.slice(4).join(' ');

  return (
    <article className="container max-w-[1200px] mx-auto py-10">
      <h1 className="lg:text-[60px] lg:leading-[65px] font-black italic z-20 relative uppercase"><span className="lg:text-[60px] text-stroke block">{firstPart}</span> {secondPart}</h1>
      <div className="w-full lg:min-h-[516px] justify-items-end content-end my-16" style={{backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
      <div className='flex'>
        <div className='w-2/12'>
        <p className='font-bold text-[20px] lg:pb-4'>Follow Us</p>
        <div className='pb-6'>
          <ButtonLaid width={160} buttonText={'IN VISUAL SIGNS'} />
        </div>
        <div>
          <ButtonLaid width={160} buttonText={'@invisualsigns'} />
        </div>
        </div>

        <div className='w-10/12'>
          <div
            className="text-white postInnerText"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />        
        </div>
      </div>
    </article>
  );
}
