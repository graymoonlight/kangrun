import Link from 'next/link';
import '../styles/404.css';

export default function Custom404() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404 - Страница не найдена</h1>
        <p className="error-description">
          К сожалению, запрашиваемая страница не существует.
          Вернитесь на <Link href="/" className="home-link">главную страницу</Link>.
        </p>
      </div>
    </div>
  );
}