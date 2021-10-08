import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import HomeTwo from './pages/HomeTwo';
import LandingPage from './pages/LandingPage';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/landing-page">
                    <LandingPage />
                </Route>
                <Route path="/home-two">
                    <HomeTwo />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
