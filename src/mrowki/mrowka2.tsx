import { useEffect, useState, useLayoutEffect } from 'react';
import { IdrawPath } from './calcPoint';
import { reDrawArrayPath } from './calcPoint';


//let dCalc1 = "";
//let dCalc2 = "";
let Noga1Path :any[] = [];
let CialoPath :any[] = [];
//let cCalc = "";


export const Mrowka2 = (props :any) => {

    const [cykl, setCykl] = useState(1);
    // const [animation, setAnimation] = useState( props.animation ? props.animation : false);

    
    const [obrot, setObrot] = useState(0);
    const [kierunek1, setKierunek1] = useState(0);


    const calosc = {

        cialo: {
            gl: {x: 235,  y: 129},
            n1: {x: 296,  y: 183},
            n2: {x: 326,  y: 193},
            n3: {x: 357,  y: 186},
            st: {x: 342,  y: 166},
            d: [
                "M 277.3,115.4 C 261.1,114.4 248.4,117.2 241.7,126.3 242.6,141.9 257.6,144.3 267.7,151.3 277.3,151.4 292.5,158.7 288.4,141.4 283.4,134.6 279.6,126.2 277.3,115.4 Z",
                "M 241.9,127 236.1,127.3 C 231.8,129.1 231.7,134.9 236.6,137.1 L 241.4,136.9 C 249.4,143.6 251.5,147.3 252.8,150.7 266,166.5 268.2,156 268.8,151.6 256.4,145.4 241.5,139 241.9,127 Z",
                "M 277.5,115.4 C 288,113.1 298.9,114.1 310.4,119.3 330,123.4 334.6,131.4 341.3,141.2 342.7,148.8 339.6,157.5 344.5,161.2 347.3,175.7 328.1,172.5 314.1,173.8 305.8,172.4 299.3,159.7 289.8,147.1 L 288.7,141.5 C 283.4,134 280,125 277.5,115.4 Z",
                "M 330.8,173.4 C 327.2,174.1 317,174.2 313.4,174.1 313.1,191.1 323.1,196.4 327,196.7 333.6,195.9 332.7,181.8 330.8,173.4 Z",
                "M 333,173 C 333,173 341.4,171.3 343.5,169.2 353.2,172.4 357.3,179.6 359.5,187.5 359.3,189.4 360,190.4 357.7,192.1 350.6,193.1 348.4,193.1 340.7,191.2 337.3,187.3 333.2,180.3 333,173 Z",
                "M 365.5,183.6 C 377.8,170.8 390,161.1 425.2,143.9 426.2,147.2 425.7,151.2 430,151.2 401.2,164.8 393.6,194.9 366.4,193 357.8,190.4 358.8,187.2 365.5,183.6 Z",
                "M 426.3,143.7 C 426.4,146.7 425.6,150.4 430.7,149.8 L 498.8,184.8 C 497.2,187 498.9,191.5 499.5,195.2 499.6,191.8 498.5,187.9 499.8,185 509.2,186.2 505.7,180.3 503.9,179.3 475.9,164.9 455.2,151.8 426.3,143.7 Z",
                "M 505.1,185.6 506.8,182.6 549.3,211.4 550,212.9 563.2,213.9 564.2,215.7 574.5,213.9 577.6,206.8 578.6,204 582.1,204.3 583.6,209.1 579.1,208.3 577.6,213.4 578.1,215.9 565.2,217.2 566.4,219.2 561.6,216.9 550,215.1 V 217.4 L 544.2,211.6 Z",
                "M 263.7,159.4 C 264.1,169.6 271.3,182.7 288,185 294.5,187.9 300.9,186.8 300.2,180.9 300.1,176.4 299.9,164.4 298.1,159.2 295.5,155.7 292.5,151.4 289.1,147.2 288.8,154.6 281.6,153.4 268.6,151.6 268.2,155.7 267.4,158.7 263.7,159.4 Z",
            ]            
        },

        noga1: {
            odn1: {
                c1: {x: 295, y: 182 },
                c2: {x: 262, y: 138 },
                d: "M 286.7,184.4 C 293,191 303.9,193.3 300,179.1 294.3,162.1 274.5,134.8 261.4,135.4 259.1,136.1 259.4,139.9 261.1,142.2 268.5,145.6 276.2,170.4 286.7,184.4 Z",
                path: [
                    {   style: {  zIndex: 6, visibility: "visible" , stroke: '#592e00', strokeWidth: 1,  strokeOpacity: 1, strokeMiterlimit:4, fill: '#834e40', fillOpacity: 1 },
                        d: "M 286.7,184.4 C 293,191 303.9,193.3 300,179.1 294.3,162.1 274.5,134.8 261.4,135.4 259.1,136.1 259.4,139.9 261.1,142.2 268.5,145.6 276.2,170.4 286.7,184.4 Z",  },
                    {   style: {  zIndex: 7, visibility: "visible" , stroke: '#582e22', strokeWidth: 4.15,  strokeOpacity: 1, strokeMiterlimit:4, fill: 'none', fillOpacity: 1, filter:'url(#filter1883)' },
                        d: "M 263.2,136.8 C 276.8,142 296.6,171.5 297.5,183.5",  },
                ],
            },
            odn2: {
                c1: {x: 262, y: 138 },
                c2: {x: 236, y: 189},
                //d: "M 259.9,136.4 C 265.6,134.8 264.5,139 262.9,141.1 258.2,160.9 249.9,173.2 243.9,185.7 245.4,188.8 245.6,191.4 244.3,193.5 242.9,195.1 243.3,197.4 244.3,199.9 242.4,199.6 241.3,197.9 241.8,192.8 242.6,190.8 242.5,188.9 240.4,187.4 L 238.1,190.2 C 236.5,192.1 233.5,192.1 233.6,188.5 240.7,166.5 250.3,152.6 259.9,136.4 Z",
                path: [
                    {   style: {  zIndex: -10, visibility: "visible" , stroke: '#092e00', strokeWidth: 1,  strokeOpacity: 1, strokeMiterlimit:4, fill: '#834e40', fillOpacity: 1 },
                        d: "M 259.9,136.4 C 265.6,134.8 264.5,139 262.9,141.1 258.2,160.9 249.9,173.2 243.9,185.7 245.4,188.8 245.6,191.4 244.3,193.5 242.9,195.1 243.3,197.4 244.3,199.9 242.4,199.6 241.3,197.9 241.8,192.8 242.6,190.8 242.5,188.9 240.4,187.4 L 238.1,190.2 C 236.5,192.1 233.5,192.1 233.6,188.5 240.7,166.5 250.3,152.6 259.9,136.4 Z", }
                ],
            },
            odn3: {
                c1: {x: 236, y: 189},
                c2: {x: 220, y: 228 },
                //d: "M 234.4,188.9 C 231.7,192.4 229.7,195.6 225.4,205.6 222.4,220.4 220.1,219.7 218.7,226.1 L 223,231.6 C 220.7,225.8 227.7,214.8 230.1,206.4 230.8,202.3 231.9,198.1 235.9,193.7 236.7,192.5 237.1,190.6 237.2,189.9 237.5,187.3 235.1,187.6 234.4,188.9 Z",
                path: [ 
                    {   style: { },
                        d: "M 234.4,188.9 C 231.7,192.4 229.7,195.6 225.4,205.6 222.4,220.4 220.1,219.7 218.7,226.1 L 223,231.6 C 220.7,225.8 227.7,214.8 230.1,206.4 230.8,202.3 231.9,198.1 235.9,193.7 236.7,192.5 237.1,190.6 237.2,189.9 237.5,187.3 235.1,187.6 234.4,188.9 Z"  },
                ],
            },
            odn4: {
                c1: {x: 220, y: 228},
                c2: {x: 220, y: 228},
                //d:   "M 208.3,243.2 209.6,239.9 213.4,237.2 214.7,238.2 220.5,228.6 219,227.3 212.4,233.4 V 235.3 L 206.1,238.4 206.6,240.2 195.2,237.9 195.5,248 197,241.2 204.3,242 202.5,245.2 206.3,242 Z",
                path: [ 
                    {   style: { },
                        d: "M 208.3,243.2 209.6,239.9 213.4,237.2 214.7,238.2 220.5,228.6 219,227.3 212.4,233.4 V 235.3 L 206.1,238.4 206.6,240.2 195.2,237.9 195.5,248 197,241.2 204.3,242 202.5,245.2 206.3,242 Z", },
                ],
            },
    
    
        }

    }



    const drawCialo = () => {
        const array = Object.entries(calosc.cialo.d);
        CialoPath = array.map( (el, i) => {
            const param = { id: 0, d: ''}; 
            param.id = parseFloat(el[0]);
            param.d = el[1];
            return param;
        })

    }


    const drawNogi = (rot :number = 0) => {
        let param: IdrawPath = {
            id: 0,
            //d: calosc.noga1.odn1.d,
            d: '',
            joint: {x: 0, y: 0},
            shift: {x: 0, y: 0},
            rot,
            path: [{style: {}, d: ''}],
        }

        const noga1Arr = Object.entries(calosc.noga1);

        let idi = 0;
        for( let i =0; i< noga1Arr.length; i++ ) {
            param = reDrawArrayPath(noga1Arr[i][1], param);
            param.id = idi;
            const nestPath = param.path;
            for(let j = 0; j< nestPath.length; j++) {
                Noga1Path[idi] = { id: idi, style: nestPath[j].style, d: nestPath[j].d};
                idi ++;
            }
        }
    }

    useLayoutEffect( () => {
        drawCialo();
        drawNogi(obrot);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCykl( cykl =>  cykl > 1  ? cykl >> 1 : 128 );
            // setObrot(obrot => { 
            //     if(kierunek1) {
            //         obrot =  obrot + 10;
            //         if (obrot > 10) setKierunek1(0);
            //     } else {
            //        obrot = obrot - 10;
            //        if (obrot < -50) setKierunek1(1);
            //     }
            //     return obrot;
            // });
            // drawNogi(obrot);
        }, 1000);
        return () => clearInterval(interval);
    // }, [obrot, kierunek1]);
    }, []);

    return (
        <span>
            <svg className="h-6 w-6 inline" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"
                style={{ width:'600px', height:'300px', background:'gray' }}
            >

                <defs>
                    <radialGradient
                        id="radialGradient979"
                        cx="279.5"
                        cy="157.6"
                        fx="279.5"
                        fy="157.6"
                        r="20.61"
                        gradientTransform="matrix(0.3857,-0.1448,0.5776,1.539,79.5,-45.82)"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor:'#834e40', stopOpacity:1}} />
                        <stop offset="1" style={{ stopColor:'#4f2b22', stopOpacity:1}} />

                    </radialGradient>

                    <radialGradient id="myGradientR">
                        <stop offset="10%" stopColor="gold" />
                        <stop offset="95%" stopColor="red" />
                    </radialGradient>

                    <linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse" x1="1041.6901" y1="169.485" x2="1383.9301" y2="169.485" gradientTransform="matrix(1 0 0 -1 -761.14 398.97)">
                        <stop offset="14%" stopColor="#2f343b" stopOpacity="0%" />
                        <stop offset="43%" stopColor="#337082" stopOpacity="41%" />
                        <stop offset="67%" stopColor="#369fb9" stopOpacity="73%" />
                        <stop offset="79%" stopColor="#37b1cf" stopOpacity="85%" />
                    </linearGradient>

                    <filter id="filter1883" >
                       <feGaussianBlur  stdDeviation="0.6" />
                    </filter>

                </defs>

                <g style={{  zIndex: 0, stroke: 'black', strokeWidth: 1,  strokeOpacity: 1,  fillOpacity: 0  }}>
                    { CialoPath.map( (el) => <path key={el.id}  d={el.d} /> ) }
                </g>

                <g>
                    { Noga1Path.map( (el) => <path key={el.id} style={el.style} d={el.d} /> ) }
                </g>


                {/* <g style={{ stroke: 'red', strokeWidth: 1,  strokeOpacity: 1, fill: 'none', fillOpacity: 0  }}>
                    <circle cx={`${calosc.noga1.odn1.c1.x}`} cy={`${calosc.noga1.odn1.c1.y}`} r="3"  />
                </g> */}




            </svg>
        </span>
    )
}