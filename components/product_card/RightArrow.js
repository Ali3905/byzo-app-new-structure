import { FaArrowRightLong } from "react-icons/fa6";
const RightArrow = ({ onClick, bg_color, color }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 md:right-[20px] xl:right-0 top-[-42px] xl:top-[-42px] cursor-pointer z-10"
    >
      <div className={`bg-[${bg_color}] rounded-full p-[10px] drop-shadow-lg`}>
        <FaArrowRightLong className={`text-[${color}] text-sm md:text-xl`} />
      </div>
    </div>
  );
};

export default RightArrow;