import Navbar from "./containers/Navbar";
import Portfolio from "./containers/Portfolio";
import Landing from "./containers/Landing";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

import styles from "./App.module.scss";

// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className={styles.App}>
                <header className={styles.App_Navbar}>
                    <Navbar />
                </header>
                <div className={styles.App_Content}>
                    <Switch>
                        <div className={styles.App_Content}>
                            <Route exact path="/">
                                <Landing />
                            </Route>
                            <Route path="/Portfolio">
                                <Portfolio />
                            </Route>
                            <Route path="/Contact">
                                <Contact />
                            </Route>
                            <Route path="/About">
                                <About />
                            </Route>
                        </div>
                    </Switch>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}

export default App;
