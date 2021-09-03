import React  from 'react';
import './szukaj_mrowki.css';
//import "~slick-carousel/slick/slick.css"; 
//import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import Slider from 'node_modules\react-slick\dist\react-slick.js'
// Slider ze strony: https://react-slick.neostack.com/docs/api


const SzukajMrowkiPage = () => {


    const SampleNextArrow = (props :any) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
    const SamplePrevArrow = (props :any) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
        />
    );
    }


    const SliderH_settings = {
        // className: "center",
        // centerPadding: "20px",
        className: "slider variable-width",

        dots: true,
        infinite: true,
        // speed: 500,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // initialSlide: 0,
        // centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };


    const sliderH1 = ['1A', '1B', '1C', '1D', '1E'];
    const sliderH2 = ['1A', '1B', '1C', '1D', '1E'];
    const sliderW = [sliderH1, sliderH2];


    return ( 
        <>
        <div>
            Okno glowne
            <svg className="inline" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"
                style={{ width:'600px', height:'300px', background:'gray' }}
            >

            </svg>
        </div>
        
        <div>

            <Slider {...SliderH_settings}
                dots= {false}
                infinite={true}
                speed= {500}
                slidesToShow= {3}
                slidesToScroll= {1}
                initialSlide= {0}
                centerMode= {true}
                beforeChange = {function(currentSlide, nextSlide) {
                    console.log("before change", currentSlide, nextSlide);
                  }}
                afterChange= { function(currentSlide) {
                    console.log("after change", currentSlide);
                }}
            >
                <div>
                    <h3>0</h3>
                </div>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>

            <Slider 
                vertical= {true}
                verticalSwiping= {true}
                infinite= {true}
                slidesToShow= {3}
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
                <div style= {{display: "flex", justifyContent: 'flex-start' }}>
                    <div> <h3>A</h3> </div>  
                    <div> <h3>A</h3> </div>  
                </div>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
            </Slider>



        </div>
            
        </>
    )

}

export default SzukajMrowkiPage;