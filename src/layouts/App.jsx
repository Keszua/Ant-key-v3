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
                                           
                        <Link to="gatunek/lasius-brunneus" className="link">
                            <img src={lasiusBrunneus} alt="Opis gatunku Lasius brunneus"/>
                            <div>Lasius brunneus</div>
                        </Link>
                        <Link to="gatunek/lasius-emarginatus" className="link">
                            <img src={lasiusBrunneus} alt="Opis gatunku Lasius brunneus"/>
                            <div>Lasius brunneus</div>
                        </Link>

                        <button className="kafelek">
                            {/* <a href="http://atlasmrowek.pl/gatunek/lasius-emarginatus" title="Opis gatunku Lasius emarginatus"> */}
                                <img src={lasiusBrunneus} alt="Opis gatunku Lasius brunneus"/>
                                <div>Lasius brunneus</div>
                            {/* </a> */}
                        </button>

                        <button className="kafelek">
                            {/* <a href="http://atlasmrowek.pl/gatunek/lasius-emarginatus" title="Opis gatunku Lasius emarginatus"> */}
                                <img src={lasiusEmarginatus}/>
                                <div>Lasius emarginatus</div>
                            {/* </a> */}
                        </button>

                        <button className="kafelek" onClick={ () => console.log("Kliknięty")}>
                            {/* <a href="http://atlasmrowek.pl/gatunek/lasius-flavus" title="Opis gatunku Lasius emarginatus"> */}
                                <img src={lasiusFlavus}/>
                                <div>Lasius flavus</div>
                            {/* </a> */}
                        </button>

                        <button className="kafelek">
                            <img src={LasiusFuliginosus} alt="Save icon"/>
                            <br/>
                            <div>Lasius fuliginosus</div> 
                        </button>

                        <button className="kafelek">
                            <img src={lasiusNiger} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>Lasius niger</div> 
                        </button>

                        <button className="kafelek">
                            <img src={lasiusUmbratus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>Lasius umbratus</div> 
                        </button>
        
                        <h2>Formica</h2>
                        <button className="kafelek">
                            <img src={formicaCinerea} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>formica cinerea</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={formicaCunicularia} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>formica cunicularia</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={formicaFusca} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>formica fusca</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={formicaRufa} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>formica rufa</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={formicaRufibarbis} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>formica rufibarbis</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={formicaSanguinea} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>formica sanguinea</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={formicaTruncorum} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>formica truncorum</div> 
                        </button>
        
                        <h2>Camponotus</h2>
                        <button className="kafelek">
                            <img src={camponotusFallax} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>camponotus fallax</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={camponotusHerculeanus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>camponotus herculeanus</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={camponotusLigniperda} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>camponotus ligniperda</div> 
                        </button>
        
                        <h2>Inne</h2>
                        <button className="kafelek">
                            <img src={dolichoderusQuadripunctatus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>dolichoderus quadripunctatus</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={leptothoraxAcervorum} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>leptothorax acervorum</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={manicaRubida} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>manica rubida</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={myrmicaRubra} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>myrmica rubra</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={polyergusRufescens} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>polyergus rufescens</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={poneraCoarctata} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>ponera coarctata</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={solenopsisFugax} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>solenopsis fugax</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={strongylognathusTestaceus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>strongylognathus testaceus</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={tapinomaErraticum} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>tapinoma erraticum</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={temnothoraxCrassispinus} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>temnothorax crassispinus</div> 
                        </button>
        
                        <button className="kafelek">
                            <img src={tetramoriumCaespitum} onMouseOver={ () => console.log("onMouseOver") } onMouseOut={ () => console.log("onMouseOut") } />
                            <br/>
                            <div>tetramorium caespitum</div> 
                        </button>
        


                    </div>
                </nav>

                <section className="content">
                    <Routes>

                        <Route path="/gatunek/lasius-brunneus" element={ <LasiusBrunneus/> } />
                        <Route path="/gatunek/lasius-emarginatus" element={ <LasiusEmarginatus/> } />

                        {/* <Route path="teams/:teamId" element={<News />} />
                        <Route path="teams/new" element={<Kontakt />} /> */}
                    </Routes>
                    content
                    <Page/>
                </section>

                <footer className="footer">
                    footer
                </footer>
            </div>
        </BrowserRouter>
    );
}
    
export default App;