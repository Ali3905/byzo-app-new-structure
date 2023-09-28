
const Dropdown = ({ options, onSelect }) => {
  return (
    <>
     <select onChange={(e) => onSelect(e.target.value)}>
      {options.map((option,i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </>
   
  );
};

export default Dropdown;