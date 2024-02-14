import React from "react";
import Card from "react-bootstrap/Card";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import mieAyam from "../assets/mie-ayam.png";

const CardMenu = () => {
  return (
    <div className='row'>
      <div className='col-md-3'>
        <Card className='my-4' style={{ width: "15rem" }}>
          <Card.Img variant='top' src={mieAyam} />
          <Card.Body>
            <p className='fs-5'>Lunch</p>
            <Card.Title>Mie Ayam</Card.Title>
            <div className='row'>
              <div className='col-md-5'>
                <Card.Text>Rp15.000</Card.Text>
              </div>
              <div className='col-md-7'>
                <FaCircleMinus
                  className='btn-pm mx-2'
                  style={{
                    width: "30px",
                    height: "23px",
                  }}
                />

                <FaCirclePlus
                  className='mx-2'
                  style={{ width: "30px", height: "23px" }}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3'>
        <Card className='my-4' style={{ width: "15rem" }}>
          <Card.Img variant='top' src={mieAyam} />
          <Card.Body>
            <p className='fs-5'>Lunch</p>
            <Card.Title>Mie Ayam</Card.Title>
            <div className='row'>
              <div className='col-md-5'>
                <Card.Text>Rp15.000</Card.Text>
              </div>
              <div className='col-md-7'>
                <FaCircleMinus
                  className='btn-pm mx-2'
                  style={{
                    width: "30px",
                    height: "23px",
                  }}
                />

                <FaCirclePlus
                  className='mx-2'
                  style={{ width: "30px", height: "23px" }}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3'>
        <Card className='my-4' style={{ width: "15rem" }}>
          <Card.Img variant='top' src={mieAyam} />
          <Card.Body>
            <p className='fs-5'>Lunch</p>
            <Card.Title>Mie Ayam</Card.Title>
            <div className='row'>
              <div className='col-md-5'>
                <Card.Text>Rp15.000</Card.Text>
              </div>
              <div className='col-md-7'>
                <FaCircleMinus
                  className='btn-pm mx-2'
                  style={{
                    width: "30px",
                    height: "23px",
                  }}
                />

                <FaCirclePlus
                  className='mx-2'
                  style={{ width: "30px", height: "23px" }}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3'>
        <Card className='my-4' style={{ width: "15rem" }}>
          <Card.Img variant='top' src={mieAyam} />
          <Card.Body>
            <p className='fs-5'>Lunch</p>
            <Card.Title>Mie Ayam</Card.Title>
            <div className='row'>
              <div className='col-md-5'>
                <Card.Text>Rp15.000</Card.Text>
              </div>
              <div className='col-md-7'>
                <FaCircleMinus
                  className='btn-pm mx-2'
                  style={{
                    width: "30px",
                    height: "23px",
                  }}
                />

                <FaCirclePlus
                  className='mx-2'
                  style={{ width: "30px", height: "23px" }}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardMenu;
