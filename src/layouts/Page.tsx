import React from 'react';
import SzukajMrowkiPage from '../pages/szukaj_mrowki2'

const Page = () => {
    return ( 
        <>
          {/* <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/nauka" component={NaukaPage}/>
            <Route path="/warsztaty" component={WarsztatyPage}/>
            <Route path="/zbiorka" component={ZbiorkaPage}/>
            <Route path="/pielgrzymka" component={PielgrzymkaPage}/>
            <Route path="/gra" component={GamePage}/>
            <Route path="/rajd" component={RajdPage}/>
            <Route path="/map" component={MapPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/admin" component={AdminPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route component={ErrorPage}/>
          </Switch> */}

          <SzukajMrowkiPage />

        </>

        );
}
 
export default Page;