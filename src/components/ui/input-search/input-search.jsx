import style from './input-search.module.css';

function InputSearch({ id, placeholder, value, onChange, backgroundColor, width }) {
  return (
    <label className={style.labelSearch}
      style={{ maxWidth: width }}
    >
      <input className={style.inputSearch}
        value={value}
        onChange={onChange}
        style={{ backgroundColor: backgroundColor }}
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </label >
  )
}

export default InputSearch;
