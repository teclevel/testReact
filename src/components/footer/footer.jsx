import style from './footer.module.css';

function Footer({center}) {
  return (
    <footer className={center}>
      <ul className={style.listFooter}>
        <li className={style.houseLogo}>
          <img src="./images/icon/house.png" width="148" height="66" alt="логотип" />
          <p>Государственный Российский Дом народного творчества имени В.Д. Поленова</p>
        </li>
        <li className={style.contacts}>
          <p>Контакты</p>
          <p className={style.address}>Москва, Сверчков пер., 8, стр. 3.</p>
          <p><a href="tel: +7 495 628-40-87">Тел.: +7 495 628-40-87</a></p>
        </li>
        <li  className={style.logoCommittee}>
          <img src="./images/icon/logo-сommittee.png" alt="логотип" />
        </li>
      </ul>
    </footer>
  )
}

export default Footer;