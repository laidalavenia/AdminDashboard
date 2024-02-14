import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const OrderCard = () => {
  return (
    <div className='row'>
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
        <Card style={{ width: "18rem", backgroundColor: "#FCAEAE" }}>
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
                variant='danger'
              >
                In Kitchen
              </Button>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-4 mb-3'>
        <Card style={{ width: "18rem", backgroundColor: "#DCBFFF" }}>
          <Card.Body>
            <Card.Title>Order #F1245</Card.Title>
            <Card.Text>Item: 3x</Card.Text>
            <Card.Text>
              2 months ago
              <Button
                className='mx-2'
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#A084E8",
                }}
              >
                In Kitchen
              </Button>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OrderCard;
