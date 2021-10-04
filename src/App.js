import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import FAQ from './components/FAQ/FAQ';
import NotFound from './NotFoud/NotFound';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/services'>
            <Services>

            </Services>
          </Route>
          <Route exact path='/faq'>
            <FAQ></FAQ>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
