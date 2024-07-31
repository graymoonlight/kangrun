'use client';
import styles from '../../styles/contacts.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Contacts() {
  const [activeButton, setActiveButton] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    project: '',
    email: '',
    message: ''
  });

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке сообщения');
      }

      setIsModalOpen(true);
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles['contacts-container']}>
      <div className={styles['contact-image-container']}>
        <Image 
          src="/contactwithus.png" 
          alt="contact with us" 
          layout="responsive" 
          width={1000} 
          height={500} 
          className={styles['contact-image']}
        />
      </div>
      <div className={styles['form-container']}>
        <div className={styles['form-header']}>
          {['Заполнение информации', 'Подтверждение'].map((text, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <button
                className={`${styles['form-button']} ${activeButton === index ? styles['active'] : ''}`}
                onClick={() => handleButtonClick(index)}
              >
              </button>
              <span>{text}</span>
            </div>
          ))}
        </div>
        {activeButton === 0 ? (
          <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="name">Имя</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Введите ваше имя, пожалуйста" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="company">Название компании</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                placeholder="Введите название вашей компании"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="project">Совместный проект</label>
              <input 
                type="text" 
                id="project" 
                name="project" 
                placeholder="Пожалуйста, введите проект, который вы хотите"
                value={formData.project}
                onChange={handleChange}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="email">Почтовый ящик</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Введите почтовый адрес" 
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="message">Сообщение</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                placeholder="Введите сообщение" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        ) : (
          <div className={styles['confirmation-container']}>
            <h2 className={styles['submit-title']}>Подтверждение</h2>
            <p className={styles['submit-description']}>Пожалуйста, проверьте введенные данные и подтвердите отправку.</p>
            <button type="button" className={styles['submit-btn']} onClick={handleSubmit}>
              Подтвердить
            </button>
          </div>
        )}
        {isModalOpen && (
          <div className={styles['modal']}>
            <div className={styles['modal-content']}>
              <div className={styles['modal-header']}>
                <h2>Успех</h2>
                <span className={styles['close']} onClick={closeModal}>&times;</span>
              </div>
              <p>Сообщение отправлено!</p>
              <div className={styles['modal-button-container']}>
                <button className={styles['submit-btn']} onClick={closeModal}>
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={styles['info-cards']}>
          <div className={styles['card']}>
            <h3>Доступ к офису</h3>
            <p>Room 1006, No. 25, Lane 66,<br/> Xinyuan Road, Anting Town, Jiad-<br/>ing District, Shanghai</p>
          </div>
          <div className={styles['card']}>
            <h3>Контактная информация</h3>
            <p>Natallia Chen <br/> (86)15844391881 </p>
          </div>
          <div className={styles['card']}>
            <h3>Электронное письмо</h3>
            <p>ybkrgs@126.com</p>
          </div>
        </div>
        <div className={styles['map-container']}>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=121.14207458496094%2C31.272376533783724%2C121.17608935546875%2C31.3095004557543&layer=mapnik&marker=31.292683186970796%2C121.15458211663306"
            style={{ border: 0, width: '100%', height: '500px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}