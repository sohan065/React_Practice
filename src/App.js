import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import Counter from './components/Counter/Counter';
import Change from './components/OnChange/Change';
import State from './components/Hooks/State';
import Bubbling from './components/EventBubbling/bubbling';
import Form from './components/FormHandle/Form';
import Home from './components/STATE_LIFTING/Home';
const App = () => {
    return (
        <div>
            {/* <header>
                <h1>A template for React Project</h1>
            </header> */}
            <main>
                {/* <Change /> */}
                <Home />
                {/* <Counter /> */}
            </main>
            {/* <footer>
                <p className="left">
                    Subscribe to my{' '}
                    <a href="https://www.youtube.com/c/anisulislamrubel">
                        <FaYoutube className="footer__icon" />
                    </a>{' '}
                    channel
                </p>
                <p className="right">Developed with &hearts; by Sohanur Rahman</p>
            </footer> */}
        </div>
    );
};

export default App;
