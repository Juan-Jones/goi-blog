// pages/posts/[id].js
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts'; // Import getAllPostIds function
import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';

export async function getStaticPaths() {
  // Fetch all post IDs using your function, for example:
  const allPostsData = getAllPostIds(); // Update with your function to get all post IDs
  const paths = allPostsData.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch post data for the specific post ID
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* Add the image here */}
        <div className={utilStyles.featuredImage}>
          <Image
            src={postData.featuredImage} // Replace with the actual image path
            alt={postData.title} // Replace with an appropriate image description
            width={800} // Replace with the actual image width
            height={500} // Replace with the actual image height
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

