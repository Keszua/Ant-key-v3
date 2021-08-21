
export interface Ixyz {
    x: number; 
    y: number;
}

export interface IdrawPath {
    id: number;
    d: string;
    joint: {x: number, y: number};
    shift: {x: number, y: number};
    rot: number;
    // path: [{style: {}, d: string}];
    path: Array<{style: {}, d: string}>;
}

const wspP = 1.0;
//const przesuniecie :Ixyz= { x:25, y:0 };
const pi_d_180 = 3.14159265/180;


export const reCalcPoin = (x :number, y: number, rot = 0, par: IdrawPath) :Ixyz => {
    let ret :Ixyz = { x: 0, y: 0 };
    let Xp = x - par.joint.x ;
    let Yp = y - par.joint.y;

    let liX = (Xp * Math.cos(rot*pi_d_180))  -  (Yp * Math.sin(rot*pi_d_180)) ;
    //liX = liX + par.shift.x + przesuniecie[0];
    liX = liX + par.shift.x ;
    liX *= wspP;
    liX = parseFloat(liX.toFixed(1));
    ret.x = liX + par.joint.x;

    let liY = (Xp * Math.sin(rot*pi_d_180)) + (Yp * Math.cos(rot*pi_d_180));
    // liY = liY + par.shift.y + przesuniecie[1];
    liY = liY + par.shift.y;
    liY = liY * wspP;
    liY = parseFloat(liY.toFixed(1));
    ret.y = liY + par.joint.y;

    return ret;
}

export const reDrawPath = (path :any, par: IdrawPath) :IdrawPath => {
    const pathD1 = path.d.split(' ');
    let retObj: IdrawPath =  { id: 0, d: '', joint: {x: 0, y:0}, shift: {x: 0, y:0}, rot: 0, path: [{style: {}, d: ''}]};
    let parNest: IdrawPath = { id: 0, d: '', joint: {x: 0, y:0}, shift: {x: 0, y:0}, rot: 0, path: [{style: {}, d: ''}]};

    let dCalc ='';
    let shift = {x: 0, y: 0};

    if( par.joint.x !== 0 && par.joint.y !== 0) {
        parNest.joint.x = par.joint.x;
        parNest.joint.y = par.joint.y;
        shift.x = par.joint.x - path.c1.x;
        shift.y = par.joint.y - path.c1.y;
    } else {
        parNest.joint.x = path.c1.x;
        parNest.joint.y = path.c1.y;
    }

    let prevLi= {x: 0, y: 0};
    let transformV = false;
    let transformH = false;
    pathD1.forEach( (el: any) => {
        if(el.length === 1) { 
            if(el === 'V') {
                transformV = true;
            } else if(el === 'H' ) { 
                transformH = true;
            } else {
                dCalc = dCalc + el + ' ';
            }
        } else {
            if(transformV) {
                transformV = false;
                const li = reCalcPoin(prevLi.x, el, par.rot, parNest);
                dCalc = dCalc + li.x + ',' + li.y + ' ';
            } else if(transformH) {
                transformH = false;
                const li = reCalcPoin(el, prevLi.y, par.rot, parNest);
                dCalc = dCalc + li.x + ',' + li.y + ' ';
            } else {
                const p2 = el.split(',');
                parNest.shift = {x: shift.x, y: shift.y};
                prevLi.x = parseFloat(p2[0]);
                prevLi.y = parseFloat(p2[1]);
                const li = reCalcPoin(parseFloat(p2[0]), parseFloat(p2[1]), par.rot, parNest);
                dCalc = dCalc + li.x + ',' + li.y + ' ';
            }
        }
    })

    const jo = reCalcPoin(path.c2.x, path.c2.y, par.rot, parNest);

    retObj.d = dCalc;
    retObj.joint.x = jo.x;
    retObj.joint.y = jo.y;
    retObj.shift.x = shift.x;
    retObj.shift.y = shift.y;
    return retObj;
}


export const reDrawArrayPath = (path :any, par: IdrawPath) :IdrawPath => {
    
    const retObj: IdrawPath =  { id: 0, d: '', joint: {x: 0, y:0}, shift: {x: 0, y:0}, rot: 0, path: [{style: {}, d: ''}]};
    let parNest: IdrawPath = { id: 0, d: '', joint: {x: 0, y:0}, shift: {x: 0, y:0}, rot: 0, path: [{style: {}, d: ''}]};

    let shift = {x: 0, y: 0};
    
    if( par.joint.x !== 0 && par.joint.y !== 0) {
        parNest.joint.x = par.joint.x;
        parNest.joint.y = par.joint.y;
        shift.x = par.joint.x - path.c1.x;
        shift.y = par.joint.y - path.c1.y;
    } else {
        parNest.joint.x = path.c1.x;
        parNest.joint.y = path.c1.y;
    }
    
    path.path.map( (pat :any, i :number) => { 
        let dCalc ='';
        let prevLi= {x: 0, y: 0};
        let transformV = false;
        let transformH = false;

        const pathD1 = pat.d.split(' ');
        //console.log('pathD1', pathD1);
        pathD1.forEach( (el: any) => {
            if(el.length === 1) { 
                if(el === 'V') {
                    transformV = true;
                } else if(el === 'H' ) { 
                    transformH = true;
                } else {
                    dCalc = dCalc + el + ' ';
                }
            } else {
                if(transformV) {
                    transformV = false;
                    const li = reCalcPoin(prevLi.x, el, par.rot, parNest);
                    dCalc = dCalc + li.x + ',' + li.y + ' ';
                } else if(transformH) {
                    transformH = false;
                    const li = reCalcPoin(el, prevLi.y, par.rot, parNest);
                    dCalc = dCalc + li.x + ',' + li.y + ' ';
                } else {
                    const p2 = el.split(',');
                    parNest.shift = {x: shift.x, y: shift.y};
                    prevLi.x = parseFloat(p2[0]);
                    prevLi.y = parseFloat(p2[1]);
                    const li = reCalcPoin(parseFloat(p2[0]), parseFloat(p2[1]), par.rot, parNest);
                    dCalc = dCalc + li.x + ',' + li.y + ' ';
                }
            }
        })

        // if(i === 0) retObj.path[i].d = dCalc;
        // else retObj.path.push({style: {}, d: dCalc });
        retObj.path.push({style: pat.style, d: dCalc });

        return null;
    })

    const jo = reCalcPoin(path.c2.x, path.c2.y, par.rot, parNest);

    //retObj.d = dCalc;
    retObj.joint.x = jo.x;
    retObj.joint.y = jo.y;
    retObj.shift.x = shift.x;
    retObj.shift.y = shift.y;
    return retObj;
}