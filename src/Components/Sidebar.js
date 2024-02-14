import React from "react";
import "../styles/Sidebar.css";
import logo from "../assets/food.png";
import { IoIosLogOut } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineDinnerDining } from "react-icons/md";
import { BsMenuButtonWide } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className='bg-white sidebar'>
      <div className='m-2'>
        <i className='bi bi-boostrap-fill my-2'></i>
        <img src={logo} style={{ width: "35px" }}></img>
        <span className='brand-name fs-4 mx-2'>Tasty Station</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2 my-1'>
          <RxDashboard style={{ width: "20px", height: "30px" }} />
          <span className='fs-6 mx-3'>Dashboard</span>
        </a>
        <a className='list-group-item py-2'>
          <BsMenuButtonWide style={{ width: "20px", height: "30px" }} />
          <span className='fs5 mx-3'>Order Line</span>
        </a>
        <a className='list-group-item py-2'>
          <MdOutlineDinnerDining style={{ width: "20px", height: "30px" }} />
          <span className='fs-6 mx-3'>Manage Table</span>
        </a>
        <a className='list-group-item py-2'>
          <IoFastFoodOutline style={{ width: "20px", height: "30px" }} />
          <span className='fs-6 mx-3'>Manage Dishes</span>
        </a>
        <a className='list-group-item py-2'>
          <SlPeople style={{ width: "20px", height: "30px" }} />
          <span className='fs-6 mx-3'>Customers</span>
        </a>
        {/* BOTTOM */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <a className='list-group-item py-2'>
          <IoMdSettings style={{ width: "20px", height: "30px" }} />
          <span className='fs-6 mx-3'>Settings</span>
        </a>
        <a className='list-group-item py-2'>
          <IoMdHelpCircleOutline style={{ width: "20px", height: "30px" }} />
          <span className='fs-6 mx-3'>Help Center</span>
        </a>
        <a className='list-group-item py-2'>
          <IoIosLogOut style={{ width: "25px", height: "30px" }} />
          <span className='fs-6 mx-3'>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
