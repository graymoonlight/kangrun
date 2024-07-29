'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/components/header.css';
import Call from '../../public/call.svg';

export default function Header() {
  const pathname = usePathname(); 

  return (
    <header className='header'>
      <div className='header__upper'>
        <Image src='/logo.png' alt='Logo' width={80} height={50} className='header__upper__image'/>
        <div className='header__upper__call-container'>
          <Call/>
          <div className='header__upper__text-container'>
            <p className='header__upper__text-container_text'>Позвони</p>
            <p className='header__upper__text-container_number'>(86)13596503232</p>
          </div>
        </div>
      </div>
      <div className='header__lower'>
        <Link href='/' className={pathname === '/' ? 'active' : ''}>Главная</Link>
        <Link href='/about' className={pathname === '/about' ? 'active' : ''}>Профиль компании</Link>
        <Link href='/products' className={pathname === '/products' ? 'active' : ''}>Центр продукции</Link>
        <Link href='/order' className={pathname === '/order' ? 'active' : ''}>Заказ продукции</Link>
        <Link href='/contacts' className={pathname === '/contacts' ? 'active' : ''}>Свяжись с нами</Link>
        <Link href='/news' className={pathname === '/news' ? 'active' : ''}>Центр новостей</Link>
      </div>
    </header>
  );
}