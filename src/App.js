import styles from "./App.module.scss";

import Navbar from "./containers/Navbar";
import Landing from "./containers/Landing";
import Footer from "./containers/Footer";
import Portfolio from "./containers/Portfolio";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <div className={styles.App}>
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
