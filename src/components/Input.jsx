function Input({ handleChange, value, title, color, name }) {
  return (
    <label className="sidebar-label-container">
      <input onClick={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}

export default Input;
