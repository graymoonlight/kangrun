import styles from '../../styles/news.module.css';
import Link from 'next/link';

export default function News() {
    return (
      <div className={styles['news-container']}>
        <div className={styles['news-content']}>
          <h1 className={styles['news-title']}>Страница новостей</h1>
          <p className={styles['news-description']}>
            В будущем, на этой странице, появятся новости компании.
            Вернитесь на <Link href="/" className={styles['home-link']}>главную страницу</Link>.
          </p>
        </div>
      </div>
    );
}