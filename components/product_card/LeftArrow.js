import { FaArrowLeftLong } from "react-icons/fa6";
const LeftArrow = ({ onClick, bg_color, color, changeArrow }) => {
  const onclick = () => {
    onClick()
    changeArrow("left")
  }
  return (
    <div
    onClick={onclick}
      className="absolute right-[50px] md:right-[80px] xl:left-auto xl:right-[80px]  top-[-42px] xl:top-[-42px] cursor-pointer z-10"
    >
      <div className={` rounded-full p-[10px] drop-shadow-lg`}
      style={{
        "backgroundColor" : `${bg_color}`
      }}>
        <FaArrowLeftLong className={`text-${color} text-sm md:text-xl`} />
      </div>
    </div>
  );
};

export default LeftArrow;
