import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/sliderArrow.module.css';

export function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`${styles.prevArrow}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <Image src="/prevArrow.png" alt="Previous" width={60} height={60} />
    </div>
  );
}

export function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`${styles.nextArrow}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <Image src="/nextArrow.png" alt="Next" width={60} height={60} />
    </div>
  );
}