import Link from 'next/link';
import '../styles/404.css';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="error-container">
      <Image src="/404/ERROR.png" width={1000} height={1000} className='error-image' priority />
      <div className="error-content">
        <h1 className="error-title">Простите, вы потеряли страницу,<br/> которую посещали</h1>
        <p className="error-description">
          Вы можете продолжить доступ следующим <br/>образом...
        </p>
        <Link href="/" className="home-link">Возвращайся на главную</Link>
      </div>
    </div>
  );
}