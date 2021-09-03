import React from 'react';
import Page from './Page';

function App() {
    return (
        <div>  {/* Router  */}
            <div className="main">

                <nav className="nav">
                    Nav
                </nav>

                <section className="content">
                    content
                    <Page/>
                </section>

                <footer className="footer">
                    footer
                </footer>
            </div>
        </div>
    );
}
    
export default App;