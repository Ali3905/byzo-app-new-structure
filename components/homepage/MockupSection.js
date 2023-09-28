import Image from "next/image";

const MockupSection = () => {
  return (
    <section className="mockup_section">
      <div className="mockup">
        <div className="image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="315"
            height="553"
            viewBox="0 0 315 653"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.2809 0.142578H268.617C293.783 0.142578 314.184 20.5225 314.184 45.6623C314.184 233.535 314.184 417.886 314.184 607.284C314.184 632.424 293.783 652.804 268.617 652.804H46.2809C21.115 652.804 0.713867 632.424 0.713867 607.284C0.713867 416.045 0.713867 230.831 0.713867 45.6623C0.713867 20.5225 21.115 0.142578 46.2809 0.142578Z"
              fill="#0B0A0B"
            />
          </svg>
          <Image
            src="/assets/Products2.png"
            id="mockup_image"
            width={100}
            height={100}
          />
        </div>
        <div className="image_txt_right">
          <Image src="/assets/location-crosshairs.svg" width={20} height={20} />
          <span>
            <h2>Fast Delivery</h2>
            <p>Within 40 minutes at your door</p>
          </span>
        </div>
        <div className="image_txt_left">
          <Image src="/assets/location-crosshairs.svg" width={20} height="17" />
          <span>
            <h2>Fast Delivery</h2>
            <p>Within 40 minutes at your door</p>
          </span>
        </div>
      </div>
      <div className="mockup_txt">
        <h2>
          Make Healthy life with <span>Fresh Grocery</span> Products
        </h2>
        <p>
          We priorities quality in each of our grocery,Just order a product and
          get it delivered at your doorstep
        </p>
        <ul>
          <li>
            <Image
              src="/assets/location-crosshairs.svg"
              width="17"
              height="17"
              alt="crosshair"
              className="w-[35px]"
            />
            Best service than others
          </li>
          <li>
            <Image
              src="/assets/location-crosshairs.svg"
              width="17"
              height="17"
              alt="crosshair"
              className="w-[35px]"
            />
            Best service than others
          </li>
          <li>
            <Image
              src="/assets/location-crosshairs.svg"
              width="17"
              height="17"
              alt="crosshair"
              className="w-[35px]"
            />
            Best service than others
          </li>
        </ul>
        <button>Read more</button>
      </div>
    </section>
  );
};

export default MockupSection;
