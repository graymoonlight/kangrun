'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/news.module.css';
import { useState } from 'react';

const newsData = [
    {
        id: 1,
        title: "Ген. директор Kangrun Group на форуме РОСТКИ в Казани: мы планируем углубить отношения с КАМАЗом",
        date: "12:30, 07.09.2023",
        description: (
          <>
            Раис Татарстана Рустам Минниханов встретился с генеральным директором Kangrun Group Ван Гуймином и вице-президентом компании Hynovation У Гопином на полях первого российско-китайского форума РОСТКИ, сообщает пресс-служба раиса республики.
          </>
        ),
        image: "/news/newsImages/news1.png",
        content: "Полное содержание новости 1."
    },
];

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;

  const totalPages = Math.ceil(newsData.length / newsPerPage);

  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = newsData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
          setCurrentPage(pageNumber);
      }
  };

  return (
      <div className={styles['news-container']}>
          <div className={styles['news-image']}>
              <Image 
                  src="/news/newscenter.png" 
                  alt="News Center" 
                  layout="responsive" 
                  width={1000} 
                  height={500} 
                  className={styles['contact-image']}
              />
          </div>
          <div className={styles['news-content']}>
              {currentNews.map(item => (
                  <div key={item.id} className={styles['news-item']}>
                      <div className={styles['news-image-container']}>
                          <Image 
                              src={item.image} 
                              alt={item.title} 
                              width={500} 
                              height={250} 
                              layout="responsive" 
                              className={styles['news-item-image']}
                          />
                      </div>
                      <div className={styles['news-text-container']}>
                          <h2 className={styles['news-title']}>{item.title}</h2>
                          <p className={styles['news-date']}>{item.date}</p>
                          <p className={styles['news-description']}>{item.description}</p>
                          <Link href={`/news/${item.id}`} legacyBehavior>
                              <a className={styles['news-link']}>Читать далее</a>
                          </Link>
                      </div>
                  </div>
              ))}
          </div>

          <div className={styles['page-container']}>
              <p onClick={() => handlePageChange(1)}>начальная страница</p>
              <p onClick={() => handlePageChange(currentPage - 1)}>предыдущая</p>
              {Array.from({ length: totalPages }, (_, i) => (
                  <p 
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={currentPage === i + 1 ? styles['active-page'] : ''}
                  >
                      {i + 1}
                  </p>
              ))}
              <p onClick={() => handlePageChange(currentPage + 1)}>следующая</p>
              <p onClick={() => handlePageChange(totalPages)}>последняя страница</p>
          </div>
      </div>
  );
}