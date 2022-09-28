import Select from "../ui/select/select";
import { cards } from "../../mocks/cards";
import style from "./form-search.module.css"


function getListLocation(arr) {
  const newArr = arr.map((el) => el.location);
  const set = new Set(newArr);

  return Array.from(set);
}


function FormSearch({value, onChange, onSubmit}) {
  const locations = getListLocation(cards);

  return (
    <form className={style.formSearch}
    onSubmit={onSubmit}>
      <figcaption className={style.blockSelect}>
        <Select
          defaultValue={'Все этносы'}
          options={['']}
        />
        <Select
          defaultValue={'Все категории'}
          options={['']}
        />
        <Select
          value={value}
          onChange={onChange}
          defaultValue={'Все регионы'}
          options={locations}
        />
        <Select
          defaultValue={'Все языки'}
          options={['']}
        />
        <Select
          defaultValue={'Все теги'}
          options={['']}
        />
        <Select
          defaultValue={'Все авторы'}
          options={['']}
        />
      </figcaption>
      <input type="submit" value="Поиск"></input>
    </form>
  )
}

export default FormSearch;  