import Slider from "react-slick";
import RightArrow from "../product_card/RightArrow";
import LeftArrow from "../product_card/LeftArrow";
import productData from "@/data/productData";
import ProductCard from "../product_card/ProductCard";
import { useEffect, useState } from "react";

const ProductsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState("left")

  const changeArrow = (arrow) => {
      setCurrentSlide(arrow)
  }

  const settings = {
    nextArrow: <RightArrow bg_color={currentSlide==="right"?"green":""} color={currentSlide==="right"?"white" :"black"} changeArrow={changeArrow} />,
    prevArrow: <LeftArrow bg_color={currentSlide==="left"?"green":""} color={currentSlide==="left"?"white" :"black"} changeArrow={changeArrow} />,
    infinite: false,
    dots: false,
    speed: 500,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 6,
    // afterChange: (oldIndex, newIndex) => {
    //     // console.log(oldIndex);
    //     setCurrentSlide(oldIndex)
    //   },
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          arrows: true,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          arrows: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  
  useEffect(()=>{
    console.log(currentSlide);
  },[currentSlide])

  return (
    <div className="xl:container mx-[5%] xl:mx-auto py-[30px] first-letter:md:py-[57px] relative cursor-pointer">
      <h3 className="text-xl md:text-4xl text-[#000] font-bold pb-[10px]">
        Products you may like
      </h3>
      <Slider {...settings}>
        {productData.map((data, i) => (
          <div key={i}>
            <ProductCard data={data}/>
          </div>
        ))}
      </Slider>


    </div>
  );
};

export default ProductsSlider;
