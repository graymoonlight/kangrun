import styles from '../styles/home.module.css';
import CSlider from '../components/slider';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <CSlider/>
        <div className={styles['about-company']}>
          <div className={styles['company-name']}>
            <Image
              src="/kangrun.png"
              alt="Company Name"
              layout="responsive"
              width={1000}
              height={300}
              className={styles['company-image']}
            />
          </div>
          <div className={styles['company-container']}>
            <Image src="/shanghai.png" width={350} height={400}/>
            <div className='company-container-text'>
              <div className={styles['company-container-border']}>
                <div className={styles['border-one']}/>
                <div className={styles['border-two']}/>
              </div>
              <div className={styles['company-container-title']}>
                <Image src="/home.png" width={50} height={50}/>
                <p>Представление <br /> компании</p>
              </div>
              <div className={styles['company-border']}/>
              <div className={styles['company-description']}>
                <p>С 1988 года компания поставляет на рынок России, стран СНГ качествен-<br/>ные оригинальные детали и оборудование. Являясь надёжным партнером,<br/> компания предоставляет полный набор решений: поиск и переговоры с на-<br/>дежными производителями, организация консультаций с узконаправлен-<br/>ными специалистами, помощь в проектировании, настройке и отработке<br/> технологических процессов. Мы рассматриваем и организуем как оптовые<br/> поставки запасных частей и оборудования.</p>
              </div>
              <Link href='/about' className={styles['company_btn']}>больше</Link>
            </div>
          </div>
          <div className={styles['engine-container']}>
            <div className={styles['engine-title']}>
              <h3>Блок двигателя</h3>
              <Image
              src="/companies.png"
              alt="Companies"
              width={1000}
              height={1000}
              className={styles['engine-image']}
              />
            </div>
            <Image
            src="/ISDE-6.7.png"
            width={1000}
            height={1000}
            className={styles['engine-title-image']}
            />
            <Link href='/products' className={styles['engine_btn']}>больше</Link>
          </div>
          <div className={styles['cilinder-container']}>
            <div className={styles['cilinder-title']}>
              <Image
              src="/engine.png"
              width={100}
              height={100}
              className={styles['cilinder-image']}
              />
              <h1>Головка блока цилиндров <br/>и блок цилиндров</h1>
            </div>
            <div className={styles['cilinder-description']}>
              <p>Наша компания имеет собственную торговую марку на блоки цилиндров и головки<br/> блока цилиндров, а также может разрабатывать и производить в соответствии с тех-<br/>ническими требованиями заказчиков.</p>
            </div>
            <div className={styles['cilinder-cards']}>
              <div className={styles['cilinder-card']}>
                <Image
                src="/card1.png"
                width={1000}
                height={1000}
                className={styles['card-image']}
                />
              </div>
              <div className={styles['cilinder-card']}>
                <Image
                  src="/card2.png"
                  width={1000}
                  height={1000}
                  className={styles['card-image']}
                />
              </div>
              <div className={styles['cilinder-card']}>
                <Image
                  src="/card3.png"
                  width={1000}
                  height={1000}
                  className={styles['card-image']}
                />
              </div>
              <div className={styles['cilinder-card']}>
                <Image
                  src="/card4.png"
                  width={1000}
                  height={1000}
                  className={styles['card-image']}
                />
              </div>
              <div className={styles['cilinder-card']}>
                <Image
                  src="/card5.png"
                  width={1000}
                  height={1000}
                  className={styles['card-image']}
                />
              </div>
              <div className={styles['cilinder-card']}>
                <Image
                  src="/card6.png"
                  width={1000}
                  height={1000}
                  className={styles['card-image']}
                />
              </div>
            </div>
            <Link href='/products' className={styles['cilinder_btn']}>больше</Link>
          </div>
        </div>
      </main>
    </div>
  );
}