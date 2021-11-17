import React from 'react';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'

import Page from './Page';

// obrazki
import lasiusBrunneus from '../image/lasius-brunneus.jpg';
import lasiusEmarginatus from '../image/lasius-emarginatus.jpg';
import lasiusFlavus from '../image/lasius-flavus.jpg';
import LasiusFuliginosus from '../image/lasius-fuliginosus.jpg';
import lasiusNiger from '../image/lasius-niger.jpg';
import lasiusUmbratus from '../image/lasius-umbratus.jpg';
import formicaCinerea from '../image/formica-cinerea.jpg';
import formicaCunicularia from '../image/formica-cunicularia.jpg';
import formicaFusca from '../image/formica-fusca.jpg';
import formicaRufa from '../image/formica-rufa.jpg';
import formicaRufibarbis from '../image/formica-rufibarbis.jpg';
import formicaSanguinea from '../image/formica-sanguinea.jpg';
import formicaTruncorum from '../image/formica-truncorum.jpg';
import camponotusFallax from '../image/camponotus-fallax.jpg';
import camponotusHerculeanus from '../image/camponotus-herculeanus.jpg';
import camponotusLigniperda from '../image/camponotus-ligniperda.jpg';
import dolichoderusQuadripunctatus from '../image/dolichoderus-quadripunctatus.jpg';
import leptothoraxAcervorum from '../image/leptothorax-acervorum.jpg';
import manicaRubida from '../image/manica-rubida.jpg';
import myrmicaRubra from '../image/myrmica-rubra.jpg';
import polyergusRufescens from '../image/polyergus-rufescens.jpg';
import poneraCoarctata from '../image/ponera-coarctata.jpg';
import solenopsisFugax from '../image/solenopsis-fugax.jpg';
import strongylognathusTestaceus from '../image/strongylognathus-testaceus.jpg';
import tapinomaErraticum from '../image/tapinoma-erraticum.jpg';
import temnothoraxCrassispinus from '../image/temnothorax-crassispinus.jpg';
import tetramoriumCaespitum from '../image/tetramorium-caespitum.jpg';

//podstrony
import LasiusBrunneus from '../gatunek/lasius-brunneus';
import LasiusEmarginatus from '../gatunek/lasius-emarginatus';
import LasiusFlavus from '../gatunek/lasius-flavus';


const News = () => <h1>Nowości</h1>;
const Kontakt = () => <h1>Kontakt</h1>;

function App() {
    return (
        <BrowserRouter>
            <div className="main">

                <nav className="naglowek">
                    <h1>Atlas mrówek</h1>
                    Strona stworzona dla pasjonatów mrówek - przez pasionatów mrówek.
                    <br/>
                    <button className="naglowek__button">Spis wszytkich mrówek</button>
                    <button className="naglowek__button">Kreator wyszukiwania mrówki</button>
                    <div className="wybierz_mrowke">

                        <h2>Lasius</h2>
                                           
                        <Link to="gatunek/lasius-brunneus" className="kafelek">
                            <img src={lasiusBrunneus} alt="Opis gatunku Lasius brunneus"/>
                            <div>Lasius brunneus</div>
                        </Link>

                        <Link to="gatunek/lasius-emarginatus" className="kafelek">
                            <img src={lasiusEmarginatus}/>
                            <div>Lasius emarginatus</div>
                        </Link>

                        <Link to="gatunek/lasius-flavus" className="kafelek">
                                <img src={lasiusFlavus}/>
                                <div>Lasius flavus</div>
                        </Link>

                        <Link to="gatunek/lasius-fuliginosus" className="kafelek">
                            <img src={LasiusFuliginosus} alt="Save icon"/>
                            <div>Lasius fuliginosus</div> 
                        </Link>

                        <Link to="gatunek/lasius-niger" className="kafelek">
                            <img src={lasiusNiger} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>Lasius niger</div> 
                        </Link>

                        <Link to="gatunek/lasius-umbratus" className="kafelek">
                            <img src={lasiusUmbratus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>Lasius umbratus</div> 
                        </Link>
                        <h2>Formica</h2>
                        <Link to="gatunek/formica-cinerea" className="kafelek">
                            <img src={formicaCinerea} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>formica cinerea</div> 
                        </Link>
        
                        <Link to="gatunek/formica-cunicularia" className="kafelek">
                            <img src={formicaCunicularia} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>formica cunicularia</div> 
                        </Link>
        
                        <Link to="gatunek/formica-fusca" className="kafelek">
                            <img src={formicaFusca} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>formica fusca</div> 
                        </Link>
        
                        <Link to="gatunek/formica-rufa" className="kafelek">
                            <img src={formicaRufa} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>formica rufa</div> 
                        </Link>
        
                        <Link to="gatunek/formica-rufibarbis" className="kafelek">
                            <img src={formicaRufibarbis} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>formica rufibarbis</div> 
                        </Link>
        
                        <Link to="gatunek/formica-sanguinea" className="kafelek">
                            <img src={formicaSanguinea} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>formica sanguinea</div> 
                        </Link>
        
                        <Link to="gatunek/formica-truncorum" className="kafelek">
                            <img src={formicaTruncorum} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>formica truncorum</div> 
                        </Link>
        
                        <h2>Camponotus</h2>
                        <Link to="gatunek/camponotus-fallax" className="kafelek">
                            <img src={camponotusFallax} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>camponotus fallax</div> 
                        </Link>
        
                        <Link to="gatunek/camponotus-herculeanus" className="kafelek">
                            <img src={camponotusHerculeanus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>camponotus herculeanus</div> 
                        </Link>
        
                        <Link to="gatunek/camponotus-ligniperda" className="kafelek">
                            <img src={camponotusLigniperda} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>camponotus ligniperda</div> 
                        </Link>
        
                        <h2>Inne</h2>
                        <Link to="gatunek/dolichoderus-quadripunctatus" className="kafelek">
                            <img src={dolichoderusQuadripunctatus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>dolichoderus quadripunctatus</div> 
                        </Link>
        
                        <Link to="gatunek/leptothorax-acervorum" className="kafelek">
                            <img src={leptothoraxAcervorum} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>leptothorax acervorum</div> 
                        </Link>
        
                        <Link to="gatunek/manica-rubida" className="kafelek">
                            <img src={manicaRubida} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>manica rubida</div> 
                        </Link>
        
                        <Link to="gatunek/myrmica-rubra" className="kafelek">
                            <img src={myrmicaRubra} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>myrmica rubra</div> 
                        </Link>
        
                        <Link to="gatunek/polyergus-rufescens" className="kafelek">
                            <img src={polyergusRufescens} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>polyergus rufescens</div> 
                        </Link>
        
                        <Link to="gatunek/ponera-coarctata" className="kafelek">
                            <img src={poneraCoarctata} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>ponera coarctata</div> 
                        </Link>
        
                        <Link to="gatunek/solenopsis-fugax" className="kafelek">
                            <img src={solenopsisFugax} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>solenopsis fugax</div> 
                        </Link>
        
                        <Link to="gatunek/strongylognathus-testaceus" className="kafelek">
                            <img src={strongylognathusTestaceus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>strongylognathus testaceus</div> 
                        </Link>
        
                        <Link to="gatunek/tapinoma-erraticum" className="kafelek">
                            <img src={tapinomaErraticum} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>tapinoma erraticum</div> 
                        </Link>
        
                        <Link to="gatunek/temnothorax-crassispinus" className="kafelek">
                            <img src={temnothoraxCrassispinus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>temnothorax crassispinus</div> 
                        </Link>
        
                        <Link to="gatunek/tetramorium-caespitum" className="kafelek">
                            <img src={tetramoriumCaespitum} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <div>tetramorium caespitum</div> 
                        </Link>
        


                    </div>
                </nav>

                <section className="content">
                    content

                    <Routes>
                        {/* <Route path="/" exact element={ <LasiusBrunneus/> } /> */}
                        <Route path="/gatunek/lasius-brunneus" element={ <LasiusBrunneus/> } />
                        <Route path="/gatunek/lasius-emarginatus" element={ <LasiusEmarginatus/> } />
                        <Route path="/gatunek/lasius-flavus" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/lasius-fuliginosus" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/lasius-niger" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/lasius-umbratus" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/formica-cinerea" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/formica-cunicularia" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/formica-fusca" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/formica-rufa" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/formica-rufibarbis" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/formica-sanguinea" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/formica-truncorum" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/camponotus-fallax" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/camponotus-herculeanus" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/camponotus-ligniperda" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/dolichoderus-quadripunctatus" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/leptothorax-acervorum" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/manica-rubida" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/myrmica-rubra" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/polyergus-rufescens" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/ponera-coarctata" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/solenopsis-fugax" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/strongylognathus-testaceus" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/tapinoma-erraticum" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/temnothorax-crassispinus" element={ <LasiusFlavus/> } />
                        <Route path="/gatunek/tetramorium-caespitum" element={ <LasiusFlavus/> } />

{/*
                        <Route path="/path/lasius-flavus" element={ <LasiusFlavus/> } />             <--
                        <Route path="/path/lasius-fuliginosus" element={ <LasiusFuliginosus/> } />
                        <Route path="/path/lasius-niger" element={ <LasiusNiger/> } />
                        <Route path="/path/lasius-umbratus" element={ <LasiusUmbratus/> } />
                        <Route path="/path/formica-cinerea" element={ <FormicaCinerea/> } />
                        <Route path="/path/formica-cunicularia" element={ <FormicaCunicularia/> } />
                        <Route path="/path/formica-fusca" element={ <FormicaFusca/> } />
                        <Route path="/path/formica-rufa" element={ <FormicaRufa/> } />
                        <Route path="/path/formica-rufibarbis" element={ <FormicaRufibarbis/> } />
                        <Route path="/path/formica-sanguinea" element={ <FormicaSanguinea/> } />
                        <Route path="/path/formica-truncorum" element={ <FormicaTruncorum/> } />
                        <Route path="/path/camponotus-fallax" element={ <CamponotusFallax/> } />
                        <Route path="/path/camponotus-herculeanus" element={ <CamponotusHerculeanus/> } />
                        <Route path="/path/camponotus-ligniperda" element={ <CamponotusLigniperda/> } />
                        <Route path="/path/dolichoderus-quadripunctatus" element={ <DolichoderusQuadripunctatus/> } />
                        <Route path="/path/leptothorax-acervorum" element={ <LeptothoraxAcervorum/> } />
                        <Route path="/path/manica-rubida" element={ <ManicaRubida/> } />
                        <Route path="/path/myrmica-rubra" element={ <MyrmicaRubra/> } />
                        <Route path="/path/polyergus-rufescens" element={ <PolyergusRufescens/> } />
                        <Route path="/path/ponera-coarctata" element={ <PoneraCoarcta/> } />
                        <Route path="/path/solenopsis-fugax" element={ <SolenopsisFugax/> } />
                        <Route path="/path/strongylognathus-testaceus" element={ <StrongylognathusTestaceus/> } />
                        <Route path="/path/tapinoma-erraticum" element={ <TapinomaErraticum/> } />
                        <Route path="/path/temnothorax-crassispinus" element={ <TemnothoraxCrassispinus/> } />
                        <Route path="/path/tetramorium-caespitum" element={ <TetramoriumCaespitum/> } />

*/}
                    </Routes>
                    {/* <Page/> */}
                </section>

                <footer className="footer">
                    footer
                    <Routes>
                        {/* <Route path="/" exact element={ <LasiusBrunneus/> } /> */}
                        <Route path="/gatunek/lasius-brunneus" element={ <LasiusBrunneus/> } />
                        <Route path="/gatunek/lasius-emarginatus" element={ <LasiusEmarginatus/> } />
                        <Route path="/gatunek/lasius-flavus" element={ <LasiusFlavus/> } />
                    </Routes>

                </footer>
            </div>
        </BrowserRouter>
    );
}
    
export default App;