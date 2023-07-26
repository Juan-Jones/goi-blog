/ pages/categories/[category].js

import { getPostsByCategory, getAllCategories } from '../../lib/posts'; // Update with your post data fetching methods
import Layout from '../../components/layout';
import Link from 'next/link';

export async function getStaticPaths() {
  const categories = getAllCategories(); // Update with your method to get all categories
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
  const posts = getPostsByCategory(category); // Update with your method to get posts by category

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
