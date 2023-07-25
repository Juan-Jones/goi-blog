// components/Footer.js

import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {/* Add your social media icons/links here */}
        <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</Link>
        <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</Link>
        <Link href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">Pinterest</Link>
      </div>
      <p className={styles.copyRight}>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
