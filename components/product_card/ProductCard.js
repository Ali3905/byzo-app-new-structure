import { useRouter } from "next/navigation";
import { useState } from "react";
// import Dropdown from "./DropDown";

const ProductCard = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isPriceDynamic, setIsPriceDynamic] = useState(false);
  const [isImageDynamic, setIsImageDynamic] = useState(false);
  const handleSelection = (selectedValue) => {
    setSelectedOption(selectedValue);
    setIsPriceDynamic(true);
    setIsImageDynamic(true);
  };
  const router = useRouter()

  const handlePrice = (selectedID, selectedPrice) => {
    return selectedID === selectedOption && selectedPrice;
  };
  const handleImage = (selectedID, selectedImage) => {
    return selectedID === selectedOption && selectedImage;
  };

  const handleClick = () => {
    router.push("/product")
  }
  
  return (
    <div 
    style={{
      "box-shadow" : "4px 2px 15px 0px rgba(0, 0, 0, 0.1)"
    }}
    className="card flex flex-col justify-evenly text-left w-[215px] h-[300px] bg-white relative mt-5 px-[18px] py-[23px] rounded-[10px]"
    onClick={handleClick}
    >
      <div className="badge">
        <p className="self-end absolute z-[100] text-white text-center text-[9px] not-italic font-bold leading-[10.8px] right-1 top-1">
          {data.discount} <br /> OFF
        </p>
        <img
          src={"/icons/badge.png"}
          alt="badge icon"
          className="self-end absolute right-[-5px] w-[42.717px] h-[42.386px] top-0"
        />
      </div>

      <div className="img_container flex justify-center items-end w-32 h-[132px] self-center mb-[7px] rounded-[300px]">
        {isImageDynamic ? (
          data.detail.map(
            (option, i) =>
              handleImage(option.id, option.imageUrl).length > 0 && (
                <img
                  key={i}
                  src={handleImage(option.id, option.imageUrl)}
                  alt="product"
                  className="h-[132px]"
                />
              )
          )
        ) : (
          <img
            src={data.detail[0].imageUrl}
            alt="product"
            className="h-[132px]"
          />
        )}
      </div>

      <p className="productName text-[#3F3F3F] text-[13px] not-italic font-bold leading-[normal] mb-[7px]">
        {data.title}
      </p>

      <span className="price">
        <p className="text-[#FC7E06] text-[10px] not-italic font-normal leading-[normal] line-through">
          {data.maxprice}&#8377;
        </p>
        {isPriceDynamic ? (
          data.detail.map((option, i) => (
            <p
              key={i}
              className="text-[#418B56] text-base not-italic font-semibold leading-[normal]"
            >
              {handlePrice(option.id, option.price)}
            </p>
          ))
        ) : (
          <p className="text-[#418B56] text-base not-italic font-semibold leading-[normal]">
            {data.detail[0].price}
          </p>
        )}
      </span>

      <div className="btn_group flex gap-[13px] mt-2.5">
        {/* <Dropdown options={data.dropDownOptions} onSelect={handleSelection} /> */}
        <select
          onChange={(e) => handleSelection(e.target.value)}
          className="text-[9px] shadow-[-4px_4px_36px_0px_rgba(0,0,0,0.12)] rounded bg-white text-[#333] cursor-pointer transition-[border-color] duration-[0.2s] ease-[ease] p-2 outline-0 hover:border-[#666] focus:border-neutral-600"
        >
          {data.detail.map((option, i) => (
            <option key={i} value={option.id}>
              {option.weight}
            </option>
          ))}
        </select>

        <button className="flex flex-row justify-center items-center gap-[5px] border bg-white text-[#FC7E06] text-center text-[10px] not-italic font-medium leading-[normal] whitespace-nowrap px-2.5 py-1 rounded-[5px] border-solid border-[#FC7E06]">
          <img
            src="/icons/bag.svg"
            alt="cart"
            className="w-[11px] h-3.5 fill-[#FC7E06]"
          />
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
