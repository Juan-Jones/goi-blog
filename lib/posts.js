// lib/posts.js

import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Replace the file reading operation with server-side data fetching or API calls
  const allPostsData = [
    // Your data from server-side operations
  ];

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  // Replace the file reading operation with server-side data fetching or API calls
  const fileNames = [
    // Your data from server-side operations
  ];

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  // Replace the file reading operation with server-side data fetching or API calls
  const postData = {
    // Your data from server-side operations
  };

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(postData);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllCategories() {
  const allPostsData = getSortedPostsData();
  const categories = Array.from(new Set(allPostsData.map((post) => post.category)));

  // Filter out any undefined values from the categories array
  const validCategories = categories.filter((category) => category !== undefined);

  return validCategories;
}
