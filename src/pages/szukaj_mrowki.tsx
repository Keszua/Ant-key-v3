import React  from 'react';
import ReactDOM from 'react-dom';
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



const SzukajMrowkiPage = () => {


    const SampleNextArrow = (props :any) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            // style={{ ...style, display: "block", background: "red" }}
            style={{ ...style, background: "red" }}
            onClick={onClick}
          />
        );
      }
      
    const SamplePrevArrow = (props :any) => {
        const { className, style, onClick } = props;
        console.log('style', style);
        return (
            <div
                className={className}
                // style={{ ...style, display: "block", background: "green" }}
                style={{ ...style, background: "green" }}
                
                onClick={onClick}
            />
        );
    }


    const SliderH_settings = {
        // className: "center",
        centerPadding: "20px",
        // width: '100px',
        className: "slider variable-width",
        // variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };


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
            {/* <div className="ramka_na_dwa_slidery"> */}
            
                {/* <div className='ramka_na_slider ramka_na_slider__poziomy' > */}

                    <Slider 
                    //  {...SliderH_settings}
                        infinite={true}
                        speed= {500}
                        slidesToShow= {3}
                        slidesToScroll= {1}
                        initialSlide= {0}
                        centerMode= {true}
                        // centerPadding = {"20px"}
                        // variableWidth = {true}
                        dots= {false}
                        // beforeChange = {function(currentSlide, nextSlide) {
                        //     console.log("before change", currentSlide, nextSlide);
                        // }}
                        // afterChange= { function(currentSlide) {
                        //     console.log("after change", currentSlide);
                        // }}
                    >
                            <div className={'sl_okienko'}>
                                djjkjsdd0
                                jakiś tekst
                                <p>fdfljfjf</p>
                            </div>
                            <div className={'sl_okienko'}>
                                <h3>1</h3>jhfdjjdhf
                            </div>
                            <div className={'sl_okienko'}>
                                <h3>2</h3>
                            </div>
                            <div className={'sl_okienko'}>
                                <h3>3</h3>
                            </div>
                        <div className={'sl_okienko'}>
                            <h3>4</h3>
                        </div>
                    </Slider>
                {/* </div> */}

                {/* <div className='ramka_na_slider ramka_na_slider__pionowy' >
                    <Slider className='slider slider__pionowy'
                        vertical= {true}
                        verticalSwiping= {true}
                        infinite= {true}
                        slidesToShow= {2}
                        slidesToScroll= {1}
                        initialSlide= {0}
                        speed= {500}
                        // centerMode= {true}
                        beforeChange = {function(currentSlide, nextSlide) {
                            console.log("before change", currentSlide, nextSlide);
                        }}
                        afterChange= { function(currentSlide) {
                            console.log("after change", currentSlide);
                        }}
                    
                    >
                        <div className={'sl_okienko'}>
                            <div > <h3>A</h3> </div>  
                            <div> <h3>A</h3> </div>  
                        </div>
                        <div className={'sl_okienko'}>
                            <h3>1</h3>
                        </div>
                        <div className={'sl_okienko'}>
                            <h3>2</h3>
                        </div>
                        <div className={'sl_okienko'}>
                            <h3>3</h3>
                        </div>
                    </Slider>
                </div> */}

            {/* </div>     */}
        </>
    )

}

export default SzukajMrowkiPage;