import React from "react";
import Nav from "./Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import allMenu from "../assets/fast-food.png";
import mieAyam from "../assets/mie-ayam.png";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className='container-fluid min-vh-100'>
        <div className='row g-3 my-2'>
          <div className='col-md-4 mb-3'>
            <Card style={{ width: "18rem", backgroundColor: "#B9EDDD" }}>
              <Card.Body>
                <Card.Title>Order #F1245</Card.Title>
                <Card.Text>Item: 3x</Card.Text>
                <Card.Text>
                  2 months ago
                  <Button
                    className='mx-2'
                    style={{
                      borderRadius: "20px",
                    }}
                    variant='success'
                  >
                    In Kitchen
                  </Button>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4 mb-3'>
            <Card style={{ width: "18rem", backgroundColor: "#B9EDDD" }}>
              <Card.Body>
                <Card.Title>Order #F1245</Card.Title>
                <Card.Text>Item: 3x</Card.Text>
                <Card.Text>
                  2 months ago
                  <Button
                    className='mx-2'
                    style={{
                      borderRadius: "20px",
                    }}
                    variant='success'
                  >
                    In Kitchen
                  </Button>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4 mb-3'>
            <Card style={{ width: "18rem", backgroundColor: "#B9EDDD" }}>
              <Card.Body>
                <Card.Title>Order #F1245</Card.Title>
                <Card.Text>Item: 3x</Card.Text>
                <Card.Text>
                  2 months ago
                  <Button
                    className='mx-2'
                    style={{
                      borderRadius: "20px",
                    }}
                    variant='success'
                  >
                    In Kitchen
                  </Button>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* FOODIES MENU */}
        <h4>Foodies Menu</h4>
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

        {/* CARD MENU*/}
        <div className='row'>
          <div className='col-md-3'>
            <Card className='my-4' style={{ width: "15rem" }}>
              <Card.Img variant='top' src={mieAyam} />
              <Card.Body>
                <p className='fs-5'>Lunch</p>
                <Card.Title>Mie Ayam</Card.Title>
                <Card.Text>Rp15.000</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-3'>
            <Card className='my-4' style={{ width: "15rem" }}>
              <Card.Img variant='top' src={mieAyam} />
              <Card.Body>
                <p className='fs-5'>Lunch</p>
                <Card.Title>Mie Ayam</Card.Title>
                <Card.Text>Rp15.000</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-3'>
            <Card className='my-4' style={{ width: "15rem" }}>
              <Card.Img variant='top' src={mieAyam} />
              <Card.Body>
                <p className='fs-5'>Lunch</p>
                <Card.Title>Mie Ayam</Card.Title>
                <Card.Text>Rp15.000</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-3'>
            <Card className='my-4' style={{ width: "15rem" }}>
              <Card.Img variant='top' src={mieAyam} />
              <Card.Body>
                <p className='fs-5'>Lunch</p>
                <Card.Title>Mie Ayam</Card.Title>
                <Card.Text>Rp15.000</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
