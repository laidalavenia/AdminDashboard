import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import "../styles/Nav.css";
// import profile from "../../public/assets/profile.png";
import profile from "../assets/profile.png";
import { IoNotificationsOutline } from "react-icons/io5";

function NavScrollExample() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid className='container-nav'>
        <Form className='custom-navbar'>
          <Form.Control
            type='search'
            placeholder='Search'
            style={{ width: "30rem" }}
            className='custom-navbar'
            aria-label='Search'
          />
        </Form>
        <Navbar.Brand href='#home'>
          <IoNotificationsOutline className='mx-2' />
          <img
            alt='profile'
            src={profile}
            width='30'
            height='30'
            className='d-inline-block align-top mx-2'
          />
          Laida
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
