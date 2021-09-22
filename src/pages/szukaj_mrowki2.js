import React, { useState, useEffect, useRef, useLayoutEffect}  from 'react';
import {gsap} from 'gsap'
import Draggable  from 'react-draggable';
// import { DragDropContext } from 'react-beautiful-dnd';
// jakaś dokumentacja: https://www.npmjs.com/package/react-draggable
// jakiś przykład jak zrobić od podstaw https://www.positronx.io/create-react-draggable-component-with-react-draggable-package/



//let momentWykryciaGranicy = {x:0, y:0};
//let trwaAnimacja = false;
let timerAnimacjaHoryzontalna = null;
let timerAnimacjaVertykalna = null;


const przesunTablice = (tablica, iloscPoz) => {
    for (let j = 0; j < iloscPoz; j++) {
        const bufor = tablica[4];
        for (let i = 4; i > 0; i--) { tablica[i] = tablica[i-1]; }
        tablica[0] = bufor;
    }
}

const servis_pokzujWspolzedne = false;

const SzukajMrowkiPage = () => {
    const skokPoSiatce = [5, 40]; //płynność lub skokowość przesówania płytek

    let widoczneElementyInit = [ 
        [ {opis: "A-2" }, {opis: "A-1" }, {opis: "A 0" }, {opis: "A 1" }, {opis: "A 2" } ] ,
        [ {opis: "B-2" }, {opis: "B-1" }, {opis: "B 0" }, {opis: "B 1" }, {opis: "B 2" } ] ,
        [ {opis: "C-2" }, {opis: "C-1" }, {opis: "C 0" }, {opis: "C 8" }, {opis: "C 2" } ] ,
        [ {opis: "D-2" }, {opis: "D-1" }, {opis: "D 0" }, {opis: "D 1" }, {opis: "D 2" } ] ,
        [ {opis: "E-2" }, {opis: "E-1" }, {opis: "E 0" }, {opis: "E 1" }, {opis: "E 2" } ] ,
    ];
    // const [widoczneElementy, setWidoczneElementy] = useState([
    //     [ {opis: "A-2" }, {opis: "A-1" }, {opis: "A 0" }, {opis: "A 1" }, {opis: "A 2" } ] ,
    //     [ {opis: "B-2" }, {opis: "B-1" }, {opis: "B 0" }, {opis: "B 1" }, {opis: "B 2" } ] ,
    //     [ {opis: "C-2" }, {opis: "C-1" }, {opis: "C 0" }, {opis: "C 1" }, {opis: "C 2" } ] ,
    //     [ {opis: "D-2" }, {opis: "D-1" }, {opis: "D 0" }, {opis: "D 1" }, {opis: "D 2" } ] ,
    //     [ {opis: "E-2" }, {opis: "E-1" }, {opis: "E 0" }, {opis: "E 1" }, {opis: "E 2" } ] ,
    // ]);
    const [widoczneElementy, setWidoczneElementy] = useState(widoczneElementyInit);
    //const [widoczneElementy2, setWidoczneElementy] = useState([[{'e': 43}, 'd'], [{'e': 43}, 'd']]);

    const elementyDoWyboru = [
        { wybrany: 0,
            lista: [ {opis: "?" }, {opis: "W1" }, {opis: "W2" } ] },
        { wybrany: 0,
            lista: [ {opis: "?" }, {opis: "X1" }, {opis: "X2" }, {opis: "X3" }, {opis: "X4" } ] },
        { wybrany: 0,
            lista: [ {opis: "?" }, {opis: "B1" }, {opis: "B2" }, {opis: "B3" } ] },
                
    ];


    const iloscWierszy = elementyDoWyboru.length;
    let przesunieteMenuY = 0; // przesunięcie w menu po osi Y

    const przerysujAktualnePozycje = () => {
        let wiersz = przesunieteMenuY;
        const kopiaTab = widoczneElementy.slice();

        if (iloscWierszy) {
            for (let i = 1; i < kopiaTab.length; i++) {
                const iloscEl = elementyDoWyboru[wiersz].lista.length;
                const elementy = elementyDoWyboru[wiersz].lista;
                let aktualnieWybrany = elementyDoWyboru[wiersz].wybrany;
                let wyb = aktualnieWybrany % iloscEl;

                kopiaTab[i][2] = elementy[wyb];
                wyb = ++wyb % iloscEl;
                kopiaTab[i][3] = elementy[wyb];
                wyb = ++wyb % iloscEl;
                kopiaTab[i][4] = elementy[wyb];

                wyb = aktualnieWybrany;
                if (--wyb < 0) { wyb = iloscEl-1; };
                kopiaTab[i][1] = elementy[wyb];
                if (--wyb < 0) { wyb = iloscEl-1; };
                kopiaTab[i][0] = elementy[wyb];
                wiersz = ++wiersz % iloscWierszy;

                if (i === 0) break;
                if (i === kopiaTab.length -1) { i = -1; };
            }
        }
        setWidoczneElementy( () => kopiaTab);
        console.log('Przerysowana lista wyboru', widoczneElementy);
    }

    useLayoutEffect( () => {
        przerysujAktualnePozycje();
    }, [] );

    useEffect(() => {
        przerysujAktualnePozycje();
        return () => {};
    }, []);
    //przerysujAktualnePozycje();
    


    const zmienWybranyElement = ( nrWiersza, kierunek ) => {
        const wi = (nrWiersza + przesunieteMenuY) % iloscWierszy;
        elementyDoWyboru[wi-1].wybrany += kierunek;
        przerysujAktualnePozycje();
    }

    // 14x14 = 196
    // 196x2 = 392
    // 196x3 = 588
    // 14*3 = 42

    // 12x12=144
    // 144x3=432




    //const sliderW = [sliderH1, sliderH2];



    
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
        id: 1,
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


    const [stateRowC, setStateRowC] = useState({
        id: 2,
        pos: { x: 0, y: 0 }
    })

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

    const [stateRowD, setStateRowD] = useState({
        id: 3,
        pos: { x: 0, y: 0 } 
    })

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
            let kierunekH = 'prawo';     // 'prawo' / 'lewo'
            let przesuniecieH = 'brak';  // 'brak' / 'srodkowanie' / 'przewijanie'
            let kierunekV = 'dol';     // 'dol' / 'gora'
            let przesuniecieV = 'brak';  // 'brak' / 'srodkowanie' / 'przewijanie'


            if( state.pos.x < -50 ) {
                przesuniecieH = 'przewijanie';
                kierunekH = 'lewo';
            } else if ( state.pos.x >= -50 && state.pos.x < 0 ) {
                przesuniecieH = 'srodkowanie'
            } else if ( state.pos.x === 0 ){
                // console.log('nic nie rób');
            } else if ( state.pos.x > 0 && state.pos.x <= 50 ){
                przesuniecieH = 'srodkowanie'
                kierunekH = 'lewo';
            } else {
                przesuniecieH = 'przewijanie';
            }

            if( state.pos.y < -50 ) {
                przesuniecieV = 'przewijanie';
                kierunekV = 'gora';
            } else if ( state.pos.y >= -50 && state.pos.y < 0 ) {
                przesuniecieV = 'srodkowanie'
            } else if ( state.pos.y === 0 ){
                //console.log('V nic nie rób');
            } else if ( state.pos.y > 0 && state.pos.y <= 50 ){
                przesuniecieV = 'srodkowanie'
                kierunekV = 'gora';
            } else {
                przesuniecieV = 'przewijanie';
            }

            if( przesuniecieH === 'srodkowanie' || przesuniecieV === 'srodkowanie' ) {
                timerAnimacjaHoryzontalna = setInterval( () => {
                    const kierH = kierunekH;
                    const kierV = kierunekV;
                    //console.log('state x=', state.pos.x, 'stateB x=', stateRowB.pos.x );
                    let newPos = {x: 0, y: 0};
                    let deltaH = 0;
                    let deltaV = 0;

                    set_state( (prev) => {
                        //newPos = prev.pos;
                        if( ((kierH === 'lewo'  && prev.pos.x <= 0) || 
                             (kierH === 'prawo' && prev.pos.x >= 0)) &&
                            ((kierV === 'gora'  && prev.pos.y <= 0) || 
                             (kierV === 'dol'   && prev.pos.y >= 0)) 
                            ) {
                            clearInterval(timerAnimacjaHoryzontalna);
                            timerAnimacjaHoryzontalna = null;
                            return {  
                                ...prev, 
                                pos: { x: 0, y: 0 } 
                            }
                        }
                        if ( Math.abs(prev.pos.x) > 5 ) {
                            deltaH = Math.round(prev.pos.x / 5);
                        } else if ( Math.abs(prev.pos.x) > 0 ) {
                            deltaH = prev.pos.x;
                        }

                        if ( Math.abs(prev.pos.y) > 5 ) {
                            deltaV = Math.round(prev.pos.y / 5);
                        } else if ( Math.abs(prev.pos.y) > 0 ) {
                            deltaV = prev.pos.y;
                        }

                        newPos.x = prev.pos.x - deltaH;
                        newPos.y = prev.pos.y - deltaV;

                        return {  
                            ...prev, 
                            // pos: { x: prev.pos.x + (kierH==='lewo'? -3 : 3), y: prev.pos.y  + (kierV==='gora'? -3 : 3)  } 
                            // pos: { x: prev.pos.x - deltaH, y: prev.pos.y -deltaV } 
                            pos: { x: newPos.x, y: newPos.y } 
                        }
                    });

                    //console.log('newPos.x', newPos.x, ' newPos.y', newPos.y, 'przesonH',  deltaH);

                    setStateRowB( (prev) => ( { ...prev, pos: { x: newPos.x, y: newPos.y } } ));
                    // setStateRowB( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                    // setStateRowC( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                    // setStateRowD( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));
                    // setStateRowE( (prev) => ( { ...prev, pos: { x: prev.pos.x, y: prev.pos.y + (kier==='gora'? -5 : 5) } } ));


                }, 25);
            } else if (przesuniecieH === 'przewijanie') {
                timerAnimacjaHoryzontalna = setInterval( () => {
                    const kier = kierunekH;
                    set_state( (prev) => {
                        if( (kier === 'lewo'  && prev.pos.x < -195) || 
                            (kier === 'prawo' && prev.pos.x >  195) ) {
                            clearInterval(timerAnimacjaHoryzontalna);
                            timerAnimacjaHoryzontalna = null;
                            //zmienWybranyElement(prev.id, kier==='lewo'? -1 : 1);
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
        
        // if(timerAnimacjaVertykalna  === null) {
        if(timerAnimacjaVertykalna  === "siemka") {
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

            <div className="okno_wyboru">
            
                <div className='ramka_na_slider ramka_na_slider__gora' > </div>
            
                <div className='ramka_na_slider ramka_na_slider__srodek' >

                    {/* ------------------------- ukryty górny ------------------------- */}
                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y }}
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        
                        <div className="box">
                            {widoczneElementy[0][0].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y }}
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[0][1].opis}

                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y } }
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[0][2].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y } }
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[0][3].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent"
                        position={ {x: stateRowA.pos.x, y: stateRowA.pos.y } }
                        onDrag={handleDragRowA}
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[0][4].opis}
                        </div>
                    </Draggable>


                    {/* -------------------------   Perwszy widoczny rząd  ------------------------- */}
                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        onDrag={handleDragRowB}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[1][0].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowB}
                        onStop={ () => {wyrownajPozycje(stateRowB, setStateRowB) }}
                    >
                        <div className="box">
                            {widoczneElementy[1][1].opis}
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
                            {widoczneElementy[1][2].opis} <br/>
                            { servis_pokzujWspolzedne ? 
                                `Pos.x= ${stateRowB.pos.x} 
                                 Pos.y= ${stateRowB.pos.y}`  
                                : null
                            }
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowB}
                        onStop={ () => {wyrownajPozycje(stateRowB, setStateRowB) }}
                    >
                        <div className="box">
                            {widoczneElementy[1][3].opis}

                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowB.pos.x, y: stateRowB.pos.y }}
                        onDrag={handleDragRowB}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[1][4].opis}

                        </div>
                    </Draggable>

                    {/* -------------------------  drugi widoczny rząd  ------------------------- */}
                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        onDrag={handleDragRowC}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[2][0].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowC}
                        onStop={ () => {wyrownajPozycje(stateRowC, setStateRowC) }}

                    >
                        <div className="box">
                            {widoczneElementy[2][1].opis}
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowC}
                        onStop={ () => {wyrownajPozycje(stateRowC, setStateRowC) }}
                    >
                        <div className="box box__select">
                            {widoczneElementy[2][2].opis} <br/>
                            { servis_pokzujWspolzedne ? 
                                `Pos.x= ${stateRowC.pos.x} 
                                 Pos.y= ${stateRowC.pos.y}`  
                                : null
                            }
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowC}
                        onStop={ () => {wyrownajPozycje(stateRowC, setStateRowC) }}
                    >
                        <div className="box">
                            {widoczneElementy[2][3].opis}
                            
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowC.pos.x, y: stateRowC.pos.y }}
                        onDrag={handleDragRowC}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[2][3].opis}

                        </div>
                    </Draggable>

                    {/* -------------------------  trzeci widoczny rząd  ------------------------- */}
                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        onDrag={handleDragRowD}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[3][0].opis}

                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowD}
                        onStop={ () => {wyrownajPozycje(stateRowD, setStateRowD) }}

                    >
                        <div className="box">
                            {widoczneElementy[3][1].opis}

                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowD}
                        onStop={ () => {wyrownajPozycje(stateRowD, setStateRowD) }}
                    >
                        <div className="box box__select">
                            {widoczneElementy[3][2].opis}
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        grid={skokPoSiatce}
                        onDrag={handleDragRowD}
                        onStop={ () => {wyrownajPozycje(stateRowD, setStateRowD) }}
                    >
                        <div className="box">
                            {widoczneElementy[3][3].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowD.pos.x, y: stateRowD.pos.y }}
                        onDrag={handleDragRowD}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[3][4].opis}
                        </div>
                    </Draggable>

                    {/* -------------------------   Piąty rząd (ukryty)  ------------------------- */}
                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[4][0].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[4][1].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[4][2].opis}
                        </div>
                    </Draggable>
                    
                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[4][3].opis}
                        </div>
                    </Draggable>

                    <Draggable bounds="parent" 
                        position={ {x: stateRowE.pos.x, y: stateRowE.pos.y }}
                        onDrag={handleDragRowE}
                        //axis="y"
                        grid={skokPoSiatce}
                    >
                        <div className="box">
                            {widoczneElementy[4][4].opis}
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