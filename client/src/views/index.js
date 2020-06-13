import React, { Suspense } from 'react';

import history from './history';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

// animations
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// pages
// const Home = React.lazy(() =>
//   import('./pages/Home')
// );
// const Category = React.lazy(() =>
//   import('./pages/Articles/Category')
// );
// const NotFound = React.lazy(() =>
//   import('./pages/NotFound')
// );
import Home from './pages/Home'
import Category from './pages/Articles/Category';

import NotFound from './pages/NotFound';



// containers
// const Navigation = React.lazy(() =>
//   import('../containers/Navigation')
// );
// const Footer = React.lazy(() =>
//   import('../containers/Footer')
// );
import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer';



const Main = ( { toggleTheme }) => {

  // const location = history.location;

  // console.log(location)

  return (
    // <Suspense fallback={<h1>LOADING</h1>}>

      <Router history={history}>
        <Navigation toggleTheme={toggleTheme} />

        
          
        

        <Route render={({ location }) => (
          <div className="views-container">
          <TransitionGroup className="TG">
            <CSSTransition
              key={location.key} 
              timeout={300}
              // timeout={{enter: 800, exit: 400}}
              classNames="fade" 
              // mountOnEnter={false}
              // unmountOnExit={true}
            >
              <div>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/articles/:category" component={Category} />
                  <Redirect from="/articles" to="/articles/all" />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
          </div>
        )}/>

      
        
        <Footer/>
      </Router>
    // </Suspense>
  )
}

export default Main
