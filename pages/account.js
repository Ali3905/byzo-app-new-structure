"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";


const Account = () => {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 769) {
        setShowDetails(true);
      } else {
        setShowDetails(false);
      }
    });

    if (window.innerWidth < 769) {
      setShowDetails(true);
    }
  }, []);
  return (
    <>
      <div className="account">
        <ul className="side_bar">
          <li>Manage account</li>
          <li>Orders</li>
          <li>Payment methods</li>
          <li>Address book</li>
        </ul>

        <div className="account_details">
          <div className="heading_logout">
            <h6>
              {showDetails && (
                <Image
                  src="/rightArrowWithoutTail.svg"
                  width={20}
                  height={20}
                  alt="right arrow"
                />
              )}
              Personal Info
            </h6>
            <button>Logout</button>
          </div>
          <div className="details_item">
            <p>First Name</p>
            <p>Lara</p>
          </div>
          <div className="details_item">
            <p>Last Name</p>
            <p>Lorensson</p>
          </div>
          <div className="details_item">
            <p>Phone Number</p>
            <span>
              <Image src="/assets/india.png" width={20} height={20} alt="india" />
              <p>+91 92883 88238</p>
            </span>
          </div>
          <div className="details_btn_group">
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
