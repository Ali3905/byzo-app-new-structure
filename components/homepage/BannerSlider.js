import Slider from "react-slick";
import bannerData from "@/data/bannerData";
import { useRouter } from "next/navigation";

const BannerSlider = () => {
  const settings = {
    infinite: false,
    dots: false,
    speed: 500,
    arrows: false,
    autoplay: false,
    slidesToShow: 1.5,
    responsive: [

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
        },
      },
    ],
  };  
  
  const router = useRouter()
  
  const handleClick = () => {
    router.push("/bulkorder")
  }

  return (
    <div className="container mx-auto md:pb-[60px]">
      <Slider {...settings}>
        {bannerData.map((data, i) => (
          <img src={data.bannerUrl} className="pr-[20px] md:pr-[60px]" key={i} onClick={handleClick}/>
        ))}

      </Slider>

    </div>
  )
}

export default BannerSlider;
