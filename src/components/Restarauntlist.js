import  React from 'react'
import  {useState ,useEffect} from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Restarauntlist() {
    const [allrestareunt,setallrestareunt]=useState([])
      //function to api call for datas inside json file
      const getrestareuntdata=async ()=>{
        await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
            // console.log(result);
            setallrestareunt(result.restaurants)
        })
      })
    }
      // console.log(allrestareunt);
      useEffect(()=>{
        getrestareuntdata()
      },[])
  return (
  
    <Row>
      {
        allrestareunt.map(item=>(
          <RestCard data={item}/>
        ))
      }
    </Row>
  )
}

export default Restarauntlist