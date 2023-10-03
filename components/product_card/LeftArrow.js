
import { FaArrowLeftLong } from "react-icons/fa6";
const LeftArrow = ({ onClick, bg_color, color }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-[50px] md:right-[80px] xl:left-auto xl:right-[80px]  top-[-42px] xl:top-[-42px] cursor-pointer z-10"
    >
      <div className={`bg-[${bg_color}] rounded-full p-[10px] drop-shadow-lg`}>
        <FaArrowLeftLong className={`text-[${color}] text-sm md:text-xl`} />
      </div>
    </div>
  );
};

export default LeftArrow;
