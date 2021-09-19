import React, { useState, useEffect, useRef}  from 'react';
import {gsap} from 'gsap'
import Draggable  from 'react-draggable';
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

let momentWykryciaGranicy = {x:0, y:0};
//let trwaAnimacja = false;
let timerAnimacjaHoryzontalna = null;
let timerAnimacjaVertykalna = null;



const SzukajMrowkiPage = () => {

    const sliderH1 = ['1A', '1B', '1C', '1D', '1E'];
    const sliderH2 = ['1A', '1B', '1C', '1D', '1E'];
    //const sliderW = [sliderH1, sliderH2];
    const skokPoSiatce = [1, 40];


    
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
        setStateRowD({
            pos: {
              x: stateRowD.pos.x,
              y: stateRowD.pos.y + d.deltaY,
            }
        });
        setStateRowE({
            pos: {
                x: stateRowE.pos.x,
                y: stateRowE.pos.y + d.deltaY,
            }
        });

    };

    const [stateRowB, setStateRowB] = useState({
        pos: { x: 0, y: 0 },
        dragable: true,
        scale: 1,
    })


    const handleDragRowB = (e, d) => {
        setStateRowA( (prev) => ({
            ...prev,
            pos: {
                x: stateRowA.pos.x,
                y: stateRowA.pos.y + d.deltaY,
            }
        }));

        setStateRowB( (prev) => ({  
            ...prev, 
            pos: { x: stateRowB.pos.x + d.deltaX, y: stateRowB.pos.y + d.deltaY } 
        }));

        setStateRowC({
            pos: {
                x: stateRowC.pos.x,
                y: stateRowC.pos.y + d.deltaY,
            }
        });
        setStateRowD({
            pos: {
                x: stateRowD.pos.x,
                y: stateRowD.pos.y + d.deltaY,
            }
        });
        setStateRowE({
            pos: {
                x: stateRowE.pos.x,
                y: stateRowE.pos.y + d.deltaY,
            }
        });
  
        // setResizeIcon( (prev) => ({ ...prev, save:    {active: false, color: 'black'}  }) )

        // if( stateRowB.pos.x > 50) {
        //     Animacja_PrzesuwajPoziomo('prawo');
        // } else if (stateRowB.pos.x < -50) {
        //     Animacja_PrzesuwajPoziomo('lewo');
        // } else {
        //     setStateRowB( (prev) => ({  
        //         ...prev, 
        //         scale: 1, 
        //     }));
        // }

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
        setStateRowD({
            pos: {
              x: stateRowD.pos.x,
              y: stateRowD.pos.y + d.deltaY,
            }
        });
        setStateRowE({
            pos: {
                x: stateRowE.pos.x,
                y: stateRowE.pos.y + d.deltaY,
            }
        });
  
    };

    const [stateRowD, setStateRowD] = useState(
        {  pos: { x: 0, y: 0 } }
    )

    const handleDragRowD = (e, d) => {
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
            x: stateRowC.pos.x,
            y: stateRowC.pos.y + d.deltaY,
          }
        });
        setStateRowD({
            pos: {
                x: stateRowD.pos.x + d.deltaX,
                y: stateRowD.pos.y + d.deltaY,
            }
        });
        setStateRowE({
            pos: {
                x: stateRowE.pos.x,
                y: stateRowE.pos.y + d.deltaY,
            }
        });
  
    };

    const [stateRowE, setStateRowE] = useState(
        {  pos: { x: 0, y: 0 } }
    )

    const handleDragRowE = (e, d) => {
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
            x: stateRowC.pos.x,
            y: stateRowC.pos.y + d.deltaY,
          }
        });
        setStateRowD({
            pos: {
                x: stateRowD.pos.x,
                y: stateRowD.pos.y + d.deltaY,
            }
        });
        setStateRowE({
            pos: {
                x: stateRowE.pos.x + d.deltaX,
                y: stateRowE.pos.y + d.deltaY,
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




    const wyrownajPozycje = (state, set_state = () => {})  => {

        if(timerAnimacjaHoryzontalna === null) {
            //console.log('state x', state.pos.x, ' y', state.pos.y);
            let kierunek = 'prawo';     // 'prawo' / 'lewo'
            let przesuniecie = 'brak';  // 'brak' / 'srodkowanie' / 'przewijanie'

            if( state.pos.x < -50 ) {
                przesuniecie = 'przewijanie';
                kierunek = 'lewo';
            } else if ( state.pos.x >= -50 && state.pos.x < 0 ) {
                przesuniecie = 'srodkowanie'
            } else if ( state.pos.x === 0 ){
                // console.log('nic nie rób');
            } else if ( state.pos.x > 0 && state.pos.x <= 50 ){
                przesuniecie = 'srodkowanie'
                kierunek = 'lewo';
            } else {
                przesuniecie = 'przewijanie';
            }

            if( przesuniecie === 'srodkowanie' ) {
                timerAnimacjaHoryzontalna = setInterval( () => {
                    const kier = kierunek;
                    console.log('state x=', state.pos.x, 'stateB x=', stateRowB.pos.x );

                    set_state( (prev) => {
                        if( (kier === 'lewo'  && prev.pos.x <= 0) || 
                            (kier === 'prawo' && prev.pos.x >= 0) ) {
                            clearInterval(timerAnimacjaHoryzontalna);
                            timerAnimacjaHoryzontalna = null;
                            return {  
                                ...prev, 
                                pos: { x: 0, y: state.pos.y } 
                            }
                        }
                        return {  
                            ...prev, 
                            pos: { x: prev.pos.x + (kier==='lewo'? -3 : 3), y: state.pos.y } 
                        }
                    });
                }, 25);
            } else if (przesuniecie === 'przewijanie') {
                timerAnimacjaHoryzontalna = setInterval( () => {
                    const kier = kierunek;
                    set_state( (prev) => {
                        if( (kier === 'lewo'  && prev.pos.x < -195) || 
                            (kier === 'prawo' && prev.pos.x >  195) ) {
                            clearInterval(timerAnimacjaHoryzontalna);
                            timerAnimacjaHoryzontalna = null;
                            return {  
                                ...prev, 
                                // pos: { x: 0, y: state.pos.y } 
                                pos: { x: 0, y: 0 } 
                            }
                        }
                        return {  
                            ...prev, 
                            pos: { x: prev.pos.x + (kier==='lewo'? -5 : 5), y: state.pos.y } 
                        }
                    });
                }, 25);
            }
        };
        
        if(timerAnimacjaVertykalna  === null) {
            let kierunekV = 'dol';     // 'dol' / 'gora'
            let przesuniecieV = 'brak';  // 'brak' / 'srodkowanie' / 'przewijanie'

            if( state.pos.y < -50 ) {
                console.log('przewijanie V gora')
                przesuniecieV = 'przewijanie';
                kierunekV = 'gora';
            } else if ( state.pos.y >= -50 && state.pos.y < 0 ) {
                console.log('srodkowanie V w dol')
                przesuniecieV = 'srodkowanie'
            } else if ( state.pos.y === 0 ){
                console.log('V nic nie rób');
            } else if ( state.pos.y > 0 && state.pos.y <= 50 ){
                console.log('srodkowanie V w górę')
                przesuniecieV = 'srodkowanie'
                kierunekV = 'gora';
            } else {
                console.log('przewijanie V w dół')
                przesuniecieV = 'przewijanie';
            }

            if( przesuniecieV === 'srodkowanie' ) {
                timerAnimacjaVertykalna = setInterval( () => {
                    const kier = kierunekV;

                    //sztuczka z odświerzeniem state
                    setStateRowB( (prev) => {
                        state = prev;
                        return {...prev};
                    })

                    if( (kier === 'gora'  && state.pos.y <= 0) || 
                        (kier === 'dol' && state.pos.y >= 0) ) {
                        clearInterval(timerAnimacjaVertykalna);
                        timerAnimacjaVertykalna = null;
                        setStateRowA( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                        setStateRowB( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                        setStateRowC( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                        setStateRowD( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                        setStateRowE( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                    } else {
                        setStateRowA( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                        setStateRowB( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                        setStateRowC( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                        setStateRowD( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                        setStateRowE( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                    }
                }, 25);
            } else if (przesuniecieV === 'przewijanie') {
                timerAnimacjaVertykalna = setInterval( () => {
                    const kier = kierunekV;

                    //sztuczka z odświerzeniem state
                    setStateRowB( (prev) => {
                        state = prev;
                        return {...prev};
                    })

                    if( (kier === 'gora'  && state.pos.y < -195) || 
                        (kier === 'dol' && state.pos.y > 195) ) {
                        clearInterval(timerAnimacjaVertykalna);
                        timerAnimacjaVertykalna = null;
                        setStateRowA( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                        setStateRowB( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                        setStateRowC( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                        setStateRowD( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                        setStateRowE( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: 0 } } ));
                    } else {
                        setStateRowA( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                        setStateRowB( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                        setStateRowC( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                        setStateRowD( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                        setStateRowE( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                    }
                }, 25);
            }



        }
    };

    // useEffect(() => {
    //     //initPoition();
    //     return () => {
    //     //setArticleList([])
    //     };
    // }, []);

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


            <div className="okno_wyboru">
            
                <div className='ramka_na_slider ramka_na_slider__gora' > </div>
            
                <div className='ramka_na_slider ramka_na_slider__srodek' >

                    {/* ------------------------- Pierwszy rząd ------------------------- */}
                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y }}
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element A-2<br/>
                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y }}
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element A-1<br/>
                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y } }
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element A 0<br/>

                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y } }
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element A 1<br/>

                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y } }
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element A 2<br/>

                        </div>
                    </Draggable>


                    {/* -------------------------   Drugi rząd  ------------------------- */}
                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        onDrag={handleDragRowB}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element B-2<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowB}
                        onStop={ () => {wyrownajPozycje(stateRowB, setStateRowB) }}
                    >
                        <div className="box">
                            Element B-1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        grid={skokPoSiatce}
                        scale={stateRowB.scale}
                        onDrag={ handleDragRowB }
                        onStop={ () => {wyrownajPozycje(stateRowB, setStateRowB) }}
                    >
                        <div className="box box__select">
                            Element B 0<br/>
                            Pos.x={stateRowB.pos.x},<br/>
                            Pos.y={stateRowB.pos.y},<br/>

                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowB}
                        onStop={ () => {wyrownajPozycje(stateRowB, setStateRowB) }}
                    >
                        <div className="box">
                            Element B 1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        onDrag={handleDragRowB}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element B 2<br/>
                            
                        </div>
                    </Draggable>

                    {/* -------------------------  Trzeci rząd  ------------------------- */}
                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        onDrag={handleDragRowC}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element C-2<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowC}
                        onStop={ () => {wyrownajPozycje(stateRowC, setStateRowC) }}

                    >
                        <div className="box">
                            Element C-1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowC}
                        onStop={ () => {wyrownajPozycje(stateRowC, setStateRowC) }}
                    >
                        <div className="box box__select">
                            Element C 0<br/>
                            Pos.x={stateRowC.pos.x},<br/>
                            Pos.y={stateRowC.pos.y},<br/>

                            
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowC}
                        onStop={ () => {wyrownajPozycje(stateRowC, setStateRowC) }}
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
                        <div className="box">
                            Element C2<br/>
                            
                        </div>
                    </Draggable>

                    {/* -------------------------  Czwarty rząd  ------------------------- */}
                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        onDrag={handleDragRowD}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element D-2<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowD}
                        onStop={ () => {wyrownajPozycje(stateRowD, setStateRowD) }}

                    >
                        <div className="box">
                            Element D-1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowD}
                        onStop={ () => {wyrownajPozycje(stateRowD, setStateRowD) }}
                    >
                        <div className="box box__select">
                            Element D 0<br/>
                            
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowD}
                        onStop={ () => {wyrownajPozycje(stateRowD, setStateRowD) }}
                    >
                        <div className="box">
                            Element D 1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        onDrag={handleDragRowD}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element D 2<br/>
                            
                        </div>
                    </Draggable>

                    {/* -------------------------   Piąty rząd  ------------------------- */}
                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element E-2<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element E-1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element E 0<br/>
                            
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element E1<br/>
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            Element E2<br/>
                            
                        </div>
                    </Draggable>


                </div>

                <div className='ramka_na_slider ramka_na_slider__lewo' > </div>
                <div className='ramka_na_slider ramka_na_slider__prawo' > </div>
                <div className='ramka_na_slider ramka_na_slider__dol' > </div>

            

            
            
            </div>


 



        </>
    )

}

export default SzukajMrowkiPage;