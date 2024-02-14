import React from "react";
import Button from "react-bootstrap/Button";

const OrderLine = () => {
  return (
    <div className='row'>
      <div className='col-md-1'>
        <Button className='my-2' variant='outline-success'>
          All
        </Button>{" "}
      </div>
      <div className='col-md-2'>
        <Button className='my-2' variant='outline-success'>
          Dine in
        </Button>{" "}
      </div>
      <div className='col-md-2'>
        <Button className='my-2' variant='outline-success'>
          Wait List
        </Button>{" "}
      </div>
      <div className='col-md-2'>
        <Button className='my-2' variant='outline-success'>
          Take Away
        </Button>{" "}
      </div>
      <div className='col-md-1'>
        <Button className='my-2' variant='outline-success'>
          Served
        </Button>{" "}
      </div>
    </div>
  );
};

export default OrderLine;
