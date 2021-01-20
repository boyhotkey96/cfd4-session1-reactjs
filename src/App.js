import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
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
import Loading from './components/Loading.js';

function App() {
    return <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/thong-tin-ca-nhan" component={Profile} />
            <Route path="/chi-tiet/:id" component={Detail} />
            <Route path="/dang-ky" component={Register} />
            <Route component={Page404} />
            {/* <Redirect from='*' to='/404' /> */}
        </Switch>
        <Footer />
        <Loading />
    </BrowserRouter>
}

export default App;