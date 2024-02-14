import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className='bg-white sidebar'>
      <div className='m-2'>
        <i className='bi bi-boostrap-fill my-2'></i>
        <span className='brand-name fs-4'>Tasty Station</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2 my-1'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-5'>Dashboard</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3'></i>
          <span className='fs-5'>Order Line</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3 '></i>
          <span className='fs-5'>Manage Table</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3 '></i>
          <span className='fs-5'>Manage Dishes</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3 '></i>
          <span className='fs-5'>Customers</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3'></i>
          <span className='fs-5'>Settings</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3'></i>
          <span className='fs-5'>Help Center</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3'></i>
          <span className='fs-5'>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
