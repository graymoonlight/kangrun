import styles from '../../styles/order.module.css';
import Image from 'next/image';

export default function Order() {
    return (
      <div className={styles['contacts-container']}>
        <div className={styles['contact-image-container']}>
          <Image 
            src="/ordertop.png" 
            alt="order" 
            layout="responsive" 
            width={1000} 
            height={500} 
            className={styles['contact-image']}
          />
        </div>
        <div className={styles['order-container']}>
          <div className={styles['order-container__top']}>
            <Image 
              src="/cilinder.png" 
              alt="cilinder" 
              layout="responsive" 
              width={1000} 
              height={500} 
              className={styles['cilinder-image']}
            />
          </div>
          <div className={styles['order-card-container']}>
            <div className={styles['order-card']}>
              <Image 
                src="/order1.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['order-card-image']}
              />
              <div className={styles['order-card-title']}>
                <p>Цилиндры Z13</p>
              </div>
            </div>
            <div className={styles['order-card']}>
              <Image 
                src="/order2.png" 
                alt="cilinder"  
                width={200} 
                height={200} 
                className={styles['order-card-image']}
              />
              <div className={styles['order-card-title']}>
                <p>Цилиндры V8</p>
              </div>
            </div>
            <div className={styles['order-card']}>
              <Image 
                src="/order3.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['order-card-image']}
              />
              <div className={styles['order-card-title']}>
                <p>Блок цилиндров DDi47</p>
              </div>
            </div>
            <div className={styles['order-card']}>
              <Image 
                src="/order4.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['order-card-image']}
              />
              <div className={styles['order-card-title']}>
                <p>Блок EC8</p>
              </div>
            </div>
            <div className={styles['order-card']}>
              <Image 
                src="/order5.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['order-card-image']}
              />
              <div className={styles['order-card-title']}>
                <p>Крышка цилиндров Z13</p>
              </div>
            </div>
            <div className={styles['order-card']}>
              <Image 
                src="/order6.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['order-card-image']}
              />
              <div className={styles['order-card-title']}>
                <p>Головка цилиндра DDi75</p>
              </div>
            </div>
            <div className={styles['order-card']}>
              <Image 
                src="/order7.png" 
                alt="cilinder"  
                width={200} 
                height={200} 
                className={styles['order-card-image']}
              />
              <div className={styles['order-card-title']}>
                <p>Головка цилиндра DDi47</p>
              </div>
            </div>
            <div className={styles['order-card']}>
              <Image 
                src="/order8.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['order-card-image']}
              />
              <div className={styles['order-card-title']}>
                <p>Крышка нефритового цилиндра</p>
              </div>
            </div>
          </div>
          <div className={styles['order-container__middle']}>
            <div className={styles['order-container__middle-images']}>
              <Image 
                src="/middle1.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['component-image']}
              />
              <Image 
                src="/middle2.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['component-image']}
              />
              <Image 
                src="/middle3.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['component-image']}
              />
              <Image 
                src="/middle4.png" 
                alt="cilinder" 
                width={200} 
                height={200} 
                className={styles['component-image']}
              />
            </div>
            <div className={styles['order-container__middle-description']}>
              <p>Имеется возможность изготовить автомобильные компоненты по Вашим чертежам и техническому заданию.</p>
            </div>
          </div>
          <div className={styles['order-container__bottom']}>
            <Image 
                src="/bottomdetail.png" 
                alt="detail" 
                width={200} 
                height={200}
                layout="responsive"
                className={styles['component-image']}
              />
            <Image 
                src="/detail2.png" 
                alt="detail" 
                width={200} 
                height={200}
                layout="responsive"
                className={styles['component-image']}
              />
          </div>
        </div>
      </div>
    );
  }