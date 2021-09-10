import React, { useState, useEffect, useRef}  from 'react';
import {gsap} from 'gsap'
import Draggable from 'react-draggable';




const CarouselB = () => {
    const wrapperRef = useRef(null);
    const itemsRef = useRef([]);
    const [carouselData, setCarouselData] = useState(null)
    const [itemHeight, setItemHeight] = useState(0);
    // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [windowWidth, setWindowWidth] = useState(100);
    
    //console.log('window.innerWidth', window.innerWidth);

    const measuredRef = React.useCallback((node) => {
        if (node !== null) {
          setItemHeight(node.getBoundingClientRect().height);
        }
    }, []);
    
    const addToRefs = React.useCallback((el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    }, []);
    
    const animation = (carouselItems, width) => {
        return (
          carouselItems.length > 0 &&
          gsap
            .to(carouselItems, {
              duration: 1,
              x: () => {
                return `+=${width}`;
              },
              paused: true,
              ease: "linear",
              overwrite: true,
              repeat: -1,
              modifiers: {
                x: (x) => {
                  x = parseFloat(x) % width;
                  return `${x}px`;
                }
              }
            })
            .progress(1 / carouselItems.length)
        );
    };

    const carouselAnimation = () => {
        const carouselItems = itemsRef.current;
        let carouselWidth, carouselLength, snapBox;
    
        if (carouselItems.length > 0) {
          carouselLength = itemsRef.current.length;
          carouselWidth = itemsRef.current[0].clientWidth * carouselLength;
          snapBox = gsap.utils.snap(itemsRef.current[0].clientWidth);
    
          carouselItems.forEach((elm, i) => {
            gsap.set(elm, {
              x: i * itemsRef.current[0].clientWidth,
              left: -itemsRef.current[0].clientWidth
            });
          });
    
          gsap.set("#wrapper", { height: itemHeight });
        }

        const wrapProgress = gsap.utils.wrap(0, 1);
        const proxy = document.createElement("div");
        const timeLine = animation(carouselItems, carouselWidth);
    

        // const onStart = 50;
        // const onStop = 250;
        // const dragHandlers = {onStart: onStart, onStop: onStop};

        // Draggable.create(proxy, {
        //     trigger: "#elm",
        //     throwProps: true,
        //     inertia: true,
        //     isThrowing: true,
        //     dragResistance: 0.55,
        //     onDrag: updateProgress,
        //     onThrowUpdate: updateProgress,
        //     dragClickables: true,
        //     snap: {
        //         x: snapBox
        //     }
        // });

        // <Draggable {...dragHandlers}>
        //     <div className="box">I can be dragged anywhere</div>
        // </Draggable>
    
        //Draggable.createElement(proxy, {});

        function updateProgress() {
          if (timeLine)
            timeLine.progress(
              wrapProgress(gsap.getProperty(proxy, "x") / carouselWidth)
            );
        }
    };


    useEffect(() => {
        // gsap.registerPlugin(Draggable, InertiaPlugin);
        gsap.registerPlugin(Draggable);
        setCarouselData([1, 2, 3, 4, 5, 6, 7, 8])    
    }, [])

    React.useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
        handleWindowResize();
        carouselAnimation();
    });

    carouselAnimation();
    }, [carouselData, windowWidth]);
     







    return (
        <div className="carousel-container" id="wrapper" ref={wrapperRef}>
          <div className="carousel-display" ref={measuredRef}>
            {carouselData && carouselData.map((item) => {
                return (
                  <div
                    key={item}
                    id="elm"
                    className="carousel-display__item"
                    ref={addToRefs}
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
      );

}

const SzukajMrowkiPage = () => {






    const sliderH1 = ['1A', '1B', '1C', '1D', '1E'];
    const sliderH2 = ['1A', '1B', '1C', '1D', '1E'];
    const sliderW = [sliderH1, sliderH2];


    const [state, setState] = useState(
        {
            activeDrags: 0,
            deltaPosition: {
            x: 0, y: 0
            }
        }
    )

    const onStart = () => {
        setState({activeDrags: ++state.activeDrags});
    };
    
    const onStop = () => {
        setState({activeDrags: --state.activeDrags});
    };

    const dragHandlers = {onStart: onStart, onStop: onStop};


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
                    <Draggable bounds="parent" {...dragHandlers}>
                        <div className="box">
                            Element 1<br/>
                            
                        </div>
                    </Draggable>
                    <Draggable bounds="parent" {...dragHandlers}>
                        <div className="box">
                            Element 2<br/>
                            
                        </div>
                    </Draggable>
                    <Draggable bounds="parent" {...dragHandlers}>
                        <div className="box">
                            Element 3<br/>
                            
                        </div>



                    </Draggable>

                  
                </div>
            
                <div className='ramka_na_slider ramka_na_slider__pionowy' >

                    
                </div>

            

            
            
            </div>


 



        </>
    )

}

export default SzukajMrowkiPage;