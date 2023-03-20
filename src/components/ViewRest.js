import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';


function ViewRest() {

  const params = useParams()
  const [allrestareunt, setallrestareunt] = useState([])
  //function to api call for datas inside json file
  const getrestareuntdata = async () => {
    await fetch('/restaurants.json').then(data => {
      data.json().then(result => {
        // console.log(result);
        setallrestareunt(result.restaurants)
      })
    })
  }
  // console.log(allrestareunt);

  // console.log(restdata);
  useEffect(() => {
    // getrestareuntdata()
  }, [])
  const result=useSelector(state=>state. restaurantReducer)
const {restaurantList}=result
const restdata = restaurantList.find(item => item.id == params.id)



  return (
    <>
      {restdata ? (

        <Row>
          <Col>
            <Image className='p-5' src={restdata.photograph} fluid />
          </Col>
          <Col className='mt-5'>
            <h1>{restdata.name}</h1>
            <h2>{restdata.neighborhood}</h2>
            <h4>cuisine_type:{restdata.cuisine_type}</h4>
            <h4>address :{restdata.address}</h4>
            <Operatingtime timedata={restdata.operating_hours}></Operatingtime>
            <Review reviewData={restdata.reviews}></Review>
          </Col>
        </Row>

      ) : 'null'}
    </>
  )
}

export default ViewRest

