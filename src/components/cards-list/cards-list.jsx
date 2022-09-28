import style from './cards-list.module.css';

function CardsList({cards}) {
  return (
    <ul className={style.cardsList}>
      {
        cards.map((card) =>
          <li key={card.id}>
            <figure className={style.card} >
              <img className={style.img} src={card.poster} width="356" height="211" alt="описание фото" />
              <figcaption className={style.figcaption}>{card.title}
                <p className={style.location}>{card.location}</p>
                <img className={style.checkBox} src="/images/icon/sprite.svg" width="160" height="24px" alt=""></img>
              </figcaption>
            </figure>
          </li>
        )
      }
    </ul>
  )
}

export default CardsList;