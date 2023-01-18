import React from 'react'
import calc from '../assests/calculator.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NavigationBar.css'

const CardComp = () => {
const cardsObj = [
        {
            img: {calc},
            title: 'Calculator App',
            desc: "A simple calculator app created using HTML, CSS and Javascript"
        },
    
        {
        img: {calc},
        title: 'Calculator App',
        desc: "A simple calculator app created using HTML, CSS and Javascript"
        },
        
        {
        img: {calc},
        title: 'Calculator App',
        desc: "A simple calculator app created using HTML, CSS and Javascript"
        },

        {
        img: {calc},
        title: 'Calculator App',
        desc: "A simple calculator app created using HTML, CSS and Javascript"
        }

    ]

    const content = cardsObj.map((element) => (
        <Card style={{ width: '18rem' }} key={element.title}>
            <Card.Img variant="top" src={element.img} />
            <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                    {element.desc}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    ))
  return ( 
    <div className='card-box'>
        {content}
    </div>
      
  )
}

export default CardComp