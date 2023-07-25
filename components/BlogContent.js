// components/BlogContent.js

import Date from './Date'; // Assuming you have a Date component for formatting dates
import styles from './BlogContent.module.css'; // Add your blog content CSS styles

const BlogContent = ({ postData }) => {
  return (
    <article className={styles.blogArticle}>
      <img
        src={postData.image}
        alt={postData.title}
        className={styles.blogImage}
      />
      <h1 className={styles.blogTitle}>{postData.title}</h1>
      <div className={styles.blogDate}>
        <Date dateString={postData.date} />
      </div>
      <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
};

export default BlogContent;
