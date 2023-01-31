import React from 'react'
import  { useState } from 'react';
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {
    const [open, setOpen] = useState(false);

  return (
    <>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
               reviewData.map(item=>
                <div className='p-2 mt-1'>
                <h3>{item.name} {item.date}</h3>
                <h6>{item.rating} </h6>
                <p>{item.comments}</p>

                </div>

               ) 
            }
           
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Review