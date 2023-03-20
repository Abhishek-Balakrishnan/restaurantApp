import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';
import { restaurantListAction } from '../Action/resturentAction';
import { useDispatch, useSelector } from 'react-redux';


function Restarauntlist() {




  const dispatch = useDispatch()
const result=useSelector(state=>state. restaurantReducer)
const {restaurantList}=result


  useEffect(() => {
    dispatch(restaurantListAction())
    //   getrestareuntdata()
  }, [])
  return (

    <Row>
      {
        restaurantList.map(item => (
          <RestCard data={item} />
        ))
      }
    </Row>
  )
}

export default Restarauntlist