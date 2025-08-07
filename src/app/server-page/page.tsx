import Link from 'next/link';
import { EnvsList } from '../_components';
import styles from '../page.module.css';

export default function Home() {
  return (
    <>
      <h3>Server Page Variables:</h3>
      <EnvsList />
      <ul className={styles.ctas}>
        <li>
          <Link href="/client-page">Client Page</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </>
  );
}
