import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MobileMenu from './components/mobileMenu/MobileMenus';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import HomeTwo from './pages/HomeTwo';
import LandingPage from './pages/LandingPage';
import News from './pages/News';
import Prevention from './pages/Prevention';
import TeamDetails from './pages/TeamDetails';
import TeamMeamber from './pages/TeamMember';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';

function App() {
    return (
        <Router>
            <Header />
            <MobileMenu />
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
                <Route path="/prevention">
                    <Prevention />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/team-member">
                    <TeamMeamber />
                </Route>
                <Route path="/team-details">
                    <TeamDetails />
                </Route>
                <Route path="/faq">
                    <Faq />
                </Route>
                <Route path="/contact">
                    <Contact />
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
