import style from './pagination.module.css';

function Pagination() {
  const pages = [1, 2, 3, 4, 5];
  const currentPage = 1;
  return (
    <section className={style.pagination}>
      <button className={style.prev} type="button" aria-label="previous slides">
        <svg viewBox="0 0 7 11" width="7" height="11" >
          <use xlinkHref="#arrow-left"></use>
        </svg>
      </button>
      <ul className={style.listPagination}>
        {
          pages.map((page) =>
            <li key={page}>
              <button className={
                page === currentPage
                  ?
                  [style.buttonNumber, style.buttonNumberCurrent].join(' ')
                  :
                  style.buttonNumber
              }
                type="button">{page}</button>
            </li>
          )
        }
      </ul>
      <button className={style.next} type="button" aria-label="next slides">
      <svg viewBox="0 0 7 11" width="7" height="11" >
          <use xlinkHref="#arrow-right"></use>
        </svg>
      </button>
    </section>
  )
}

export default Pagination;