import { Footer } from './Footer';
import { Head } from './Head';
import styles from '../page.module.css';
import { MainLayoutProps } from './types';
import { FC } from 'react';

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Head />
        {children}
      </main>
      <Footer />
    </div>
  );
};
