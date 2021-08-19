import { useEffect, useState, useLayoutEffect } from 'react';


let dCalc1 = "";
let dCalc2 = "";
//let cCalc = "";
const pi_d_180 = 3.14159265/180;


/*
  if ((this.ThLight+ddTh>=-89.0)&&(this.ThLight+ddTh<=89.0)) this.ThLight+=ddTh;
  this.FiLight+=ddFi;
  if (this.ThLight<-89.0) this.ThLight=-89.0;
  if (this.ThLight>89.0) this.ThLight=89.0;
  while (this.FiLight<0.0) this.FiLight+=360.0;
  while (this.FiLight>=360.0) this.FiLight-=360.0;
  this.Light.x=Math.cos(this.FiLight*pi_d_180)*Math.cos(this.ThLight*pi_d_180);
  this.Light.y=-Math.sin(this.FiLight*pi_d_180)*Math.cos(this.ThLight*pi_d_180);
  this.Light.z=-Math.sin(this.ThLight*pi_d_180);
*/

export const Mrowka1 = (props) => {

    const [cykl, setCykl] = useState(1);
    // const [animation, setAnimation] = useState( props.animation ? props.animation : false);

    const wspP = 1.0;
    
    const przesuniecie = [0, 0];
    const [obrot, setObrot] = useState(0);

    const [kierunek1, setKierunek1] = useState(0);

    // const baza1 = {
    //     staw1: [101.6, 94.35],
    //     staw2: [324.2, 114 ],
    //     d: "M 109.3,55.7 C 110.7,55.3 319.8,85.9 319.8,85.9 357.2,94.3 360.3,131.3 329.2,142.8 L 111.3,136.6 C 59.7,126.3 59.2,81.8 109.3,55.3 Z",

    // }


    const noga1 = {
        odn1: {
            c1: {x: 279, y: 154},
            c2: {x: 295, y: 182 },
            d: "M 269.4,159.9 C 271,168.2 282.1,182.3 292.4,186.3 298.9,189.2 300.6,186.9 299.9,181 298.8,172.3 292.2,155 286.9,149.3 281.1,144.5 268.2,150.3 269.4,159.9 Z",
            //d: "M 269.4,159.9 L 369,159 L 369,109 L 269,109",
            //d: "M 279,154 L 379,154",
            //d: "M 269,170 L 379,170 L 379,120",
        },
        odn2: {
            c1: {x: 295, y: 182},
            c2: {x: 262, y: 138 },
            d: "M 286.7,184.4 C 293,191 303.9,193.3 300,179.1 294.3,162.1 274.5,134.8 261.4,135.4 259.1,136.1 259.4,139.9 261.1,142.2 268.5,145.6 276.2,170.4 286.7,184.4 Z"
            //d: "M 269.4,159.9 L 369,159 L 369,109 L 269,109",
            //d: "M 279,154 L 379,154",
            //d: "M 269,170 L 379,170 L 379,120",
        },
    }


    const reCalcPoin = (x, y, joint, rot =0) => {
        let ret = { X:0, Y:0 };
        let Xp = x - joint.x;
        let Yp = y - joint.y;

        let liX = (Xp * Math.cos(rot*pi_d_180))  -  (Yp * Math.sin(rot*pi_d_180)) ;
        liX += przesuniecie[0];
        liX *= wspP;
        liX = parseFloat(liX.toFixed(1));
        ret.X = liX + joint.x;

        let liY = (Xp * Math.sin(rot*pi_d_180)) + (Yp * Math.cos(rot*pi_d_180));
        liY = liY + przesuniecie[1];
        liY = liY * wspP;
        liY = parseFloat(liY.toFixed(1));
        ret.Y = liY + joint.y;

        return ret;
    }

    const reDrawPath = (path, joint = 0, rot = 0) => {
        const pathD1 = path.d.split(' ');
        let retObj = { d: '', j: {x: 0, y:0}};
        let dCalc ='';
        let shift = {x: 0, y: 0};

        let staw = {};
        if(joint) {
            console.log('jest', joint);
            staw.x = joint.x;
            staw.y = joint.y;
            shift.x = joint.x - path.c1.x;
            shift.y = joint.y - path.c1.y;
        } else {
            console.log('Nie ma');
            staw.x = path.c1.x;
            staw.y = path.c1.y;
        }


        pathD1.forEach( (el) => {
            if(el.length === 1) { 
                dCalc = dCalc + el + ' ';
            } else {
                const p2 = el.split(',');
                const li = reCalcPoin(parseFloat(p2[0]), parseFloat(p2[1]), staw, rot);
                dCalc = dCalc + li.X + ',' + li.Y + ' ';
            }
        })
        retObj.d = dCalc;

        const jo = reCalcPoin(path.c2.x, path.c2.y, staw, rot);

        retObj.j.x = jo.X;
        retObj.j.y = jo.Y;
        return retObj;
    }
    


    const firstDraw = (rot = 0) => {
        //const pathD1 = noga1.odn1.d.split(' ');
        //const paths = noga1.odn1;
        const obj1 = reDrawPath(noga1.odn1, 0, rot);
        dCalc1 = obj1.d;
        console.log(obj1.j);
        const obj2 = reDrawPath(noga1.odn2, obj1.j, 0 );
        dCalc2 = obj2.d;
    }

    useLayoutEffect( () => {
        firstDraw(noga1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCykl( cykl =>  cykl > 1  ? cykl >> 1 : 128 );
            setObrot(obrot => { 
                if(kierunek1) {
                    obrot =  obrot + 2;
                    if (obrot > 10) setKierunek1(0);
                } else {
                   obrot = obrot - 1;
                   if (obrot < -90) setKierunek1(1);
                }
                return obrot;
            });
            firstDraw(obrot);
        }, 500);
        return () => clearInterval(interval);
    }, [obrot]);

    return (
        <span>
            <svg className="h-6 w-6 inline" viewBox="-100 -100 600 300" xmlns="http://www.w3.org/2000/svg"
                style={{ width:'350px', height:'200px', background:'gray' }}
            >
                <g style={{ stroke: 'silver', strokeWidth: 1,  strokeOpacity: 1, fill: 'none', fillOpacity: 0  }}>
                    {/* <path  d="M 109.3,55.37 C 110.7,55.37 319.8,85.97 319.8,85.97 357.2,94.38 360.3,131.3 329.2,142.8 L 111.3,136.6 C 59.74,126.3 59.21,81.58 109.3,55.37 Z" /> */}
                    <circle cx="0" cy="0" r="100"  />
                </g>

                <g style={{ stroke: `${props.color || 'yellow'}`, strokeWidth: 1, strokeOpacity: 1, fillOpacity: 0 }} >
                    <path d="M -20,0 h 500 " />
                    <path d="M 0,-20 v 200 " />
                </g>

                <g style={{ zIndex: 6, visibility: "visible" , stroke: 'blue', strokeWidth: 3,  strokeOpacity: 1, fill: 'none', fillOpacity: 0  }}>
                    {/* <path  d="M 109.3,55.37 C 110.7,55.37 319.8,85.97 319.8,85.97 357.2,94.38 360.3,131.3 329.2,142.8 L 111.3,136.6 C 59.74,126.3 59.21,81.58 109.3,55.37 Z" /> */}
                    <path d={dCalc1} />
                    <path d={dCalc2} />
                </g>

                <g style={{ stroke: 'red', strokeWidth: 2,  strokeOpacity: 1, fill: 'none', fillOpacity: 0  }}>
                    {/* <path  d="M 109.3,55.37 C 110.7,55.37 319.8,85.97 319.8,85.97 357.2,94.38 360.3,131.3 329.2,142.8 L 111.3,136.6 C 59.74,126.3 59.21,81.58 109.3,55.37 Z" /> */}
                    <circle cx={`${noga1.odn1.c1.x}`} cy={`${noga1.odn1.c1.y}`} r="3"  />
                    <circle cx={`${noga1.odn1.c2.x}`} cy={`${noga1.odn1.c2.y}`} r="3"  />
                    <circle cx="100" cy="0" r="3"  />
                </g>




            </svg>
        </span>
    )
}