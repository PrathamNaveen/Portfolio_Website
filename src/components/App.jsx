import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

function App() {
    const [activeSection, setActiveSection] = useState('Home');

    return (
        <div className="App">
            <Header setActiveSection={setActiveSection} />
            <Body activeSection={activeSection} />
            <Footer />
        </div>
    );
}

export default App;
