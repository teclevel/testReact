import style from './select.module.css';

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className={style.selectWrapper}>
      <select className={style.select}
        value={value}
        onChange={onChange}
      >
        <option value={''}>{defaultValue}</option>
        {options.map(option =>
          <option key={option}>
            {option}
          </option>
        )}
      </select>
    </div>
  );
};

export default Select;