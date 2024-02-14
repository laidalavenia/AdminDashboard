import React from "react";
import Card from "react-bootstrap/Card";
import allMenu from "../assets/fast-food.png";

const FoodiesMenu = () => {
  return (
    <div className='row'>
      <div className='col-md-3'>
        <Card border='success' style={{ width: "200px", height: "80px" }}>
          <Card.Body>
            <div className='row'>
              <div className='col-md-4'>
                <img
                  src={allMenu}
                  style={{ width: "45px", padding: "2px" }}
                  className='py-2'
                />
              </div>
              <div className='col-md-6'>
                <Card.Title className='fs-6'>All Menu</Card.Title>
                <Card.Text>64 items</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3'>
        <Card border='success' style={{ width: "200px", height: "80px" }}>
          <Card.Body>
            <div className='row'>
              <div className='col-md-4'>
                <img
                  src={allMenu}
                  style={{ width: "45px", padding: "2px" }}
                  className='py-2'
                />
              </div>
              <div className='col-md-6'>
                <Card.Title className='fs-6'>All Menu</Card.Title>
                <Card.Text>64 items</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3'>
        <Card border='success' style={{ width: "200px", height: "80px" }}>
          <Card.Body>
            <div className='row'>
              <div className='col-md-4'>
                <img
                  src={allMenu}
                  style={{ width: "45px", padding: "2px" }}
                  className='py-2'
                />
              </div>
              <div className='col-md-6'>
                <Card.Title className='fs-6'>All Menu</Card.Title>
                <Card.Text>64 items</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3'>
        <Card border='success' style={{ width: "200px", height: "80px" }}>
          <Card.Body>
            <div className='row'>
              <div className='col-md-4'>
                <img
                  src={allMenu}
                  style={{ width: "45px", padding: "2px" }}
                  className='py-2'
                />
              </div>
              <div className='col-md-6'>
                <Card.Title className='fs-6'>All Menu</Card.Title>
                <Card.Text>64 items</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FoodiesMenu;
