import React, { useState}  from 'react';
//import ReactDOM from 'react-dom';

//var ReactAd = require('react/addons');
// var React = require('react');

// import './szukaj_mrowki.css';
//import "~slick-carousel/slick/slick.css"; 
//import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import Slider from 'node_modules\react-slick\dist\react-slick.js'
// Slider ze strony: https://react-slick.neostack.com/docs/api
/*
instalowałem:

npm install react-slick --save 
npm install slick-carousel --save  
npm i --save-dev @types/react-slick
*/




// const Item = (props :any) => {
    
//     const [level, setLevel] = useState(); 
    
//     const className = 'item level' + props.level
//     return(
//         <div className={className}>
//             {props.id}
//         </div>
//     )
   
// }

// interface Icarusel {
//     items: any,
//     active: any,
//     direction: any,
// }

// const Carousel = (props :Icarusel) => {

//     const [items, setItems] = useState(props.items);
//     const [active, setActive] = useState(props.active);
//     const [direction, setDirection] = useState(props.direction);

//     const generateItems = () => {
//         var items = []
//         var level
//         console.log(active)
//         for (var i = active - 2; i < active + 3; i++) {
//             var index = i
//             if (i < 0) {
//                 index = items.length + i
//             } else if (i >= items.length) {
//                 index = i % items.length
//             }
//             level = active - i
//             items.push(<Item key={index} id={items[index]} level={level} />)
//         }
//         return items
//     }

//     const moveLeft = () => {
//         let newActive = active
//         newActive--
//         // setState({
//         //     active: newActive < 0 ? items.length - 1 : newActive,
//         //     direction: 'left'
//         // })
//         setActive( newActive < 0 ? items.length - 1 : newActive );
//         setDirection('left');
//     }

//     const moveRight = () => {
//         let newActive = active
//         // this.setState({
//         //     active: (newActive + 1) % this.state.items.length,
//         //     direction: 'right'
//         // })
//         setActive( (newActive + 1) % items.length );
//         setDirection('left');
//     }


//     return(
//         <div id="carousel" className="noselect">
//             <div className="arrow arrow-left" onClick={moveLeft}><i className="fi-arrow-left"></i></div>
//             {/* <ReactCSSTransitionGroup 
//                 transitionName={direction}>
//                 {generateItems()}
//             </ReactCSSTransitionGroup> */}
//             <div className="arrow arrow-right" onClick={moveRight}><i className="fi-arrow-right"></i></div>
//         </div>
//     )


// }


const SzukajMrowkiPage = () => {






    const sliderH1 = ['1A', '1B', '1C', '1D', '1E'];
    const sliderH2 = ['1A', '1B', '1C', '1D', '1E'];
    const sliderW = [sliderH1, sliderH2];


    return ( 
        <>
            <div >
                <div className='informacje'>
                    Okno glowne <br/>
                </div>
                <svg className="inline" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"
                    style={{ width:'600px', height:'300px', background:'gray', margin: '0 5% 0 5%' }}
                >

                </svg>
            </div>
            <div className="ramka_na_dwa_slidery">
            
                <div className='ramka_na_slider ramka_na_slider__poziomy' >

                
                    
                </div>
            </div>

 

        </>
    )

}

export default SzukajMrowkiPage;