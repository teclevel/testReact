import { useState } from "react";
import { cards } from "../../../mocks/cards";
import CardsList from "../../cards-list/cards-list";
import FormSearch from "../../form-search/form-search";
import Pagination from "../../pagination/pagination";
import InputSearch from "../../ui/input-search/input-search";
import style from "./main-page.module.css"


function MainPage() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState(cards)

  const handleSearch = (evt) => {
    evt.preventDefault();

    setFilteredCards(cards
      .filter((card) => card.location.includes(selectedFilter))
      .filter((card) => card.title.toLowerCase().includes(searchQuery)))
  }

  const count = filteredCards.length;

  return (
    <>
      <section className={style.headPage}>
        <h1 className={style.headTitle}>
          Реестр объектов нематериального культурного наследия народов россии
        </h1>
        <InputSearch
          id={'search-all'}
          placeholder={'Поиск'}
          width={'400px'}
        />
      </section>
      <section className={style.sectionFormSearch}>
        <div className={style.titleSearch}>
          <h2>Расширенный поиск</h2>
          <InputSearch
            value={searchQuery}
            onChange={(evt) => setSearchQuery(evt.target.value)}
            id={'search-context'}
            placeholder={'Контекстный поиск'}
            backgroundColor={'#F5F6F7'}
            width={'221px'}
          />
        </div>
        <FormSearch
          value={selectedFilter}
          onChange={(evt) => setSelectedFilter(evt.target.value)}
          onSubmit={handleSearch}
        />
      </section>
      <section>
        <h2 className="visually-hidden">Список карточек</h2>
        {
          count ?
            <p className={style.countCards}>Всего объектов: {count}</p>
            :
            <p className={style.countCards}>По вашему запросу ничего не найдено</p>
        }
        <CardsList cards={filteredCards} />
      </section>
      <Pagination />
    </>
  )
}

export default MainPage;