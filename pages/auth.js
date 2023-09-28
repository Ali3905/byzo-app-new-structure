"use client";

import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Auth = () => {
  const [house, setHouse] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleChange = (event) => {
    setHouse(event.target.value);
  };
  return (
    <>
      <div className="signin relative">
        {/* <h3>Welcome back</h3> */}
        <div className="welcome"></div>
        <div className="signin_form">
          <h4>Enter your mobile number</h4>
          <div className="mobile_num">
            <Image src="/assets/india.png" width={30} height={30} alt="india" />
            <p>+91 92883 88238</p>
          </div>
          <div className="signin_btns">
            <p>Sign in</p>
            <Image
              src="/assets/arrowRight.svg"
              width={50}
              height={50}
              alt="arrow right"
            />
          </div>
        </div>
      </div>
      <div className="auth hidden">
        <h5>Location Information</h5>
        <Image
          className="cross"
          src="/assets/cross.png"
          width={20}
          height={20}
          alt="cross"
        />
        <div className="auth_container">
          <div className="map"></div>
          <form className="form">
            <h6>Enter location information manually</h6>
            <div className="area_selection_notice">
              <h6>User Selected Area</h6>
              <span>
                <Image
                  src="/assets/location-crosshairs.svg"
                  width={20}
                  height={20}
                  alt="location crosshair"
                />
                <p>
                  User Selected Area User Selected Area User Area User Selected
                  Area
                </p>
              </span>
            </div>
            {/* <label htmlFor="house">
                House no. or floor
                <input type="text" placeholder="Enter Details" />
            </label> */}

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="house_no_label" className="mui_label">
                  House no. or floor
                </InputLabel>
                <Select
                  labelId="house_no_select_label"
                  id="house_no_select"
                  value={house}
                  label="House no. or floor"
                  onChange={(e) => setHouse(e.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="address_label" className="mui_label">
                  Address
                </InputLabel>
                <Select
                  labelId="address_select_label"
                  id="address_select"
                  value={address}
                  label="Address"
                  onChange={(e) => setAddress(e.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="house_no_label" className="mui_label">
                  Select Nearby Landmark
                </InputLabel>
                <Select
                  labelId="house_no_select_label"
                  id="house_no_select"
                  value={landmark}
                  label="Select Nearby Landmark"
                  onChange={(e) => setLandmark(e.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* <label htmlFor="address">
            Address
            <input type="text" placeholder="Enter Details" />
          </label>
          <label htmlFor="landmark">
            Select Nearby Landmark
            <input type="text" placeholder="Enter Details" />
          </label> */}
            <div className="address_label">
              <p>Add Address Label</p>
              <div className="labels_container">
                <span>Home</span>
                <span>Work</span>
                <span>Other</span>
              </div>
            </div>
            <button>Save & Continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
