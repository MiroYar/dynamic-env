import Image from 'next/image';
import styles from '../page.module.css';

export const Head = () => {
  return (
    <>
      <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
      <h2>Dynamic Environments.</h2>
    </>
  );
};
