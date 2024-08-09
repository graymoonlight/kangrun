import styles from '../styles/components/newsBlock.module.css'

const NewsBlock = ({ imageSrc, author, description }) => {
    return (
      <div className={styles['news-block']}>
        <img src={imageSrc} alt="News Image" className={styles['news-image']} />
        <p className={styles['news-author']}>Фото предоставлено: {author}</p>
        <div className={styles['news-description']}>{description}</div>
      </div>
    );
};
  
export default NewsBlock;