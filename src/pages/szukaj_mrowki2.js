import React, { useState, useEffect, useRef}  from 'react';
import {gsap} from 'gsap'
import Draggable, {DraggableCore}  from 'react-draggable';
// import { DragDropContext } from 'react-beautiful-dnd';
// jakaś dokumentacja: https://www.npmjs.com/package/react-draggable
// jakiś przykład jak zrobić od podstaw https://www.positronx.io/create-react-draggable-component-with-react-draggable-package/


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
    const skokPoSiatce = [1, 50];


    // const [state, setState] = useState(
    //     {
    //         activeDrags: 0,
    //         deltaPosition: { x: 0, y: 0 }
    //     }
    // )

    // const [stateA1, setStateA1] = useState(
    //     {  deltaXyPos: { x: 0, y: 0 } }
    // )

    // const [stateA2, setStateA2] = useState(
    //     {  deltaXyPos: { x: 0, y: 0 } }
    // )

    // const [stateA3, setStateA3] = useState(
    //     {  deltaXyPos: { x: 0, y: 0 } }
    // )

    // const [stateB2, setStateB2] = useState(
    //     {  deltaXyPos: { x: 0, y: 0 } }
    // )

    
    // const handleDrag = (e, d) => {
    //     const { x, y } = stateA1.deltaXyPos;
    //     setStateA1({
    //         deltaXyPos: {
    //             x: x + d.deltaX,
    //             y: y + d.deltaY,
    //         }
    //     });
    // };
    
    const [stateRowA, setStateRowA] = useState(
        {  pos: { x: 0, y: 0 } }
    )

    const handleDragRowA = (e, d) => {
        setStateRowA({
            pos: {
                x: stateRowA.pos.x + d.deltaX,
                y: stateRowA.pos.y + d.deltaY,
            }
        });
        setStateRowB({
          pos: {
            x: stateRowB.pos.x,
            y: stateRowB.pos.y + d.deltaY,
          }
        });
        setStateRowC({
          pos: {
            x: stateRowC.pos.x,
            y: stateRowC.pos.y + d.deltaY,
          }
        });
    };

    const [stateRowB, setStateRowB] = useState(
        {  pos: { x: 0, y: 0 } }
    )

    const handleDragRowB = (e, d) => {
        setStateRowA({
          pos: {
            x: stateRowA.pos.x,
            y: stateRowA.pos.y + d.deltaY,
          }
        });
        setStateRowB({
          pos: {
            x: stateRowB.pos.x + d.deltaX,
            y: stateRowB.pos.y + d.deltaY,
          }
        });
        setStateRowC({
            pos: {
              x: stateRowC.pos.x,
              y: stateRowC.pos.y + d.deltaY,
            }
          });
      };

    const [stateRowC, setStateRowC] = useState(
        {  pos: { x: 0, y: 0 } }
    )

    const handleDragRowC = (e, d) => {
        setStateRowA({
          pos: {
            x: stateRowA.pos.x,
            y: stateRowA.pos.y + d.deltaY,
          }
        });
        setStateRowB({
          pos: {
            x: stateRowB.pos.x,
            y: stateRowB.pos.y + d.deltaY,
          }
        });
        setStateRowC({
          pos: {
            x: stateRowC.pos.x + d.deltaX,
            y: stateRowC.pos.y + d.deltaY,
          }
        });
    };



    // const { deltaXyPos } = stateA1;



    // const onStart = () => {
    //     setState({activeDrags: ++state.activeDrags});
    // };
    
    // const onStop = () => {
    //     setState({activeDrags: --state.activeDrags});
    // };

    // const dragHandlers = {onStart: onStart, onStop: onStop};


    const onBeforeCapture = () => {
        /*...*/
    };
    
    const onBeforeDragStart = () => {
        /*...*/
      };
    
    const onDragStart = () => {
        /*...*/
      };
    const onDragUpdate = () => {
        /*...*/
      };
    const onDragEnd = () => {
        // the only one that is required
      };



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

            {/* <Draggable
                // axis="x"
                handle=".handle"
                defaultPosition={{x: 220, y: 0}}
                position={null}
                grid={[5, 25]}
                scale={1}
                //onStart={handleStart}
                onDrag={handleDrag}
                // onStop={handleStop}
                  //onMouseDown = {(e: MouseEvent) => void}
                //onMouseDown = {(e) => {}}
                //onMouseUp
                //onTouchEnd

            >
                <div>
                    <div className="box handle">Drag from here</div>
                    <div>This readme is really dragging on...</div>
                    <div>
                        <strong>x: {stateA1.deltaXyPos.x.toFixed(0)}, </strong>
                        <strong>y: {stateA1.deltaXyPos.y.toFixed(0)}</strong>
                    </div>
                </div>
            </Draggable> */}


            <div className="ramka_na_slider">
            
                <div className='ramka_na_slider__gora' > </div>
            
                <div className='ramka_na_slider__srodek' >
                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y }}
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element A1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y }}
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element A2<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y }}
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element A3<br/>

                        </div>
                    </Draggable>


                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        onDrag={handleDragRowB}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element B1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        onDrag={handleDragRowB}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box box__select">
                            Element B2<br/>
                            
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        onDrag={handleDragRowB}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element B3<br/>
                            
                        </div>
                    </Draggable>


                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        onDrag={handleDragRowC}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element C1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        onDrag={handleDragRowC}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box box__select">
                            Element C2<br/>
                            
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        onDrag={handleDragRowC}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element C3<br/>
                            
                        </div>
                    </Draggable>
                </div>

                <div className='ramka_na_slider__lewo' > </div>
                <div className='ramka_na_slider__prawo' > </div>
                <div className='ramka_na_slider__dol' > </div>

            

            
            
            </div>


 



        </>
    )

}

export default SzukajMrowkiPage;