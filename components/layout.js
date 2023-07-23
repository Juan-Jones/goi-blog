// components/Layout.js

import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from './layout.module.css'; // Import the CSS styles

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {/* Add more navigation links as needed */}
      </nav>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/earn-money.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/earn-money-online.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="Learn how to make money online"
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <aside className={styles.rightColumn}>
        {/* Add your search bar component here */}
        {/* <input type="text" placeholder="Search..." /> */}
      </aside>
      <footer className={styles.footer}>
        <div className={styles.socialLinks}>
          {/* Add social media links with the socialLink class */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Pinterest</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
};
