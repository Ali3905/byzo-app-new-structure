import { FaArrowRightLong } from "react-icons/fa6";
const RightArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 md:right-[20px] xl:right-0 top-[-42px] xl:top-[-42px] cursor-pointer z-10"
    >
      <div className="bg-[#FFF] rounded-full p-[10px] drop-shadow-lg">
        <FaArrowRightLong className="text-sm md:text-xl" />
      </div>
    </div>
  );
};

export default RightArrow;