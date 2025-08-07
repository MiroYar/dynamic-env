'use client';

import Link from 'next/link';
import { EnvsList } from '../_components';
import styles from '../page.module.css';

export default function Home() {
  return (
    <>
      <h3>Client Page Variables:</h3>
      <EnvsList />
      <ul className={styles.ctas}>
        <li>
          <Link href="/server-page">Server Page</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </>
  );
}
