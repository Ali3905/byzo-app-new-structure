"use client";

import Image from "next/image";
import ProductCard from "@/components/product_card/ProductCard";
import productData from "@/data/productData";

const Category = () => {
  const category_items = [
    {
      img: "/assets/category.png",
      title: "Coffee",
    },
    {
      img: "/assets/category.png",
      title: "Coffee",
    },
    {
      img: "/assets/category.png",
      title: "Coffee",
    },
    {
      img: "/assets/category.png",
      title: "Coffee",
    },
    {
      img: "/assets/category.png",
      title: "Coffee",
    },
    {
      img: "/assets/category.png",
      title: "Coffee",
    },
  ];

  return (
    <div className="category">
      <ul className="small_screen_nav">
        <li>
          <Image
            src="/assets/rightArrowWithoutTail.svg"
            alt="back"
            width={25}
            height={35}
          />
        </li>
        <li>Tea Coffee & more</li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
          >
            <path
              d="M22.9362 2.87187H9.1785C8.80026 1.75396 7.7377 0.946289 6.4884 0.946289C5.2391 0.946289 4.17654 1.75396 3.79831 2.87187H1.65084C1.15199 2.87187 0.747559 3.27433 0.747559 3.77075C0.747559 4.26717 1.15199 4.66963 1.65084 4.66963H3.79837C4.1766 5.78753 5.23916 6.59521 6.48846 6.59521C7.73776 6.59521 8.80032 5.78753 9.17856 4.66963H22.9362C23.4351 4.66963 23.8395 4.26717 23.8395 3.77075C23.8395 3.27433 23.4351 2.87187 22.9362 2.87187ZM6.4884 4.79745C5.91951 4.79745 5.45667 4.33686 5.45667 3.77075C5.45667 3.20463 5.91951 2.74405 6.4884 2.74405C7.05729 2.74405 7.52013 3.20463 7.52013 3.77075C7.52013 4.33686 7.05729 4.79745 6.4884 4.79745Z"
              fill="black"
            />
            <path
              d="M22.9362 10.574H20.7886C20.4104 9.45611 19.3478 8.64844 18.0985 8.64844C16.8493 8.64844 15.7867 9.45611 15.4085 10.574H1.65084C1.15199 10.574 0.747559 10.9765 0.747559 11.4729C0.747559 11.9693 1.15199 12.3718 1.65084 12.3718H15.4085C15.7867 13.4897 16.8494 14.2974 18.0986 14.2974C19.3478 14.2974 20.4105 13.4897 20.7887 12.3718H22.9362C23.4351 12.3718 23.8395 11.9693 23.8395 11.4729C23.8395 10.9765 23.4351 10.574 22.9362 10.574ZM18.0986 12.4996C17.5297 12.4996 17.0669 12.039 17.0669 11.4729C17.0669 10.9068 17.5297 10.4462 18.0986 10.4462C18.6675 10.4462 19.1303 10.9068 19.1303 11.4729C19.1303 12.039 18.6675 12.4996 18.0986 12.4996Z"
              fill="black"
            />
            <path
              d="M22.9362 18.2762H13.0486C12.6703 17.1583 11.6078 16.3506 10.3585 16.3506C9.10919 16.3506 8.04662 17.1583 7.66839 18.2762H1.65084C1.15199 18.2762 0.747559 18.6786 0.747559 19.175C0.747559 19.6715 1.15199 20.0739 1.65084 20.0739H7.66839C8.04662 21.1918 9.10919 21.9995 10.3585 21.9995C11.6078 21.9995 12.6703 21.1918 13.0486 20.0739H22.9362C23.4351 20.0739 23.8395 19.6715 23.8395 19.175C23.8395 18.6786 23.4351 18.2762 22.9362 18.2762ZM10.3585 20.2018C9.7896 20.2018 9.32675 19.7412 9.32675 19.1751C9.32675 18.609 9.7896 18.1484 10.3585 18.1484C10.9274 18.1484 11.3902 18.6089 11.3902 19.175C11.3902 19.7412 10.9274 20.2018 10.3585 20.2018Z"
              fill="black"
            />
          </svg>
        </li>
      </ul>
      <div className="category_items_parent">
        <div>
          <h3>Categories you may like</h3>
          <div>
            <img
              src="/assets/arrowLeft.svg"
              alt="previous"
              className="prev_btn"
            />
            <img src="/assets/arrowRight.svg" alt="next" className="next_btn" />
          </div>
        </div>

        <div className="category_items_container">
          {category_items.map((ele, i) => {
            return (
              <div className="category_item" key={i}>
                <Image src={ele.img} width={58} height={45} alt={ele.title} />
                <p>{ele.title}</p>
              </div>
            );
          })}
        </div>
        <div className="category_products">
          {productData.map((data, i) => (
            <ProductCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
