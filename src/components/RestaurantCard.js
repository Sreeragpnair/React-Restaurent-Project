import React from 'react'
import { Card } from 'react-bootstrap'

function RestaurantCard(props) {
  return (
    <div>
        <Card className='my-3 p-3'>
              <Card.Img variant="top" src={props.item.photograph} />
              <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>Cuisine : {props.item.cuisine_type}</Card.Text>
                <Card.Text>Location : {props.item.neighborhood}</Card.Text>
              </Card.Body>
            </Card>
    </div>
  )
}

export default RestaurantCard