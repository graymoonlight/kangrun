import Image from 'next/image';
import '../styles/components/footer.css';

export default function Header() {
  return (
    <footer className='footer'>
        <div className='footer__logo-container'>
            <Image src='/logofoot.png' alt='Logo' width={250} height={120} className='footer__logo-container__image'/>
        </div>
        <div className='footer__info-container'>
            <div className='footer__info-container__name'>
                <Image src='/home.png' alt='Name' width={35} height={35} className='footer__info-container__name__image'/>
                <p className='footer__info-container__name__text'>YANBIAN KANGRUN ECONOMIC & TRADE CO LTD</p>
            </div>
            <div className='footer__info-container__number'>
                <Image src='/phone.png' alt='Phone' width={20} height={20} className='footer__info-container__number__image'/>
                <div className='footer__info-container__number__text'><p>Igor Lee  (86)13596503232</p><p>Pavel Chen (86)15997448816</p><p>Natallia Chen (86)15844391881</p></div>
            </div>
            <div className='footer__info-container__mail'>
                <Image src='/mail.png' alt='Mail' width={20} height={20} className='footer__info-container__mail__image'/>
                <p className='footer__info-container__mail__text'>ybkrgs@126.com</p>
            </div>
            <div className='footer__info-container__location'>
                <Image src='/location.png' alt='Location' width={20} height={20} className='footer__info-container__location__image'/>
                <p className='footer__info-container__location__text'>Wenhua Road, Jinghe Street, Hunchun City, Jilin Province <br/>
                Room 1006, No. 25, Lane 66, Xinyuan Road, Anting Town, Jiading District, Shanghai</p>
            </div>
        </div>
    </footer>
  );
}