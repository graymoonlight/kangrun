import { newsData } from '../../../data/newsData';
import NewsBlock from '../../../components/newsBlock';
import styles from '../../../styles/newsid.module.css';
import Image from 'next/image';

export async function generateStaticParams() {
  return newsData.map(news => ({
    id: news.id
  }));
}

const NewsPage = ({ params }) => {
  const news = newsData.find(news => news.id === params.id);

  if (!news) {
    return <div>Новость не найдена</div>;
  }

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
        <div className={styles['news-subcontainer']}>
            <p className={styles['news-title']}>{news.title}</p>
            <p className={styles['news-date']}>{news.date}</p>

            {news.blocks.map((block, index) => (
                <NewsBlock
                key={index}
                imageSrc={block.imageSrc}
                author={block.author}
                description={block.description}
                />
            ))}
        </div>
    </div>
  );
};

export default NewsPage;