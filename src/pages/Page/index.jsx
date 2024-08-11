import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './Page.module.css';

function Page () {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.pageMain}>
        <Outlet />
      </main>
      <footer className={styles.pageFooter}>Page Footer</footer>
    </div>
  );
}

export default Page;
