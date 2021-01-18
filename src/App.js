import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/home';
import Profile from './pages/profile'
import Detail from './pages/detail'
import Page404 from './pages/page404'
import Register from './pages/register';
import Demohook from './pages/hook/';
import State from './pages/hook/State-test.js';
import Forwardref from './pages/hook/Forwardref.js';
import Forwardreftest from './pages/hook/Forwardref-test.js';

function App() {
    return <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/thong-tin-ca-nhan" exact>
                <Profile />
            </Route>
            <Route path="/chi-tiet" exact>
                <Detail />
            </Route>
            <Route path="/404" exact>
                <Page404 />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
}

export default App;
