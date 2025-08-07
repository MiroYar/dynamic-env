import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <ul className={styles.ctas}>
      <li>
        <Link href="/server-page">Server Page</Link>
      </li>
      <li>
        <Link href="/client-page">Client Page</Link>
      </li>
    </ul>
  );
}
