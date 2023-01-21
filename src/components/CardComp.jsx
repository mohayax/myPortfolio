import React from 'react'
import calculator from '../assests/calculator.jpg';
import clock from '../assests/clock.jpg';
import cart from '../assests/cart.jpg';
import calender from '../assests/calender.jpg';
import recipe from '../assests/recipe.jpg';
import place from '../assests/place.jpg';
import Card from 'react-bootstrap/Card';
import './NavigationBar.css'
import { BiRightArrowAlt } from 'react-icons/bi';


const CardComp = () => {
const cardsObj = [
        {
        img: `${place}`,
            title: 'Meta bnb',
            desc: "A simple app for finding place to stay created using create-react-app and bootstrap",
            src: 'https://gentle-heliotrope-9d56ee.netlify.app/'
        },
    
        {
            img: `${recipe}`,
            title: 'The Recipe Haven',
            desc: "A recipe seraching app created using HTML, CSS and Javascript; Getting recipe from Edamam API after search",
            src: 'https://mohayax.github.io/The-Recipe-Haven/'
        },
        
        {
            img: `${cart}`,
        title: 'E-commerce site',
        desc: "A multiple page E-commerce site created using HTML, CSS and Javascript",
        src: 'https://mohayax.github.io/E-commerce-site/contact.html'
        },

        {
            img: `${calculator}`,
        title: 'Calculator App',
        desc: "A simple calculator app created using HTML, CSS and Javascript",
        src: 'https://mohayax.github.io/calculator-app/'
        },
    {
        img: `${calender}`,
        title: 'Calender App',
        desc: "A simple calculator app created using HTML, CSS and Javascript",
        src: 'https://mohayax.github.io/Calender-project/'
    },
    {
        img: `${clock}`,
        title: 'Clock App',
        desc: "A simple clock app created using HTML, CSS and Javascript",
        src: 'https://mohayax.github.io/clock/'
    }

    ]

    const content = cardsObj.map((element) => (
        <Card  key={element.title} className="me-2 ms-2 mb-3 card">
            <Card.Img variant="top" style={{height: '200px'}} src={element.img} className="img-fluid" />
            <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                    {element.desc}
                </Card.Text>
                <div className="mt-2">
                    <a href={element.src} target='_blank' className='li'>View<BiRightArrowAlt /></a>
                </div>
               
                {/* <Button variant="primary">Go somewhere</Button> */}
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