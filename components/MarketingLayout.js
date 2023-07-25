// components/MarketingLayout.js

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from './MarketingLayout.module.css';

const MarketingLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Marketing Website</title>
        {/* Add meta tags, favicon, etc. */}
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
