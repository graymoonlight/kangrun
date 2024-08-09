'use client';
import { useState } from 'react';
import styles from '../../styles/about.module.css';
import Image from 'next/image';

export default function About() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = {
    profile: 'Профиль компании',
    services: 'Наше обслуживание',
    history: 'Наша история',
    capability: 'Способность хранить',
  };

  const content = {
    profile: {
      text: (
        <>
          <p> С 1988 года компания поставляет на рынок России, стран СНГ качественные оригинальные детали и обо-<br/>рудование. Являясь надёжным партнером, компания предоставляет полный набор решений: поиск и пере- <br/>говоры с надежными производителями, организация консультаций с узконаправленными специалистами, <br/> помощь в проектировании, настройке и отработке технологических процессов. Мы рассматриваем и орга- <br/> низуем как оптовые поставки запасных частей и оборудования, так и индивидуальные заказы.
            <br/>Мы развили крепкие связи и добились договоренности о сотрудничестве с холдингами DFCV, DCEC,<br/>Dongfeng Northwest Central Warehouse, FOTON, ASIMCO и другие. Что дает нам ряд таких неоспоримых <br/>преимуществ, как:
            <br/>- Поставка только оригинальное качество поставляемых деталей от завода производителей;
          </p>
          <Image 
          src="/profile1.png" 
          alt="Company Profile" 
          layout="responsive" 
          width={1000} 
          height={500} 
          className={styles['about-image']}
        />
        </>
      ),
      text2: (
        <>
          <p><b>CUMMINS</b><br/>
            - Детали для двигателей Cummins на все ряды моделей;<br/>
            <b>DONGFENG, FOTON AUMAN, SHANXI SHANCMAN, SINOTRUK </b><br/>
            - Все детали грузовых автомобилей этих марок;<br/>
            - Имеем доступ к конструкторской базе, оперативное решение технических вопросов;<br/>
            - Выгодные цены для вас на поставляемые оригинальные детали. Надёжное качество и стабильная поставка от заводов-изготовителей;<br/>
            - Налаженные связи со всеми таможнями КНР, поставка безопасна, беспрепятствена и без отклонений от сроков;<br/>
            Команда переводчиков (русский, китайский, корейский, японский, английский языки).</p>
        </>
      ),
    },
    services: {
      text: (
        <>
          <Image 
          src="/services.png" 
          alt="Company Profile" 
          layout="responsive" 
          width={1000} 
          height={500} 
          className={styles['about-image']}
        />
        </>
      ),
    },
    history: {
      text: 'История началась в 1986 году с сотрудничества с хасанским районом Приморского края СССР.',
      images: ['/history/history1.png', '/history/history2.png', '/history/history3.png'],
      text2: 'С друзьями из ТПП Приморского края.',
      images2: ['/history/history4.png'],
    },
    capability: {
      text: (
        <>
        <div className={styles['capability_container']}> 
          <Image 
            src="/house.png" 
            alt="Company Capability" 
            width={1000} 
            height={1000} 
            className={styles['capability-image']}
          />
          <h3>Способность хранить</h3>
        </div>
        </>
      ),
      text2: (
        <>
        <div className={styles['capability_container2']}>
        <Image 
            src="/capability1.png" 
            alt="Company Capability" 
            width={1000} 
            height={1000} 
            className={styles['about-image']}
            layout="responsive" 
          />
          <Image 
            src="/capability2.png" 
            alt="Company Capability" 
            width={1000} 
            height={1000} 
            className={styles['about-image']}
            layout="responsive" 
          />
          <Image 
            src="/capability3.png" 
            alt="Company Capability" 
            width={1000} 
            height={1000} 
            className={styles['about-image']}
            layout="responsive" 
          />
         </div>
        </>
      ),
    },
  };

  return (
    <div className={styles['about-container']}>
      <div className={styles['about-image-container']}>
        <Image 
          src="/companyprofile.png" 
          alt="Company Profile" 
          layout="responsive" 
          width={1000} 
          height={500} 
          className={styles['about-image']}
        />
      </div>
      <div className={styles['about-content-container']}>
        <div className={styles['tabs']}>
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              className={`${styles['tab-button']} ${activeTab === key ? styles['active'] : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {tabs[key]}
            </button>
          ))}
        </div>
        <div className={styles['tab-content']}>
          <p>{content[activeTab].text}</p>
          {content[activeTab].images && content[activeTab].images.map((image, index) => (
            <div key={index} className={styles['tab-image']}>
              <Image 
                src={image} 
                alt={`${tabs[activeTab]} image ${index + 1}`} 
                layout="responsive" 
                width={1000} 
                height={500}
              />
            </div>
          ))}
          <p>{content[activeTab].text2}</p>
          {content[activeTab].images && content[activeTab].images2.map((image, index) => (
            <div key={index} className={styles['tab-image']}>
              <Image 
                src={image} 
                alt={`${tabs[activeTab]} image ${index + 1}`} 
                layout="responsive" 
                width={1000} 
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}