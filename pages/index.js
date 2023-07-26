import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date'
import { getSortedPostsData, getAllCategories } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const categories = getAllCategories();

  return {
    props: {
      allPostsData,
      categories,
    },
  };
}

export default function Home({ allPostsData, categories }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, featuredImage }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {/* Add the featured image before the blog post title */}
                <div>
                  <img src={featuredImage} alt={title} className={utilStyles.featuredImage} />
                </div>
                <div>
                  <span>{title}</span>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* ... */}
      <section>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/categories/${category}`}>
                <a>{category}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}