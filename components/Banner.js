import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Banner = () => (
  <div className={styles.banner}>
    <div className={styles.bannerLogo}>
        <Image src="/sop-logo.png" alt="Logo" width={150} height={150} />
    </div>
    <h1 className={styles.bannerText}>Impact Report</h1>
  </div>
);

export default Banner;