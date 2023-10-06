import { FaArrowRightLong } from "react-icons/fa6";
const RightArrow = ({ onClick, bg_color, color, changeArrow }) => {
  const onclick = () => {
    onClick()
    changeArrow("right")
  }
  return (
    <div
      onClick={onclick}
      className="absolute right-0 md:right-[20px] xl:right-0 top-[-42px] xl:top-[-42px] cursor-pointer z-10"
    >
      <div className={` rounded-full p-[10px] drop-shadow-lg`}
      style={{
        "backgroundColor" : `${bg_color}`
      }}>
        <FaArrowRightLong className={`text-[${color}] text-sm md:text-xl`} />
      </div>
    </div>
  );
};

export default RightArrow;