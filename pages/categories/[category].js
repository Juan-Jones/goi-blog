// pages/categories/[category].js
import Layout from '../../components/layout';
import { getPostsByCategory } from '../../lib/posts';
import Link from 'next/link';

export async function getStaticPaths() {
  const categories = getAllCategories();
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const posts = getPostsByCategory(category);

  return {
    props: {
      category,
      posts,
    },
  };
}

export default function CategoryPage({ category, posts }) {
  return (
    <Layout>
      <h1>Category: {category}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
