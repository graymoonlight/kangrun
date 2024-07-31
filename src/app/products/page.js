'use client'
import { useState } from 'react';
import C2Slider from '../../components/slider2';
import styles from '../../styles/products.module.css';
import Image from 'next/image';

const productsData = [
  {
    id: 1,
    image: '/product_cards/product_card1.png',
    partNumber: '5274410/4955475',
    name: 'Блок цилиндров',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 2,
    image: '/product_cards/product_card2.png',
    partNumber: '5363645/4941496',
    name: 'Головка блока цилиндров',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 3,
    image: '/product_cards/product_card3.png',
    partNumber: '5301009/4934862',
    name: 'Колетчатый вал',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 4,
    image: '/product_cards/product_card4.png',
    partNumber: '3780095',
    name: 'Турбокомпрессор',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 5,
    image: '/product_cards/product_card5.png',
    partNumber: '4955521',
    name: 'Подшипник коренной',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 6,
    image: '/product_cards/product_card6.png',
    partNumber: '3904167/4919951',
    name: 'Гильза цилиндра',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 7,
    image: '/product_cards/product_card7.png',
    partNumber: '5255257/4939181',
    name: 'Поршень',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 8,
    image: '/product_cards/product_card8.png',
    partNumber: '5482362/4955169/4955251',
    name: 'Поршневое кольцо',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 9,
    image: '/product_cards/product_card9.png',
    partNumber: '5302096/4955412',
    name: 'Блок цилиндров',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 10,
    image: '/product_cards/product_card10.png',
    partNumber: '5361593/4936081',
    name: 'Головка блока цилиндров',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 11,
    image: '/product_cards/product_card11.png',
    partNumber: '5264248/4988595',
    name: 'Насос топливный',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 12,
    image: '/product_cards/product_card12.png',
    partNumber: '4937065/0445120123',
    name: 'Топливная форсунка',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 13,
    image: '/product_cards/product_card13.png',
    partNumber: '3977530/0445226042',
    name: 'Рампа топливная',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 14,
    image: '/product_cards/product_card14.png',
    partNumber: '5348867/5316787/5316786',
    name: 'Электронный блок управления',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 15,
    image: '/product_cards/product_card15.png',
    partNumber: '5291050/4939588',
    name: 'Насос мвсляный',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 16,
    image: '/product_cards/product_card16.png',
    partNumber: '4891252',
    name: 'Насос водяной',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 17,
    image: '/product_cards/product_card17.png',
    partNumber: '3975818',
    name: 'Сердцевина охладителя',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 18,
    image: '/product_cards/product_card18.png',
    partNumber: '5256026',
    name: 'Стартер',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 19,
    image: '/product_cards/product_card19.png',
    partNumber: '3976831',
    name: 'Натяжитель ремня',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 20,
    image: '/product_cards/product_card20.png',
    partNumber: '5284362',
    name: 'Сердцевина охладителя',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 21,
    image: '/product_cards/product_card21.png',
    partNumber: '3415538',
    name: 'Стартер',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 22,
    image: '/product_cards/product_card22.png',
    partNumber: '4941464',
    name: 'Насос масляный',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 23,
    image: '/product_cards/product_card23.png',
    partNumber: '3943978',
    name: 'Шкив вала коленчатого',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 24,
    image: '/product_cards/product_card24.png',
    partNumber: '4987915',
    name: 'Хорсунка поршня',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 25,
    image: '/product_cards/product_card25.png',
    partNumber: '5254292',
    name: 'Компрессор воздушный',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 26,
    image: '/product_cards/product_card26.png',
    partNumber: '4931169',
    name: 'Датчик давления',
    brand: 'Камминз',
    category: 'Мотор',
  },
  {
    id: 27,
    image: '/product_cards/product_card27.png',
    partNumber: '3945917',
    name: 'Компонент вкладыша шпинделя',
    brand: 'Камминз',
    category: 'Мотор',
  },
];

const akpImages = [
  '/akp/akp1.png',
  '/akp/akp2.png',
];

const vodorodImages = [
  '/kw/50kw.png',
  '/kw/60kw.png',
  '/kw/80kw.png',
  '/kw/130kw.png',
];

const ITEMS_PER_PAGE = 9;

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState('Мотор');
  const [currentPage, setCurrentPage] = useState(1);
  const [akpCurrentPage, setAkpCurrentPage] = useState(1);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredProducts = productsData.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.partNumber.toLowerCase().includes(query)
    );

    setProducts(filteredProducts);
    setCurrentPage(1); 
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
    if (category === 'АКП') {
      setCurrentPage(1);
    } else if (category === 'Водород') {
      setCurrentPage(1); // Для водорода мы не используем пагинацию
    } else {
      setProducts(productsData.filter(product => product.category === category));
      setCurrentPage(1);
    }
  };

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const akpTotalPages = akpImages.length;

  const displayedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const displayedAkpImage = akpImages[akpCurrentPage - 1];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAkpPageChange = (page) => {
    if (page >= 1 && page <= akpTotalPages) {
      setAkpCurrentPage(page);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <C2Slider />
        <div className={styles['search-container']}>
          <div className={styles['sub-search-container']}>
            <input
              type="text"
              placeholder="Поиск ключевых слов..."
              className={styles['search-input']}
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className={styles['search-button']}>
              <img src="/search-icon.png" alt="Search" />
            </button>
          </div>
        </div>
        <div className={styles['category-container']}>
          <div className={styles['maincategory-container']}>
            <h3 
              className={`${styles['engine-title']} ${activeCategory === 'Мотор' ? styles['active-category'] : ''}`}
              onClick={() => handleCategoryChange('Мотор')}
            >
              Мотор
            </h3>
            <h3 
              className={`${styles['akp-title']} ${activeCategory === 'АКП' ? styles['active-category'] : ''}`}
              onClick={() => handleCategoryChange('АКП')}
            >
              Автоматическая Коробка Передачи (АКП)
            </h3>
            <h3 
              className={`${styles['vodorod-title']} ${activeCategory === 'Водород' ? styles['active-category'] : ''}`}
              onClick={() => handleCategoryChange('Водород')}
            >
              Водородный топливный элемент
            </h3>
          </div>
          {activeCategory === 'Мотор' && (
            <div className={styles['subcategory-container']}>
              <h4 className={styles['isde-title']}>
                ISDE-4.5/6.7 Engine Parts
              </h4>
              <h4 className={styles['isle-title']}>
                6L8.9/ISLE9.3 Engine Parts
              </h4>
            </div>
          )}
        </div>
        {activeCategory === 'АКП' ? (
          <div className={styles['akp-card-container']}>
            <Image 
              src={displayedAkpImage} 
              alt={`АКП изображение ${akpCurrentPage}`}
              layout="responsive" 
              width={500} 
              height={250} 
              className={styles['akp-image']}
            />
            <div className={styles['page-container']}>
              <p onClick={() => handleAkpPageChange(1)}>начальная страница</p>
              <p onClick={() => handleAkpPageChange(akpCurrentPage - 1)}>предыдущая</p>
              {Array.from({ length: akpTotalPages }, (_, i) => (
                <p 
                  key={i + 1}
                  onClick={() => handleAkpPageChange(i + 1)}
                  className={akpCurrentPage === i + 1 ? styles['active-page'] : ''}
                >
                  {i + 1}
                </p>
              ))}
              <p onClick={() => handleAkpPageChange(akpCurrentPage + 1)}>следующая</p>
              <p onClick={() => handleAkpPageChange(akpTotalPages)}>последняя страница</p>
            </div>
          </div>
        ) : activeCategory === 'Водород' ? (
          <div className={styles['vodorod-card-container']}>
            {vodorodImages.map((src, index) => (
              <Image 
                key={index}
                src={src} 
                alt={`Водород изображение ${index + 1}`}
                layout="responsive" 
                width={500} 
                height={250} 
                className={styles['vodorod-image']}
              />
            ))}
          </div>
        ) : (
          <div className={styles['products-card-container']}>
            {displayedProducts.map(product => (
              <div key={product.id} className={styles['card-container']}>
                <div className={styles['image-card-container']}>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    layout="responsive" 
                    width={500} 
                    height={250} 
                    className={styles['card-image']}
                  />
                </div>
                <div className={styles['table-card-container']}>
                  <table>
                    <thead>
                      <tr>
                        <th>Номер детали</th>
                        <td>{product.partNumber}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Название</th>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <th>Бренд</th>
                        <td>{product.brand}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
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
        )}
      </main>
    </div>
  );
}